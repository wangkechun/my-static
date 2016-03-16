const API_HOST = "http://96a8to7r.apps.qbox.me";

const Route = ReactRouter.Route;
const Router = ReactRouter.Router;
const Redirect = ReactRouter.Redirect;
const Link = ReactRouter.Link;

const propTypesUser = React.PropTypes.arrayOf(React.PropTypes.shape({
    created_at: React.PropTypes.string.isRequired,
    department: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    real_name: React.PropTypes.string.isRequired,
    updated_at: React.PropTypes.string.isRequired
}));
const propTypeDepartment = React.PropTypes.arrayOf(React.PropTypes.string.isRequired);
//display属性的改变
function css_display(value) {
    if (value) {
        return {display: 'block'};
    } else {
        return {display: 'none'};
    }
}
//根据mood显示对应的心情
function mood_img_src(mood) {
    if (!mood) {
        return '';
    }
    return {
        grinning: "./public/img/mood1.png",
        smile: "./public/img/mood2.png",
        neutral_face: "./public/img/mood3.png",
        disappointed: "./public/img/mood4.png"
    }[mood];
}


//日历组件
const Calender = React.createClass({displayName: "Calender",
    propTypes: {
        setDateNow: React.PropTypes.func.isRequired
    },
    componentDidMount () {
        var cal = this.cal = $("<div class=\"date\"/>");
        cal.datepicker({
            format: 'yyyy-mm-dd',
            todayHighlight: true
        });
        cal.on("changeDate", ()=> {
            var date = cal.datepicker('getFormattedDate');
            this.props.setDateNow(date);
        });
        var node = ReactDOM.findDOMNode(this);
        $(node).append(cal);
    },
    render () {
        return ( React.createElement("div", null))
    }
});

//侧边的部门组件
const Caption = React.createClass({displayName: "Caption",
    propTypes: {
        users: propTypesUser,
        department: propTypeDepartment,
    },
    getInitialState() {
        return {showUser: -1};
    },
    setShowUsers(id) {
        if (id === this.state.showUser) id = -1;
        this.setState({showUser: id});
    },
    render () {
        var departmentNode = this.props.department.map((dep, id)=> {
            var users = this.props.users.filter((user)=>user.department === dep);
            return (
                React.createElement("div", {key: id}, 
                    React.createElement("li", {onClick: this.setShowUsers.bind(null,id)}, dep, "(", users.length, ")"), 
                    React.createElement("ul", {className: "gd", style: css_display(this.state.showUser===id)}, 
                        
                            users.map((user, id)=>
                                React.createElement(Link, {key: id, to: "/user/"+user.id}, 
                                    React.createElement("li", null, user.real_name)
                                )
                            )
                        
                    )
                )
            );
        });
        return (
            React.createElement("div", {className: "caption"}, 
                React.createElement("ul", {className: "c_de"}, 
                    departmentNode
                )
            )
        )
    }
});

//Content组件
const Content = React.createClass({displayName: "Content",
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    propTypes: {
        params: (props, propName, componentName)=> {
            if (props.params.day && props.params.depId) {
                return;
            } else if (props.params.userNoteId) {
                return;
            } else {
                return new Error(' content 中 props.params 数据错误！');
            }
        }
    },
    getInitialState () {
        return {
            department: [],
            users: []
        };
    },
    componentWillMount () {
        $.when($.get(API_HOST + "/departments"), $.get(API_HOST + "/users")).done((department, users)=> {
            this.setState({
                department: department[0].data.reverse(),
                users: users[0].data
            });
        });
    },
    setDateNow (dateNow) {
        this.context.router.push("/day/" + dateNow + "/dep/" + this.props.params.depId);
    },

    render () {
        var params = this.props.params;
        var rightArea = null;
        if (params.day) {
            rightArea = React.createElement(RightArea, {department: this.state.department, users: this.state.users, 
                                   userNoteId: "", date: params.day, depId: params.depId})
        } else if (params.userNoteId) {
            rightArea = React.createElement(RightArea, {department: this.state.department, users: this.state.users, 
                                   userNoteId: params.userNoteId})
        }
        return (
            React.createElement("div", {className: "content"}, 
                React.createElement(LeftArea, {department: this.state.department, users: this.state.users, 
                          setDateNow: this.setDateNow}), 
                rightArea
            )
        )
    }
});


//Dates组件
const Dates = React.createClass({displayName: "Dates",
    propTypes: {
        date: React.PropTypes.string.isRequired
    },
    render () {
        return React.createElement("div", {className: "date"}, this.props.date)
    }
});

//Departments组件
const Departments = React.createClass({displayName: "Departments",
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    propTypes: {
        users: propTypesUser,
        department: propTypeDepartment,
        date: React.PropTypes.string.isRequired,
        depId: React.PropTypes.string.isRequired
    },
    getInitialState() {
        return {noteToday: []}
    },
    componentWillMount(){
        $.get(API_HOST + "/posts?day=" + this.props.date, (date) => {
            if (!date.data) {
                date.data = [];
            }
            this.setState({noteToday: date.data});
        });
    },
    componentWillReceiveProps(nextProps){
        if (nextProps.date != this.props.date) {
            $.get(API_HOST + "/posts?day=" + nextProps.date, (date)=> {
                if (!date.data) {
                    date.data = [];
                }
                this.setState({noteToday: date.data});
            });
        }
    },
    setShowUsers (id) {
        if (id === parseInt(this.props.depId)) {
            id = -1;
            this.context.router.push("/day/" + this.props.date + "/dep/" + "-1");
        }
        this.context.router.push("/day/" + this.props.date + "/dep/" + id);
    },
    render () {
        var departmentNode = this.props.department.map((dep, id)=> {
            var users = this.props.users.filter((user)=>user.department === dep).map((user, id)=> {
                var noteNode = _.find(this.state.noteToday, (note)=> note.user_id === user.id);
                if (!noteNode) {
                    noteNode = {mood: "", content: ""};
                }
                return {real_name: user.real_name, mood: noteNode.mood, content: noteNode.content};

            });
            return (
                React.createElement("div", {key: id}, 
                    React.createElement("li", {onClick: this.setShowUsers.bind(null,id)}, dep, 
                        React.createElement("div", {className: "num"}, "共", users.length, "人")
                    ), 
                    React.createElement("ul", {className: "gs", style: css_display(parseInt(this.props.depId) ===id)}, 
                        users.map((user, id)=>(
                            React.createElement("li", {key: id}, 
                                React.createElement("div", {className: "name"}, "姓名：", user.real_name), 
                                React.createElement("div", {className: "mood"}, "心情：", React.createElement("img", {src: mood_img_src(user.mood), alt: ""})), 
                                React.createElement("div", {className: "note"}, "日志：", 
                                    React.createElement("div", {className: "noteCon", 
                                         dangerouslySetInnerHTML: {__html:marked(user.content||'')}})
                                )
                            )
                        ))
                    )
                )
            )
        });
        return (
            React.createElement("ul", {className: "departments"}, 
                departmentNode
            )
        )
    }
});

//Header组件
const Header = React.createClass({displayName: "Header",
    render () {
        return (
            React.createElement("header", {className: "header"}, 
                React.createElement("div", {className: "icon"}, 
                    React.createElement("img", {src: "./public/img/icon.png", alt: ""})
                ), 
                React.createElement("div", {className: "nav"}, 
                    React.createElement(NoteBtn, null), 
                    React.createElement(Inf, null)
                )
            )
        )
    }
});

//个人信息Inf按钮组件
const Inf = React.createClass({displayName: "Inf",
    getInitialState () {
        return {
            InfShow: false
        };
    },
    showInf () {
        this.setState({InfShow: !this.state.InfShow});
    },
    render () {
        return (
            React.createElement("span", null, 
                React.createElement("button", {id: "inf", type: "button", name: "button", onClick: this.showInf}, "个人信息"), 
                React.createElement(UserInf, {InfShow: this.state.InfShow})
            )
        );
    }
});

//LeftArea组件
const LeftArea = React.createClass({displayName: "LeftArea",
    render() {
        return (
            React.createElement("div", {className: "leftArea"}, 
                React.createElement(Calender, React.__spread({},  this.props)), 
                React.createElement(Caption, React.__spread({},  this.props))
            )
        );
    }
});

//Note按钮组件
const NoteBtn = React.createClass({displayName: "NoteBtn",
    getInitialState () {
        return {
            NoteShow: false
        }
    },
    showNote () {
        this.setState({NoteShow: !this.state.NoteShow});
    },
    render () {
        return (
            React.createElement("span", null, 
                 React.createElement("button", {id: "note", type: "button", name: "button", onClick: this.showNote}, "我的日志"), 
                 React.createElement(NoteMe, {show: this.state.NoteShow, showNote: this.showNote})
             )
        );
    }
});

//我的日志的具体组件
const NoteMe = React.createClass({displayName: "NoteMe",
    propTypes: {
        show: React.PropTypes.bool.isRequired,
        showNote: React.PropTypes.func.isRequired
    },
    render() {
        return (
            React.createElement("div", {className: "note_me", style: css_display(this.props.show)}, 
                React.createElement("div", {id: "mask", onClick: this.props.showNote}), 
                React.createElement("div", {id: "popup"}, 
                    React.createElement("div", {className: "title"}, 
                        "我的日志"
                    ), 
                    React.createElement("div", {className: "icon", onClick: this.props.showNote}), 
                    React.createElement("div", {className: "con"}, 
                        React.createElement("div", {className: "date"}, 
                            "选择日期", React.createElement("br", null), 
                            React.createElement("input", {type: "text", name: "name"})
                        ), 
                        React.createElement("div", {className: "mood"}, 
                            "我的心情", 
                            React.createElement("ul", null, 
                                React.createElement("li", null, React.createElement("img", {src: "./public/img/mood1.png", alt: ""})), 
                                React.createElement("li", null, React.createElement("img", {src: "./public/img/mood2.png", style: {marginTop:"5px"}, alt: ""})), 
                                React.createElement("li", null, React.createElement("img", {src: "./public/img/mood3.png", style: {marginTop:"7px"}, alt: ""})), 
                                React.createElement("li", null, React.createElement("img", {src: "./public/img/mood4.png", style: {marginTop:"5px"}, alt: ""}))
                            )
                        ), 
                        React.createElement("div", {className: "note"}, 
                            "我的日志", 
                            React.createElement("textarea", {name: "name", className: "form-control"})
                        )
                    ), 
                    React.createElement("button", {className: "certern", type: "button", name: "button"}, "确定")
                ), 
                React.createElement("div", {className: "add_com_text"}, 
                    React.createElement("div", {className: "title"}, 
                        "我的评论"
                    ), 
                    React.createElement("textarea", {name: "name"}), 
                    React.createElement("button", {className: "certern", type: "button", name: "button"}, "确定")
                )
            )
        )
    }
});

//RightArea组件
const RightArea = React.createClass({displayName: "RightArea",
    propTypes: {
        userNoteId: React.PropTypes.string.isRequired
    },
    render () {
        if (this.props.userNoteId === "") {
            return (
                React.createElement("div", {className: "rightArea"}, 
                    React.createElement(Dates, React.__spread({},  this.props)), 
                    React.createElement(Departments, React.__spread({},  this.props))
                )
            );
        } else {
            return (
                React.createElement(User, React.__spread({},  this.props))
            );
        }
    }
});

const User = React.createClass({displayName: "User",
    propTypes: {
        userNoteId: React.PropTypes.string.isRequired,
        users: propTypesUser
    },
    getInitialState () {
        return {
            note: [],
            noteShow: -1,
            allComShow: -1,
            addComShow: false,
            addComSuccess: false
        };
    },
    componentWillMount () {
        $.get(API_HOST + "/posts?uid=" + this.props.userNoteId, (notes)=> {
            this.setState({note: notes.data});
        });
    },
    componentWillReceiveProps(nextProps){
        $.get(API_HOST + "/posts?uid=" + nextProps.userNoteId, (notes)=> {
            this.setState({note: notes.data});
        });
    },
    setNoteShow (id) {
        if (id === this.state.noteShow) {
            id = -1;
        }
        this.setState({noteShow: id});
    },
    viewAllComment (id) {
        if (id === this.state.allComShow) {
            id = -1;
        }
        this.setState({allComShow: id});
    },
    addCom () {
        this.setState({addComShow: true});
    },
    closeAdd () {
        this.setState({addComShow: false});
    },
    addSuccess () {
        this.setState({addComShow: false});
        setTimeout(()=> {
            this.setState({addComSuccess: true});
            setTimeout(()=> {
                this.setState({addComSuccess: false});
            }, 3000);
        }, 1000);
    },
    render () {
        var user = this.props.users.find((user)=>user.id === this.props.userNoteId);
        if (!user) {
            return null;
        }
        var note_list = this.state.note.filter((note)=>note.user_id === user.id).map((note, id)=>(
                React.createElement("div", {key: id}, 
                    React.createElement("li", {onClick: this.setNoteShow.bind(null,id)}, 
                        note.day
                    ), 
                    React.createElement("div", {className: "notess"}, 
                        React.createElement("div", {className: "mo"}, "心情：", React.createElement("img", {src: mood_img_src(note.mood), alt: ""})), 
                        React.createElement("div", {className: "rizhi"}, "日志：", 
                            React.createElement("div", {className: "con"}, React.createElement("span", {
                                dangerouslySetInnerHTML: {__html:marked(note.content)}}))
                        ), 
                        React.createElement("div", {className: "comment"}, 
                            React.createElement("a", {onClick: this.viewAllComment.bind(null,id)}, "查看所有评论"), 
                            React.createElement("div", {className: "all_com", style: css_display(this.state.noteShow===id)}, "暂无评论")
                        ), 
                        React.createElement("div", {className: "add_comment"}, React.createElement("a", {onClick: this.addCom}, "添加评论")), 
                        React.createElement("div", {className: "add_ssuccess", style: css_display(this.state.addComSuccess)}, "添加成功"), 
                        React.createElement("div", {id: "mask", onClick: this.closeAdd, style: css_display(this.state.addComShow)}), 
                        React.createElement("div", {className: "add_com_text", style: css_display(this.state.addComShow)}, 
                            React.createElement("div", {className: "title"}, 
                                "我的评论"
                            ), 
                            React.createElement("div", {className: "icon", onClick: this.closeAdd}), 
                            React.createElement("textarea", {name: "name"}), 
                            React.createElement("button", {className: "btn btn-primary", type: "button", name: "button", 
                                    onClick: this.addSuccess}, "确定"
                            )
                        )
                    )
                )
            )
        );
        return (
            React.createElement("div", {className: "rightArea"}, 
                React.createElement("div", {className: "name"}, user.real_name), 
                React.createElement("div", {className: "de"}, "--", user.department), 
                React.createElement("ul", {className: "note_nav"}, 
                    note_list
                )
            )
        );
    }
});

//具体的个人信息组件
const UserInf = React.createClass({displayName: "UserInf",
    propTypes: {
        InfShow: React.PropTypes.bool.isRequired,
    },
    getInitialState () {
        return {
            department: "loading",
            real_name: "loadding"
        }
    },
    componentWillMount () {
        //获取本人信息
        $.get(API_HOST + "/user/overview", (user)=> {
            this.setState({
                department: user.data.department,
                real_name: user.data.real_name
            });
        });
    },
    render () {
        return (
            React.createElement("ul", {id: "user", style: css_display(this.props.InfShow)}, 
                React.createElement("li", null, this.state.department), 
                React.createElement("li", null, this.state.real_name), 
                React.createElement("li", {id: "change_dep"}, "修改部门"), 
                React.createElement("li", null, "登出")
            )
        )
    }
});

const Main = React.createClass({displayName: "Main",
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    componentWillMount(){
        //给路径赋默认值
        var params = this.props.params;
        if (!params.day && !params.userNoteId && !params.depId) {
            this.context.router.push("/day/" + moment().format('YYYY-MM-DD') + "/dep/-1");
        }
    },
    //加载最终页面 两个组件Header和Content
    render(){
        var params = this.props.params;
        if (!params){
            return null;
        }
        if (!params.day && !params.userNoteId && !params.depId) {
            return null;
        }
        return (
            React.createElement("div", {className: "main"}, 
                React.createElement(Header, null), 
                React.createElement(Content, {params: this.props.params})
            )
        )
    }
});



ReactDOM.render((
    React.createElement(Router, null, 
        React.createElement(Route, {path: "/", component: Main}, 
            React.createElement(Route, {name: "user", path: "/user/:userNoteId", component: Main}), 
            React.createElement(Route, {name: "day", path: "/day/:day", component: Main}
            ), 
            React.createElement(Route, {name: "department", path: "/day/:day/dep/:depId", component: Main})
        ), 
        React.createElement(Route, {path: "*", component: Main})
    )
), document.getElementById('main'));