'use strict';

//display属性的改变
function css_display(value) {
    if (value) {
        return { display: 'block' };
    } else {
        return { display: 'none' };
    }
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        //先查询cookie是否为空，为空就return ""
        var c_start = document.cookie.indexOf(c_name + ":"); //通过String对象的indexOf()来检查这个cookie是否存在，不存在就为 -1　　
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1; //最后这个+1其实就是表示"="号啦，这样就获取到了cookie值的开始位置
            var c_end = document.cookie.indexOf(";", c_start); //其实我刚看见indexOf()第二个参数的时候猛然有点晕，后来想起来表示指定的开始索引的位置...这句是为了得到值的结束位置。因为需要考虑是否是最后一项，所以通过";"号是否存在来判断
            if (c_end == -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end)); //通过substring()得到了值。想了解unescape()得先知道escape()是做什么的，都是很重要的基础，想了解的可以搜索下，在文章结尾处也会进行讲解cookie编码细节
        }
    }
    return "";
}
'use strict';

var API_HOST = "http://96a8to7r.apps.qbox.me";

var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var Redirect = ReactRouter.Redirect;
var Link = ReactRouter.Link;

var propTypesUser = React.PropTypes.arrayOf(React.PropTypes.shape({
    created_at: React.PropTypes.string.isRequired,
    department: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    real_name: React.PropTypes.string.isRequired,
    updated_at: React.PropTypes.string.isRequired
}));
var propTypeDepartment = React.PropTypes.arrayOf(React.PropTypes.string.isRequired);

var wilddog = new Wilddog('https://wuerweb.wilddogio.com/');
var userOnline = wilddog.child('userOnline');
var Topical = wilddog.child('topical');
var Comment = wilddog.child('comment');
"use strict";

var Story = [{
    title: "端午包粽子",
    time: "2016-06-09",
    content: "一年一度的端午节到了,不能回家的小伙伴们在男生寝室开启了包粽子之旅,香喷喷的粽子让大家都垂涎三尺",
    img: ["./public/img/rice-dumplings.jpg"]
}];
"use strict";

var Prize = [{
    name: "2013年五四红旗团支部",
    src: "./public/img/prize-01.jpg"
}, {
    name: "2014-2015年度模范班集体",
    src: "./public/img/prize_02.jpg"
}, {
    name: "2013年拔河比赛优秀个人奖",
    src: "./public/img/prize_03.jpg"
}, {
    name: "2014-2015年度百优宿舍",
    src: "./public/img/prize-01.jpg"
}, {
    name: "2013-2014年度百优宿舍",
    src: "./public/img/prize-02.jpg"
}, {
    name: "2014-2015年度文明宿舍",
    src: "./public/img/prize-03.jpg"
}, {
    name: "第十届宿舍文化节学习型宿舍",
    src: "./public/img/prize-04.jpg"
}, {
    name: "第八届宿舍文化节雅室设计最具特色奖",
    src: "./public/img/prize-05.jpg"
}];
"use strict";

var Users = [{
    id: "1050110",
    name: "余庆春",
    addr: "湖北省鄂州市鄂城区",
    addNow: "湖南湘潭",
    phone: "13017328124",
    qq: "35068431"
}, {
    id: "1105030125",
    name: "杨翔",
    addr: "湖南省邵阳市隆回县",
    addNow: "北京市",
    phone: "18810605211",
    qq: "2859258798"
}, {
    id: "1105020217",
    name: "张定涛",
    addr: "湖南省邵阳市五峰铺",
    addNow: "广东省",
    phone: "13711882863",
    qq: "2385419998"
}, {
    id: "1206010208",
    name: "李尚卿",
    addr: "辽宁省辽阳市白塔区",
    addNow: "湖南湘潭",
    phone: "15574487376",
    qq: "184633316"
}, {
    id: "1305040201",
    name: "唐汉英",
    addr: "海南省万宁市乐东县",
    addNow: "北京",
    phone: "18973247748",
    qq: "461481838"
}, {
    id: "1305040202",
    name: "杨锦驹",
    addr: "广东省河源市和平县",
    addNow: "湖南湘潭",
    phone: "15197293299",
    qq: "1010611232"
}, {
    id: "1305040203",
    name: "吴彦辉",
    addr: "福建省福州市连江县",
    addNow: "湖南湘潭",
    phone: "13047224957",
    qq: "625405645"
}, {
    id: "1305040204",
    name: "大王超",
    addr: "河北省邢台市桥西区",
    addNow: "湖南湘潭",
    phone: "15574477859",
    qq: "1814813319;"
}, {
    id: "1305040205",
    name: "刘兆泽",
    addr: "重庆市秀山县",
    addNow: "湖南湘潭",
    phone: "18573207797",
    qq: "1059641572"
}, {
    id: "1305040206",
    name: "赵明星",
    addr: "河南省新乡市牧野区",
    addNow: "湖南湘潭",
    phone: "18707325310",
    qq: "1021008538"
}, {
    id: "1305040207",
    name: "华翔",
    addr: "安徽省安庆桐城市",
    addNow: "湖南湘潭",
    phone: "15197160231",
    qq: "727236249"
}, {
    id: "1305040208",
    name: "晏强",
    addr: "湖南省岳阳市岳阳县",
    addNow: "湖南湘潭",
    phone: "15197256215",
    qq: "756567648"
}, {
    id: "1305040209",
    name: "小王超",
    addr: "湖南省湘乡市",
    addNow: "湖南湘潭",
    phone: "15197191748",
    qq: "296453402"
}, {
    id: "1305040210",
    name: "欧天赐",
    addr: "湖南省益阳市南县",
    addNow: "湖南湘潭",
    phone: "13017147872",
    qq: "1057409036"
}, {
    id: "1305040211",
    name: "谭超",
    addr: "湖南省常德市武陵区",
    addNow: "湖南湘潭",
    phone: "15573291349",
    qq: "798168174"
}, {
    id: "1305040212",
    name: "李潞峰",
    addr: "湖南省长沙市宁乡县",
    addNow: "湖南湘潭",
    phone: "15673267564",
    qq: "l755842700l"
}, {
    id: "1305040213",
    name: "刘泽欢",
    addr: "湖南省娄底市双峰县",
    addNow: "湖南湘潭",
    phone: "15107322623",
    qq: "935086037"
}, {
    id: "1305040214",
    name: "邓玉喜",
    addr: "湖南省衡阳市耒阳县",
    addNow: "湖南湘潭",
    phone: "13762425822",
    qq: "1024520807"
}, {
    id: "1305040215",
    name: "楚惟政",
    addr: "湖南省岳阳市汨罗市",
    addNow: "湖南湘潭",
    phone: "15173267096",
    qq: "702072463"
}, {
    id: "1305040216",
    name: "钟佩齐",
    addr: "湖南省常德市桃源县",
    addNow: "湖南湘潭",
    phone: "15173267195",
    qq: "250162363"
}, {
    id: "1305040217",
    name: "陈庆生",
    addr: "甘肃省定西市岷县",
    addNow: "湖南湘潭",
    phone: "13789317233",
    qq: "1399368351"
}, {
    id: "1305040218",
    name: "郭定海",
    addr: "浙江省温州市洞头县",
    addNow: "湖南湘潭",
    phone: "15197209862",
    qq: "1078300829"
}, {
    id: "1305040219",
    name: "赵郑瑞",
    addr: "河北省保定市曲阳县",
    addNow: "湖南湘潭",
    phone: "15197282610",
    qq: "2419251049"
}, {
    id: "1305040220",
    name: "米雪碧",
    addr: "重庆市潼南县",
    addNow: "湖南湘潭",
    phone: "15173267135",
    qq: "657403288;"
}, {
    id: "1305040221",
    name: "徐雪梅",
    addr: "河南省南阳市桐柏县",
    addNow: "河南郑州",
    phone: "15898519690",
    qq: "970231732"
}, {
    id: "1305040222",
    name: "马雯颖",
    addr: "湖南省湘潭市雨湖区",
    addNow: "湖南湘潭",
    phone: "18390218071",
    qq: "995344154"
}, {
    id: "1305040223",
    name: "潘蕾",
    addr: "湖南省岳阳市岳阳县",
    addNow: "湖南湘潭",
    phone: "15197228706",
    qq: "941399127"
}, {
    id: "1305040224",
    name: "邹广花",
    addr: "湖南省衡阳市衡阳县",
    addNow: "湖南湘潭",
    phone: "15173266501",
    qq: "1328903109"
}, {
    id: "1305040225",
    name: "王朗",
    addr: "湖南省娄底市双峰县",
    addNow: "湖南湘潭",
    phone: "13789312187",
    qq: "1348151288"
}, {
    id: "1305040226",
    name: "曹慧琳",
    addr: "山西省晋中市介休市",
    addNow: "上海市",
    phone: "15173266529",
    qq: "1057275848"
}, {
    id: "1305040227",
    name: "王莉",
    addr: "湖南省张家界市慈利县",
    addNow: "湖南湘潭",
    phone: "15197153223",
    qq: "1441897267"
}, {
    id: "1305040228",
    name: "汪帆",
    addr: "青海省海东市乐都县",
    addNow: "湖南湘潭",
    phone: "18073218551",
    qq: "398434639"
}, {
    id: "1306040133",
    name: "唐琳雯",
    addr: "江苏省无锡市惠山区",
    addNow: "湖南湘潭",
    phone: "18068351581",
    qq: "2768351581"
}];
"use strict";

var Login = React.createClass({
    displayName: "Login",
    getInitialState: function getInitialState() {
        return {
            id: '',
            successLogin: true
        };
    },
    handleSubmit: function handleSubmit(e) {
        var _this = this;

        e.preventDefault();
        var loginSuccess = false;
        Users.map(function (user, i) {
            if (user.id === _this.state.id) {
                console.log("登录成功");
                document.cookie = "userId:" + user.id;
                var User = userOnline.child(user.name);
                loginSuccess = true;
                User.set(Wilddog.ServerValue.TIMESTAMP);
                _this.props.changeUser(user);
                _this.setState({ id: "", successLogin: true });
            }
        });
        if (!loginSuccess) {
            console.log("输入错误,请重新输入");
            this.setState({ id: "", successLogin: false });
        }
    },
    handleChange: function handleChange(e) {
        this.setState({
            id: e.target.value
        });
    },
    render: function render() {
        return React.createElement(
            "div",
            { className: "login" },
            React.createElement(
                "h2",
                null,
                "欢迎来到物二大家庭"
            ),
            React.createElement(
                "form",
                { onSubmit: this.handleSubmit },
                React.createElement(
                    "div",
                    { className: "loginWrong", style: css_display(!this.state.successLogin) },
                    "输入错误,请重新输入"
                ),
                React.createElement(
                    "div",
                    { className: "form-group" },
                    React.createElement(
                        "label",
                        null,
                        "学号:"
                    ),
                    React.createElement("input", { type: "id", value: this.state.id, className: "form-control", onChange: this.handleChange })
                ),
                React.createElement(
                    "button",
                    { type: "submit", className: "btn btn-default" },
                    "登录"
                )
            )
        );
    }
});
"use strict";

var CommentModule = React.createClass({
    displayName: "CommentModule",

    mixins: [WildReactMixin],
    getInitialState: function getInitialState() {
        return { cri: "", criList: [] };
    },
    componentWillMount: function componentWillMount() {
        this.bindAsArray(Comment, "criList");
    },
    handleChange2: function handleChange2(e) {
        this.setState({
            cri: e.target.value
        });
    },
    handleSubmit2: function handleSubmit2(e) {
        e.preventDefault();
        if (this.state.cri !== "") {
            Comment.push({ topicalTime: this.props.topical.time, name: this.props.user.name, cri: this.state.cri });
            this.setState({ cri: "" });
            console.log("评论成功");
        }
    },
    render: function render() {
        var _this = this;

        var list = this.state.criList.filter(function (c, i) {
            return c.topicalTime === _this.props.topical.time;
        }).map(function (c, i) {
            return React.createElement(
                "li",
                null,
                React.createElement(
                    "span",
                    { className: "user" },
                    c.name,
                    ":"
                ),
                c.cri
            );
        });
        return React.createElement(
            "div",
            { className: "comment" },
            React.createElement(
                "ul",
                { className: "commentList" },
                list
            ),
            React.createElement(
                "form",
                { className: "addComment", onSubmit: this.handleSubmit2 },
                React.createElement("textarea", { value: this.state.cri, onChange: this.handleChange2, className: "form-control", rows: "1" }),
                React.createElement(
                    "button",
                    { type: "submit", className: "btn btn-default" },
                    "评论"
                )
            )
        );
    }
});

var Section5 = React.createClass({
    displayName: "Section5",

    mixins: [WildReactMixin],
    getInitialState: function getInitialState() {
        return { topical: "", topicalList: [] };
    },
    componentWillMount: function componentWillMount() {
        this.bindAsArray(Topical, "topicalList");
    },
    handleChange1: function handleChange1(e) {
        this.setState({
            topical: e.target.value
        });
    },
    handleChange3: function handleChange3(e) {
        this.setState({
            topicalTheme: e.target.value
        });
    },
    handleSubmit1: function handleSubmit1(e) {
        e.preventDefault();
        if (this.state.topical !== "") {
            Topical.push({ topicalTheme: this.state.topicalTheme, userName: this.props.user.name, topical: this.state.topical, time: Wilddog.ServerValue.TIMESTAMP });
            // const topicalOne = Topical.child(this.state.topicalTheme);
            // topicalOne.set({topicalTheme:this.state.topicalTheme,name: this.props.user.name, topical: this.state.topical});
            this.setState({ topical: "", topicalTheme: "" });
            console.log("发起成功");
        }
    },
    render: function render() {
        var _this2 = this;

        var list = this.state.topicalList.map(function (t, i) {
            return React.createElement(
                "li",
                null,
                React.createElement(
                    "div",
                    { className: "head" },
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "span",
                            { className: "user" },
                            t.userName
                        ),
                        "发起话题:",
                        t.topicalTheme
                    ),
                    t.topical
                ),
                React.createElement(CommentModule, { topical: t, user: _this2.props.user })
            );
        });
        return React.createElement(
            "div",
            { className: "section5" },
            React.createElement(
                "form",
                { className: "addTopical", onSubmit: this.handleSubmit1 },
                React.createElement(
                    "h3",
                    null,
                    "近期有什么好玩的事情,快和小伙伴们一起讨论吧"
                ),
                React.createElement(
                    "label",
                    { htmlFor: "topicalTheme" },
                    "主题"
                ),
                React.createElement("textarea", { value: this.state.topicalTheme, onChange: this.handleChange3, className: "form-control",
                    rows: "1" }),
                React.createElement("textarea", { value: this.state.topical, onChange: this.handleChange1, className: "form-control",
                    rows: "3" }),
                React.createElement(
                    "button",
                    { type: "submit", className: "btn btn-default" },
                    "发起"
                )
            ),
            React.createElement(
                "ul",
                { className: "topicalList" },
                list
            )
        );
    }
});
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _ReactMotion = ReactMotion;
var Motion = _ReactMotion.Motion;
var spring = _ReactMotion.spring;

var range = _.range;

var springSetting1 = { stiffness: 180, damping: 10 };
var springSetting2 = { stiffness: 120, damping: 17 };
function reinsert(arr, from, to) {
    var _arr = arr.slice(0);
    var val = _arr[from];
    _arr.splice(from, 1);
    _arr.splice(to, 0, val);
    return _arr;
}

function clamp(n, min, max) {
    return Math.max(Math.min(n, max), min);
}

var count = 33;
var width = 140;
var height = 140;
// indexed by visual position

var layout = range(count).map(function (n) {
    var row = Math.floor(n / 5);
    var col = n % 5;
    return [width * col, height * row];
});

var Demo = React.createClass({
    displayName: 'Demo',
    getInitialState: function getInitialState() {
        return {
            mouse: [0, 0],
            delta: [0, 0], // difference between mouse and circle pos, for dragging
            lastPress: null, // key of the last pressed component
            isPressed: false,
            order: range(count), // index: visual position. value: component key/id
            introduceWho: 0,
            introduceIs: false,
            position: [0, 0]
        };
    },
    introduceShow: function introduceShow(key, x, y) {
        this.setState({ introduceWho: key, introduceIs: true, position: [x, y] });
    },
    introduceHide: function introduceHide() {
        this.setState({ introduceIs: false });
    },
    componentDidMount: function componentDidMount() {
        window.addEventListener('touchmove', this.handleTouchMove);
        window.addEventListener('touchend', this.handleMouseUp);
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('mouseup', this.handleMouseUp);
    },
    handleTouchStart: function handleTouchStart(key, pressLocation, e) {
        this.handleMouseDown(key, pressLocation, e.touches[0]);
    },
    handleTouchMove: function handleTouchMove(e) {
        e.preventDefault();
        this.handleMouseMove(e.touches[0]);
    },
    handleMouseMove: function handleMouseMove(_ref) {
        var pageX = _ref.pageX;
        var pageY = _ref.pageY;
        var _state = this.state;
        var order = _state.order;
        var lastPress = _state.lastPress;
        var isPressed = _state.isPressed;

        var _state$delta = _slicedToArray(_state.delta, 2);

        var dx = _state$delta[0];
        var dy = _state$delta[1];

        if (isPressed) {
            var mouse = [pageX - dx, pageY - dy];
            var col = clamp(Math.floor(mouse[0] / width), 0, 2);
            var row = clamp(Math.floor(mouse[1] / height), 0, Math.floor(count / 5));
            var index = row * 5 + col;
            var newOrder = reinsert(order, order.indexOf(lastPress), index);
            this.setState({ mouse: mouse, order: newOrder, introduceIs: false });
        }
    },
    handleMouseDown: function handleMouseDown(key, _ref2, _ref3) {
        var _ref4 = _slicedToArray(_ref2, 2);

        var pressX = _ref4[0];
        var pressY = _ref4[1];
        var pageX = _ref3.pageX;
        var pageY = _ref3.pageY;

        this.setState({
            lastPress: key,
            isPressed: true,
            delta: [pageX - pressX, pageY - pressY],
            mouse: [pressX, pressY],
            introduceIs: false
        });
    },
    handleMouseUp: function handleMouseUp() {
        this.setState({ isPressed: false, delta: [0, 0] });
    },
    render: function render() {
        var _this = this;

        var _state2 = this.state;
        var order = _state2.order;
        var lastPress = _state2.lastPress;
        var isPressed = _state2.isPressed;
        var mouse = _state2.mouse;

        return React.createElement(
            'div',
            { className: 'demo2' },
            order.map(function (_, key) {
                var style = void 0;
                var x = void 0;
                var y = void 0;
                var introduce = null;
                var visualPosition = order.indexOf(key);
                // if(key === this.state.introduceWho){
                //     introduce = <Introduce introduceWho={this.state.introduceWho} introduceIs={this.state.introduceIs}/>;
                // }
                if (key === lastPress && isPressed) {
                    var _mouse = _slicedToArray(mouse, 2);

                    x = _mouse[0];
                    y = _mouse[1];

                    style = {
                        translateX: x,
                        translateY: y,
                        scale: spring(1.2, springSetting1),
                        boxShadow: spring((x - (5 * width - 50) / 2) / 15 / 3, springSetting1)
                    };
                } else {
                    var _layout$visualPositio = _slicedToArray(layout[visualPosition], 2);

                    x = _layout$visualPositio[0];
                    y = _layout$visualPositio[1];

                    style = {
                        translateX: spring(x, springSetting2),
                        translateY: spring(y, springSetting2),
                        scale: spring(1, springSetting1),
                        boxShadow: spring((x - (5 * width - 50) / 2) / 15 / 3, springSetting1)
                    };
                }
                return React.createElement(
                    Motion,
                    { key: key, style: style },
                    function (_ref5) {
                        var translateX = _ref5.translateX;
                        var translateY = _ref5.translateY;
                        var scale = _ref5.scale;
                        var boxShadow = _ref5.boxShadow;
                        return React.createElement('div', {
                            onMouseOver: _this.introduceShow.bind(null, key, translateX, translateY),
                            onMouseOut: _this.introduceHide,
                            onMouseDown: _this.handleMouseDown.bind(null, key, [x, y]),
                            onTouchStart: _this.handleTouchStart.bind(null, key, [x, y]),
                            className: 'demo2-ball',
                            style: {
                                background: 'url(\'./public/img/head' + key + '.jpg\') center no-repeat',
                                backgroundSize: 'cover',
                                WebkitTransform: 'translate3d(' + translateX + 'px, ' + translateY + 'px, 0) scale(' + scale + ')',
                                transform: 'translate3d(' + translateX + 'px, ' + translateY + 'px, 0) scale(' + scale + ')',
                                zIndex: key === lastPress ? 99 : visualPosition,
                                boxShadow: boxShadow + 'px 5px 5px rgba(0,0,0,0.5)'
                            }
                        });
                    }
                );
            }),
            React.createElement(Introduce, { introduceWho: this.state.introduceWho, introduceIs: this.state.introduceIs, position: this.state.position })
        );
    }
});

var Introduce = React.createClass({
    displayName: 'Introduce',
    render: function render() {
        var user = Users[this.props.introduceWho];
        // console.log(this.props.introduceIs);
        //if(!this.props.introduceIs) return null;
        return React.createElement(
            'div',
            { className: 'introduce slideInLeft animated', style: { left: this.props.position[0] - 270, top: this.props.position[1] - 20, display: this.props.introduceIs ? "block" : "none" } },
            React.createElement(
                'div',
                { className: 'name' },
                user.name
            ),
            React.createElement(
                'div',
                { className: 'addr' },
                React.createElement('i', { className: 'fa fa-map-marker' }),
                user.addr
            ),
            React.createElement(
                'div',
                { className: 'addrNow' },
                React.createElement('i', { className: 'fa fa-location-arrow' }),
                user.addNow
            ),
            React.createElement(
                'div',
                { className: 'phone' },
                React.createElement('i', { className: 'fa fa-phone' }),
                user.phone
            ),
            React.createElement(
                'div',
                { className: 'qq' },
                React.createElement('i', { className: 'fa fa-qq' }),
                user.qq
            )
        );
    }
});

var Section4 = React.createClass({
    displayName: 'Section4',
    render: function render() {
        return React.createElement(
            'div',
            { className: 'section4' },
            React.createElement(Demo, null)
        );
    }
});
"use strict";

var Section3 = React.createClass({
    displayName: "Section3",
    render: function render() {
        var list = Prize.map(function (p, i) {
            return React.createElement(
                "li",
                null,
                React.createElement("img", { src: p.src }),
                React.createElement(
                    "div",
                    { className: "des" },
                    p.name
                )
            );
        });
        return React.createElement(
            "section",
            { className: "section3" },
            React.createElement(
                "div",
                { className: "logo" },
                React.createElement("img", { src: "./public/img/logo_prize.png", alt: "" })
            ),
            React.createElement(
                "ul",
                { className: "prize" },
                list
            )
        );
    }
});
"use strict";

var Section2 = React.createClass({
    displayName: "Section2",
    render: function render() {
        var storyList = Story.map(function (story, i) {
            var storyImg = story.img.map(function (imgSrc, i) {
                return React.createElement(
                    "li",
                    null,
                    React.createElement("img", { src: imgSrc })
                );
            });
            return React.createElement(
                "li",
                null,
                React.createElement(
                    "h3",
                    null,
                    story.title
                ),
                React.createElement(
                    "div",
                    { className: "time" },
                    React.createElement("i", { className: "fa fa-calendar" }),
                    story.time
                ),
                React.createElement(
                    "div",
                    { className: "con" },
                    story.content
                ),
                React.createElement(
                    "ul",
                    { className: "imgList" },
                    storyImg
                )
            );
        });
        return React.createElement(
            "div",
            { className: "section2" },
            React.createElement(
                "ul",
                null,
                storyList
            )
        );
    }
});
"use strict";

var Section1 = React.createClass({
    displayName: "Section1",
    render: function render() {
        return React.createElement(
            "section",
            { className: "section1" },
            React.createElement(
                "div",
                { className: "view-content" },
                React.createElement(
                    "h1",
                    null,
                    "物二小伙伴"
                ),
                React.createElement(
                    "div",
                    { className: "introduce" },
                    React.createElement(
                        "p",
                        null,
                        "2013年一场青春的邂逅，1460天的点点滴滴，18个帅气的男孩，11个美丽的女生，还有一位可亲可敬的家长， 交织出物二大家庭的美好时光。而不管未来有多遥远，人生的路上总有你有我，或是某一天的重逢再次撩动心弦， 就让微笑倾诉彼此的怀念。"
                    )
                )
            )
        );
    }
});
"use strict";

//Content组件
var Content = React.createClass({
    displayName: "Content",
    render: function render() {
        var con = null;
        switch (this.props.path) {
            case "/":
                con = React.createElement(Section1, null);
                break;
            case "/story":
                con = React.createElement(Section2, null);
                break;
            case "/prize":
                con = React.createElement(Section3, null);
                break;
            case "/partner":
                con = React.createElement(Section4, null);
                break;
            case "/say":
                con = React.createElement(Section5, { user: this.props.user });
                break;
        }
        return React.createElement(
            "div",
            { className: "content" },
            con
        );
    }
});
"use strict";

var Nav = React.createClass({
    displayName: "Nav",
    render: function render() {
        return React.createElement(
            "nav",
            { className: "mainMenu" },
            React.createElement(
                "ul",
                null,
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        Link,
                        { to: "/" },
                        "Home"
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        Link,
                        { to: "/story" },
                        "点点滴滴"
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        Link,
                        { to: "/prize" },
                        "荣誉墙"
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        Link,
                        { to: "/partner" },
                        "小伙伴"
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        Link,
                        { to: "say" },
                        "畅所欲言"
                    )
                )
            )
        );
    }
});
"use strict";

//Header组件
var Header = React.createClass({
    displayName: "Header",
    getInitialState: function getInitialState() {
        return { exitShow: false };
    },
    exitHandleShow: function exitHandleShow() {
        this.setState({ exitShow: !this.state.exitShow });
    },
    exit: function exit() {
        document.cookie = "";
        this.props.changeUser("");
    },
    render: function render() {
        return React.createElement(
            "header",
            { className: "header" },
            React.createElement(
                "div",
                { className: "menu" },
                React.createElement("i", { className: "fa fa-bars" })
            ),
            React.createElement(
                "div",
                { className: "logo" },
                React.createElement(
                    "span",
                    { className: "school" },
                    "HNUST"
                ),
                React.createElement(
                    "span",
                    { className: "wuer" },
                    "WuEr"
                )
            ),
            React.createElement(
                "div",
                { className: "user", onClick: this.exitHandleShow },
                React.createElement("i", { className: "fa fa-user" }),
                this.props.user.name,
                React.createElement(
                    "div",
                    { className: "exit", style: css_display(this.state.exitShow), onClick: this.exit },
                    "退出登录"
                )
            )
        );
    }
});
"use strict";

var Main = React.createClass({
    displayName: "Main",
    getInitialState: function getInitialState() {
        return { user: "" };
    },
    componentWillMount: function componentWillMount() {
        var _this = this;

        var userId = getCookie("userId");
        Users.map(function (user, i) {
            if (user.id === userId) {
                _this.setState({ user: user });
            }
        });
    },
    changeUser: function changeUser(user) {
        this.setState({ user: user });
    },
    render: function render() {
        if (this.state.user === "") {
            return React.createElement(Login, { changeUser: this.changeUser });
        } else {
            return React.createElement(
                "div",
                { className: "main" },
                React.createElement(Header, { user: this.state.user, changeUser: this.changeUser }),
                React.createElement(Nav, null),
                React.createElement(Content, { path: this.props.route.path, user: this.state.user })
            );
        }
    }
});
"use strict";

ReactDOM.render(React.createElement(
    Router,
    null,
    React.createElement(Route, { path: "/", component: Main }),
    React.createElement(Route, { path: "/home", component: Main }),
    React.createElement(Route, { path: "/story", component: Main }),
    React.createElement(Route, { path: "/prize", component: Main }),
    React.createElement(Route, { path: "/partner", component: Main }),
    React.createElement(Route, { path: "/say", component: Main })
), document.getElementById('main'));