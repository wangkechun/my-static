'use strict';
const Article1 = `Linux内核是操作系统的核心，也是操作系统最基本的部分。

Linux内核的体积结构是单内核的、但是他充分采用了微内核的设计思想、使得虽然是单内核、但工作在模块化的方式下、并且这个模块可以动态装载或卸载；Linux负责管理系统的进程、内存、设备驱动程序、文件和网络系统，决定着系统的性能和稳定性。如是我们在了解Linux内核的基础上根据自己的需要、量身定制一个更高效，更稳定的内核，就需要我们手动去编译和配置内核里的各项相关的参数和信息了。

### 一、编译内核的基本步骤 ###

#### 1.获取内核源码，解压到/user/src ####
  \`\`\`
# tar xvf linux-3.13.5.tar.xz
# ln -sv /usr/src/linux-3.13.5 /usr/src/linux
\`\`\`
#### 2.配置内核特性(选择一种方法就可以了) ####
  \`\`\`
//遍历选择所要编译的内核特性
# make config

//配置所有可编译的内核特性
# make allyesconfig

//并不是所有的都不编译
# make allnoconfig

//这种就是打开一个文件窗口选择菜单
# make menuconfig

//KDE桌面环境下，并且安装了qt开发环境
# make kconfig

//Gnome桌面环境，并且安装gtk开发环境
# make gconfig
\`\`\`
#### 3.编译内核 ####
  \`\`\`
# make [-j #]
//#号最多为CPU物理核心总数的两倍，这样会快点哦
\`\`\`
#### 4.安装内核模块 ####
  \`\`\`
# make modules_install
\`\`\`
#### 5.安装内核 ####
  \`\`\`
# make install
\`\`\`
#### 6.验证并测试 ####
  \`\`\`
# cat /boot/grub/grub.conf
\`\`\`
查看新内核是否已经添加，然后重启系统并测试

### 二、生成makefile文件 ###

以计算斐波那契序列的程序为例
#### 1.写main.c,fib.c.fib.h文件如下 ####

main.c
  \`\`\`
#include<stdio.h>
#include"fib.h"
int main(){
    int n=0;
    printf(“input n=\n”);
    scanf("%d",&n);
    printf("fib(%d)=%dn",n,fib(n));
    return 0;
}
\`\`\`
fib.h
  \`\`\`
int fib(int n);
\`\`\`
fib.c
  \`\`\`
#include"fib.h"
int  fib(int  n){
   If(n == 0)
      return 0;
   if(n == 1||n == 2){
       return 1;
   return fib(n-i) + fib(n-2);
}
\`\`\`
#### 2.需要安装automake和autoconf两个命令 ####
 \`\`\`
# sudo apt-get install autoconf
\`\`\`
#### 3.进入源文件目录 ####
  \`\`\`
# autoscan
\`\`\`
这时会在目录下生成两个文件 autoscan.log 和 configure.scan
将configure.Scan改名为configure.ac。
同时用gedit打开（下面的文件内容是已经修改过内容以后的，对比修改）
\`\`\`
-----------------------------configure.ac文件开始-----------------------------------------
#                                               -*- Autoconf -*-
# Process this file with autoconf to produce a configure script.

AC_PREREQ([2.64])
AC_INIT(first, 1.0, XXXX@XXX.com)
AC_INIT([FULL-PACKAGE-NAME], [VERSION], [BUG-REPORT-ADDRESS])
AC_CONFIG_SRCDIR([first.c])
AC_CONFIG_HEADERS([config.h])
AM_INIT_AUTOMAKE(first,1.0)
# Checks for programs.
AC_PROG_CC
# Checks for libraries.
# Checks for header files.
# Checks for typedefs, structures, and compiler characteristics.
# Checks for library functions.
AC_OUTPUT(Makefile)
-----------------------------configure.ac文件结束-----------------------------------------
\`\`\`
#### 3.新建文件Makefile.am，内容如下： ###
\`\`\`
AUTOMAKE_OPTIONS=foreign
bin_PROGRAMS=first
first_SOURCES=first.c
\`\`\`
#### 4.运行命令achlocal ####
  \`\`\`
# achlocal
\`\`\`
成功之后，会在目录下产生 aclocal.m4 和 autom4te.cache 两个文件。
#### 5.运行命令autoheader ####
  \`\`\`
# autoheader
\`\`\`
成功之后，会在目录下产生 config.h.in 这个新文件。
#### 6.运行命令autoconf ####
  \`\`\`
# autoconf
\`\`\`
成功之后，会在目录下产生 configure 这个新文件。
#### 7.运行命令automake --add-missing ####
  \`\`\`
# automake --add-missing
\`\`\`
输出结果为：
\`\`\`
configure.in:8: installing './install-sh'
configure.in:8: installing './missing'
Makefile.am: installing './depcomp'
  \`\`\`
成功之后，会在目录下产生 depcomp，install-sh 和 missing 这三个新文件和Makefile.in文件。

#### 8.运行命令./configure ####
\`\`\`
# ./configure
  \`\`\`
即可自动生成makefile

### 三、添加内核模块（首先写好模块(hello.c文件)） ###

#### 1.建立 ###
\`\`\`
# sudo make-C/lilb/modules/$(uname  -r)/build M=$(pwb)
  \`\`\`
#### 2.加入模块 ###
\`\`\`
# sudo insmod ./hello.ko
  \`\`\`
#### 3.移除模块 ###
\`\`\`
# sudo rmmod hello
  \`\`\`

附：打开一个命令行（ctrl+alt+t） 查看模块添加情况
\`\`\`
# tail/var/log/kern.log
  \`\`\`
  `;

const Article2 = `

#### 引言：

&emsp;&emsp;21世纪，科技的飞速发展大家有目共睹，IT也随之应运而生，成为了脍炙人口的新词。所谓的程序猿，也就是这个被归为人类祖先的职业也成为了这个时代的新宠。

&emsp;&emsp;前端，在七八十年代技术人的口中就是所谓的用标签拼起来的一个界面，没有任何技术含量的东西，如今也风靡全球。在这个不仅仅满足用户功能的时代，美，成为了人们对一个作品的新追求，也成为了吸引用户的新的竞争优势。

&emsp;&emsp;半年前，在学长的悉心带领下，我也踏上了这条“不归路”。

#### 项目背景

&emsp;&emsp;logbook是项目管理过程中不可或缺的交流工具，boos通过它了解员工的项目进度和完成情况，员工通过它更好的规划自己的工作计划等等。该项目就是仿照七牛公司的logbook实现基本界面和功能。

#### 编写目的

&emsp;&emsp;对自己在学习前端这条路上的检验，第一次独立完成的实际项目。

#### 实现

###### JQuery实现

&emsp;&emsp;jQuery是一个高效、精简并且功能丰富的 JavaScript 工具库。它提供的 API易于使用且兼容众多浏览器，这让诸如 HTML 文档遍历和操作、事件处理、动画和 Ajax 操作更加简单。

<b>开发工具</b>

&emsp;&emsp;atom编辑器

<b>浏览器</b>

&emsp;&emsp;chrome浏览器

<b>开发前准备</b>

 1. API访问：安装fehelper插件。
 2. 分析页面结构，建立基本框架。

    页面分为两个部分，顶部导航栏和内容栏。内容栏分左右两块，左边由日历栏和项目分组成员列表组成，右边由日期所对应的项目及当天日志列表组成。
 3. 建立项目文件，下载JQuery引入项目。

<b>开发过程</b>

1.根据页面结构分析，搭建主要的HTML标签。
2.实现顶部导航栏的细节

 - logo居中显示
 - 添加日志的弹出层实现
 - 个人信息显示的模块实现
    获取API的方式：

\`\`\`
$.get("地址",回调函数function(获取的信息){
    对信息进行操作;
});
\`\`\`

3.右边区域列表的实现

- 通过上面方法获取部门信息，通过li标签相加拼接成一个html。
- 获取用户信息，将用户分类，同一类别的用户拼接到对应的部门标签之下。
- 将html整体添加到右边区域。

&emsp;&emsp;拼接用户信息:

\`\`\`
$.each(users.data,function(i,us){
    us_ht[us.department] += "<li><div class='name'>姓名："+us.real_name+"</div><div class='mood'>心情：</div><div class='note'>日志:</div></li>";
}
\`\`\`

&emsp;&emsp;拼接部门信息:

\`\`\`
$.each(departments.data,function(i,dep){
    html += '<li>'+dep+'<div class="num">共'+depart[dep]+'人</div></li><ul class="gs">'+us_ht[dep]+'</ul>';
}
\`\`\`

&emsp;&emsp;将html整体添加到右边区域

\`\`\`
$(".departments").html(html);
\`\`\`

4.左边区域的日历和列表的实现

 - 通过bootstrap插件实现日历功能。
 - 根据上面获取的部门信息和个人信息拼接实现左边列表。

&emsp;&emsp;日历插件的实现

\`\`\`
$('.date div').datepicker({
    format:'yyyy-mm-dd',
    todayHighlight:true
});
\`\`\`

&emsp;&emsp;个人信息的拼接

\`\`\`
name_ht[us.department] += "<li>"+us.real_name+"</li>";
\`\`\`

&emsp;&emsp;部门信息的拼接

\`\`\`
html2 += '<li>'+dep+'('+depart[dep]+'/'+depart[dep]+'人)</div></li><ul class="gd">'+name_ht[dep]+'</ul>';
\`\`\`

&emsp;&emsp;将html整体添加到左边列表区域

\`\`\`
$(".c_de").html(html2);
\`\`\`

5.点击事件的实现

 - 个人信息的点击事件

\`\`\`
var flag = 1;
$("#inf").on('click',function(){
    if(flag){
        $("#user").show();
        flag = 0;
    }else{
        $("#user").hide();
        flag = 1;
    }
});
\`\`\`

 - 添加日志的点击事件

\`\`\`
//点击我的日志
$("#note").on('click',function(){
    $("#mask").show();
    $("#popup").show();
});

//点击关闭按钮
$(".icon").on('click',function(){
    $("#mask").hide();
    $("#popup").hide();
});

//点击确定按钮
$(".certern").on("click",function(){
    $("#mask").hide();
    $("#popup").hide();
});

//点击除弹出框意外的区域
$("#mask").on("click",function(){
    $("#mask").hide();
    $("#popup").hide();
});
\`\`\`

 - 点击部门显示成员及日志事件

\`\`\`
var show = -1;
var flag = 1;
var de = $(".departments >li");
var us = $(".gs");
$.each(de,function(i,d){
    de.eq(i).on("click", function(){
        if(show != -1){
            us.eq(show).css("display","none");
        }
        if(show == i){
            if(flag){
                us.eq(show).css("display","none");
                flag = 0;
            }
            else{
                us.eq(show).css("display","block");
                flag = 1;
            }
        }else{
            show = i;
            us.eq(i).css("display","block");
            flag = 1;
        }
    });
});
\`\`\`

<i class="icon-cloud"></i> 其他细节的实现见[源码](https://github.com/caohuilin/Logbook_JQuery)

#### 个人感想与收获

   学以致用一直是大家对学习追求的最高境界，很开心自己讲这半年多学到的东西用起来，实现了一个简单的实例。希望我能在这条追求美的路上能走的更远、更踏实。


`;

console.log("start")
const ARTICLE = [
    {
        id:1,
        title: "Linux内核编译",
        tag:"其他",
        date:"2015-04-21",
        description:"操作系统课程作业整理 Linux内核编译",
        content:Article1
    },
    {
        id:2,
        title: "Logbook开发总结（1）",
        tag:"Project",
        date:"2016-02-21",
        description:"JQuery实现的一个简单的日报系统",
        content:Article2
    }
];
const Route = ReactRouter.Route;
const Router = ReactRouter.Router;
const Redirect = ReactRouter.Redirect;
const Link = ReactRouter.Link;


//display属性的改变
function css_display(value) {
    if (value) {
        return {display: 'block'};
    } else {
        return {display: 'none'};
    }
}
function changeHeight(value){
     if(value){
         return{height:"60px"}
     }else{
         return{height:"256px"}
     }
}
function changeMarginTop(value){
    if(value){
        return{marginTop :'60px'}
    }else{
        return{marginTop :'256px'}
    }
}



const Content = React.createClass({displayName: "Content",
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    render(){
        return (
          React.createElement("div", {className: "main"}, 
              React.createElement("div", {className: "content", style: changeMarginTop(this.props.wheel)}, 
                  React.createElement(LeftArea, null), 
                  React.createElement(RightArea, {tag: this.props.params.tag, article: this.props.params.article})
              )
          )
        );
    }
});
const Header = React.createClass({displayName: "Header",
    render(){
        return (
          React.createElement("header", {className: "header", style: changeHeight(this.props.wheel)}, 
              React.createElement("div", {className: "logoSmall", style: css_display(this.props.wheel)}, React.createElement(Link, {to: "/tag/ALL"}, "CaoHuilin")), 
              React.createElement("div", {className: "logo", style: css_display(!this.props.wheel)}, React.createElement(Link, {to: "/tag/ALL"}, "=CHL")), 
              React.createElement("span", {style: css_display(!this.props.wheel)}, "Pursue beauty , Approach beauty , Achieve beauty"), 
              React.createElement("div", {className: "blank"}), 
              React.createElement("nav", null, 
                  React.createElement("ul", null, 
                      React.createElement("li", null, 
                          React.createElement("a", {href: "https://hi-hi.cn/chlblog/", target: "_blank"}, "Home")
                      ), 
                      React.createElement("li", null, 
                          React.createElement("a", {href: "https://hi-hi.cn/chlresume/", target: "_blank"}, "Resume")
                      ), 
                      React.createElement("li", null, 
                          React.createElement("a", {href: "https://github.com/caohuilin", target: "_blank"}, "Project")
                      )
                  )
              )
          )
        )
    }
});
const LeftArea = React.createClass({displayName: "LeftArea",
    render(){
        return (
          React.createElement("div", {className: "leftArea"}, 
              React.createElement("div", {className: "classify"}, 
                  React.createElement("div", {className: "head"}, React.createElement("h2", null, "文章分类")), 
                  React.createElement("nav", null, 
                      React.createElement("ul", null, 
                          React.createElement("li", null, React.createElement(Link, {to: "/tag/ALL"}, "ALL", React.createElement("i", {className: "fa fa-angle-double-right "}))), 
                          React.createElement("li", null, React.createElement(Link, {to: "/tag/HTML&CSS"}, "HTML&CSS", React.createElement("i", {className: "fa fa-angle-double-right "}))), 
                          React.createElement("li", null, React.createElement(Link, {to: "/tag/JavaScript"}, "JavaScript", React.createElement("i", {className: "fa fa-angle-double-right "}))), 
                          React.createElement("li", null, React.createElement(Link, {to: "/tag/Project"}, "Project", React.createElement("i", {className: "fa fa-angle-double-right "}))), 
                          React.createElement("li", null, React.createElement(Link, {to: "/tag/React"}, "React", React.createElement("i", {className: "fa fa-angle-double-right "}))), 
                          React.createElement("li", null, React.createElement(Link, {to: "/tag/其他"}, "其他", React.createElement("i", {className: "fa fa-angle-double-right "}))), 
                          React.createElement("li", null, React.createElement(Link, {to: "/tag/随笔"}, "随笔", React.createElement("i", {className: "fa fa-angle-double-right "})))
                      )
                  )
              )
          )
        )
    }
});

const RightArea = React.createClass({displayName: "RightArea",
    render(){
        const articleList = ARTICLE;
        const tag = this.props.tag;
        let TagHTML= articleList.filter(v=>{
            if(tag==='ALL') return true;
            return v.tag==tag
        }).map((article)=> {
            return (React.createElement("li", {key: article.id}, 
                React.createElement("div", {className: "inside"}, 
                    React.createElement("h2", {className: "title"}, React.createElement(Link, {to: "/article/" + article.id}, article.title)), 
                    React.createElement("i", {className: "fa fa-tag "}), React.createElement("span", {className: "tag"}, article.tag), 
                    React.createElement("i", {className: "fa fa-calendar "}), React.createElement("span", {className: "date"}, article.date), 
                    React.createElement("div", {className: "description"}, article.description), 
                    React.createElement("div", {className: "more"}, React.createElement(Link, {to: "/article/" + article.id}, React.createElement("span", null, "Read More"))
                    )
                )
            ));
        });


        if (this.props.tag) {
            //console.log('render RightArea', TagHTML, TagHTML.length);
            return (
              React.createElement("div", {className: "rightArea"}, 
                  React.createElement("div", {className: "nav"}, 
                      React.createElement("ul", null, 
                          TagHTML
                      )
                  )
              )
            )
        } else if(this.props.article) {
            let article = ARTICLE[this.props.article-1];
            //console.log(this.props.article);
            let articleHTML = (
              React.createElement("div", {className: "inside"}, 
                  React.createElement("h2", {className: "title"}, article.title), 
                  React.createElement("i", {className: "fa fa-tag "}), React.createElement("span", {className: "tag"}, article.tag), 
                  React.createElement("i", {className: "fa fa-calendar "}), React.createElement("span", {className: "date"}, article.date), 
                  React.createElement("div", {className: "description", dangerouslySetInnerHTML: {__html:marked(article.content)}})
              )
            );
            return (
              React.createElement("div", {className: "rightArea"}, 
                  React.createElement("div", {className: "article"}, 
                      articleHTML
                  )
              )

            );
        }else{
            return null;
        }
    }
});
const Footer = React.createClass({displayName: "Footer",
    render(){
        return (
          React.createElement("footer", {id: "footer"}, 
              React.createElement("div", {className: "con"}, 
                  React.createElement("ul", {className: "nav"}, 
                      React.createElement("li", null, 
                          React.createElement("a", {href: "https://hi-hi.cn/chlblog/", target: "_blank"}, "Home")
                      ), 
                      React.createElement("li", null, 
                          React.createElement("a", {href: "https://hi-hi.cn/chlresume/", target: "_blank"}, "Resume")
                      ), 
                      React.createElement("li", null, 
                          React.createElement("a", {href: "https://github.com/caohuilin", target: "_blank"}, "Project")
                      )
                  ), 
                  React.createElement("ul", {className: "contact"}, 
                      React.createElement("li", null, React.createElement("i", {className: "fa fa-qq"}), "1057275848"), 
                      React.createElement("li", null, React.createElement("i", {className: "fa fa-phone"}), "151 7326 6529"), 
                      React.createElement("li", null, React.createElement("i", {className: "fa fa-github"}), React.createElement("a", {href: "https://github.com/caohuilin", target: "_blank"}, "github.com/caohuilin")
                      )
                  )
              )
          )
        );
    }
});
const Main = React.createClass({displayName: "Main",
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    componentWillMount(){
        //给路径赋默认值
        var params = this.props.params;
        if (!params.tag && !params.article) {
            this.context.router.push("/tag/" + "ALL");
        }
        document.addEventListener('scroll',(e)=>{
            this.onScrollDown(e);
        })
    },
    getInitialState(){
        return {wheel: false}
    },
    componentDidMount(){
        let scrollTop = document.body.scrollTop;
        if (scrollTop > 0) {
            this.setState({wheel: true});
        }
    },
    onWheelDown(event){
        let deltaY = event.nativeEvent.deltaY;
        let scrollTop = document.body.scrollTop;
        if (deltaY > 40 && scrollTop == 0) {
            this.setState({wheel: true});
        } else if (deltaY < -40 && scrollTop == 0) {
            this.setState({wheel: false});
        }
    },
    onScrollDown(){
        let scrollTop = document.scrollingElement.scrollTop;
        if(scrollTop == 0){
            this.setState({wheel: false});
        }else{
            this.setState({wheel: true});
        }
    },
    render(){
        return (
          React.createElement("div", {onWheel: this.onWheelDown, onScroll: ()=>console.log('scroll')}, 
               React.createElement(Header, {wheel: this.state.wheel}), 
              React.createElement(Content, {wheel: this.state.wheel, params: this.props.params}), 
              React.createElement(Footer, null)
          )

        );
    }
});


ReactDOM.render((
  React.createElement(Router, null, 
      React.createElement(Route, {path: "/", component: Main}, 
          React.createElement(Route, {name: "tag", path: "/tag/:tag", component: Main}), 
          React.createElement(Route, {name: "article", path: "/article/:article", component: Main})
      ), 
      React.createElement(Route, {path: "*", component: Main})
  )
), document.getElementById('main'));