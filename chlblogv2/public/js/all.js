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
#### 4.运行命令aclocal ####
  \`\`\`
# aclocal
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
const Article3 = `
     每一只被关在“笼子”里的小鸟都渴望飞翔，总想寻找属于自己的那片蓝天。

     其实，期盼的这一刻终究会来到，它在你努力的时候慢慢靠近你，在你累了的时候悄悄鼓励你，直到有一天你翻过那座让你精疲力尽的高山，它就站在你的面前嘲笑着你狼狈的身影。


不知道看到这篇文章的你是不是正踏上寻找蓝天的那条路，还是已经在这条路上尝尽酸甜苦辣做着最后的冲刺。我只想告诉你，不管前方还有多少荆棘，勇敢的跨过去，回头的路依然艰辛，前方转眼就是黎明。

我也看过很多面经，面面俱到的诉说自己的面试经历，分享拿到offer成功的喜悦，总结过程中的遗憾和不足。我也想了很久，我做不到。不喜欢再去回忆面试的每一个细节，似乎忘记了，但是又若隐若现。它已经渗透到了血液，引领着我走向新的更高的山峰。

接触前端大概有一年的时间了，记得去年这个时候看着学长在匆忙找工作，拿到一个又一个offer的时候，心里其实是淡定（zhuoji）的。那个时候的我还是整天只知道抱着教科书，听着老师讲着每一章每一页的乖乖女，或许是因为从小的教育习惯问题，也或许是女生天生的潜质，并没有那么大的胆量去追求自己想要的东西。但是那段时间我变了，我体会到了在没有老师的网络课堂中知识的庞大，我拥有了用几行简单的代码实现了自己一直觉得高大上的东西。也就从那时候起，我开始了这条探索之路。

这条路走的并不容易，很多人对它的评价是门槛很低，我不反对，刚刚接触的时候我也是这种感觉，和C语言比起来简直就是手到擒来。
但是，我想说，这是一个需要用心去感受的职业，它需要的不仅仅是技术，更是心境。每一个界面并不是一堆的div拼凑的，也并不是每一个CSS属性的尝试，
它的每一个元素都是设计者的精心设计，每一行代码不能说绞尽脑汁，至少消耗了一两个脑细胞。




说到这里，很多人可能理解不了，那说明你还没用真正的用心去体会过这样一个过程。
从现在开始，闭上眼睛，回想自己写过的每一个界面，对它们做出自己的评价，你会发现那些标签和属性就像一个个美丽泡泡环绕在你的周围，透过阳光，显得格外清新动人。
这种感觉或许只有在享受美食的时候才会有吧。

当然，仅仅有这些是不够的，发展迅速的它总是希望我们和它一样大跨步前进，和那些满腹经纶的大牛们争抢饭碗，这不乏是一种充满新奇的体验，
如果你是一个不甘居大牛身下，想要挑战自我的黑马的话，不妨来小试牛刀。

最后，说说找工作吧。
机会总是留给有准备的人的，这句话一点都不假。
寒假一个月的准备，让我这个刚刚踏进这个行业的女孩胸有成竹。
框架的学习，简历的充实，项目的准备，这个假期赋予了它特殊的意义。
那天的视频面试聊得特别的开心，聊到了如何走上这条路，学习的途径，提高效率的方式，想从实习工作中获得什么等等，让刚刚从午睡中朦胧的我瞬间像打了鸡血一般。

说实话，这和我想象中的面试真的差好多，与前几天接到阿里的面试三十七分钟问了整整57个题目相比，让我简直不敢相信这一幕的出现，不过这种和谐的氛围让我瞬间爱上了它。
当天下午就接到了hr的电话，收到了offer的邮件，感觉自己那天幸福感爆棚。

这座大山我翻过了，我知道前方还有连绵起伏的高山，但是我不惧怕，我会在自己的坚持和努力中看到一轮又一轮的朝阳。
希望和我一样走在这条路上的朋友，一起坚持这份属于自己的梦想！




`;

const Article4 = `
这两天遇到了很多居中方面的问题，趁此机会在这里做个总结。

### 容器的居中
#### 一个容器的水平居中
\`\`\`
#contain{
    margin: 0 auto;
}
\`\`\`
这个方法需要注意的几点：

 1. 容器一定要有固定的宽度，不然div的宽度默认的宽度是100%，不会有效果的。
 2. 第一个参数 要根据实际情况去写，它实际的含义就是上下的margin值。

#### 一个容器的水平垂直居中
##### 绝对定位
\`\`\`
#contain{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
}
\`\`\`
这个方法肯定是用于在一个已知大小的父容器中,父容器记得要设置position:relative。
##### 弹性布局
\`\`\`
#father{
    display:flex;
    justify-content:center;//子元素水平居中
    align-items:center;//子元素垂直居中
}
\`\`\`
弹性布局的学习推荐大家通过 http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html 学习
可以实现所有子元素水平垂直等布局。

### 文本元素的居中
#### 文本元素的水平居中
\`\`\`
#text{
    text-align:center;
}
\`\`\`
这个应该大家都会，不需要解释了。
#### 文本元素的垂直居中
\`\`\`
#text{
    Sheight：30px;
    line-height:30px;
}
\`\`\`
当line-height的属性值和height的属性值相等时，文字就自动垂直居中了。

`
const Article5 = `
接触到React也有一段时间了，对于没有接触过其他类似js框架而直接接触React的伙伴们可能会觉得一下子入不了门，在这里我来谈谈我的看法，或许能帮上你什么忙。

### 组件化的开发思想
首先声明一点，React是js库，核心是把HTML添加到js文件中去动态实现。和我们传统的页面搭建方式有一定的区别。
在动手实现页面的之前，首先要考虑页面的组成，拆分用户界面为一个组件树，尽可能的使每一个组件只完成一小部分功能。

### 组件的生命周期
React对于组件提供了生命周期钩子函数去响应不同的时刻，为我们对组件的操作提供了方便。
具体的生命周期函数在这里我就不一一介绍了，对于这些函数的使用，在实际过程中要和数据流的传递相结合。讲完数据流再具体说明。

### 单向数据流
React中，数据的流向是单向的，只能从父组件传递到子组件。当顶层组件的state发生变化时，React会向下遍历整个组件数，重新渲染所有使用这个属性的组件。

很多人理解不了这个信息传递的过程，习惯于在改变一个DOM属性的回调函数中重新获取其他的DOM做相应的改变。其实，这是一种进步，在原先那种方法下，思路需要很周全，如果有一点没有考虑到可能会有意想不到的结果。对于React的开发你只需要考虑当前操作对于父组件属性的改变，剩下的事情它会自动帮你完成。

对于state和props的理解，可以简单的理解为 在当前组件或者当前组件之下的组件的共用属性就定义为当前组件的state，子组件通过props去访问该属性。改变该属性的值只能通过所在组件的setState方法去改变，在子组件中只是读不能写。当然如果要在子组件中改变的话，需要将改变该属性的方法传递到子组件中，子组件通过this.props.方法名执行对应的操作。

对于生命周期，如果页面中没有数据的传递，简单的通过render实现静态页面即可，当然这样没有使用React的必要。对于state的操作一般放在除render之外的其他周期函数中，每一次state的改变都会使该组件及子组件重新加载，完成我们所需要的效果。

### Prop 验证
可能刚开始写简单应用的时候，你觉得这一步是没有必要的，但是随着应用的庞大，保证组件被正确使用已经是必不可少的事情。它能让我们更规范的去编写代码，减少问题的出现，维护起来也更加方便。
所以在写代码的时候养成加上验证的好习惯，对于以后更大应用的开发会更加有利。
至于添加验证的方式还是看官网的比较好<a>http://reactjs.cn/react/docs/reusable-components.html</a>

### 小感想
为什么选择React呢，其实更多的是给人一种舒适感，极大的提高了开发效率。最喜欢的效果就是在不刷新页面的前提下可以更新部分页面。想想要是一个庞大的项目每一次操作都要重新加载页面那是一个多大的工程啊。

很多人在选择工具的时候回考虑很多问题，对比各种框架。其实有时候能更好的完成目标应用的就是最好的！
`
const Article6 = `

JavaScript中的五种基本数据类型：Number、String、Boolean、Null、Undefined

### Number

#### 1. 浮点数的问题

JavaScript中的浮点数并不像我们熟知的C，C++等语言，表现的那么明确，它中所有的数字都用Number来表示。它遵循二进制浮点数的算术标准（一个数字对应一个 64 位双精度二进制 IEEE754 值），但是确违背了基本的数学尝试。在代码中你会见到这样的现象
\`\`\`
0.1 + 0.2 === 0.3 //false
\`\`\`

幸运的是，使用64位浮点数表示32位整数是精确的，所以我们可以近似理解为它的整数运算是精确的。
\`\`\`
1 + 2 === 3 //true
\`\`\`
在使用过程中，特别是需要精确计算中一定要注意这个问题。

#### 2. Number类型中存在几个特殊的值，一定要学会正确使用

##### NaN

NaN是一个特殊的数量值，它不表示一个数字，但是
\`\`\`
typeof NaN  //"number"
\`\`\`
所以当使用typeof去判断一个变量是不是数字的时候可能会返回和你预期不一致的答案。

NaN可能会在试图将非数字形式的字符串转换为数字的时候产生。

如果NaN参与数学运算，任何运算数和它进行运算结果都是NaN。

NaN不等同于它自己，也就是说
\`\`\`
NaN == NaN   //false
NaN === NaN  //false

NaN != NaN   //true
NaN !== NaN  //true
\`\`\`

JavaScript提供了专门的函数用来检测NaN的值
\`\`\`
isNaN(NaN) //true
\`\`\`
##### Infinity
无穷大，当所表达的数值超出浮点数所能够表示的范围时，就用Infinity表示。负无穷大-Infinity。

#### 3. Number类型的判断

   a.  typeof 可以检测基本的数字，但是它认为NaN和正负Infinity也为数字。
   b.  isFinite函数，它会筛除掉Nan和Infinity。但是，它会试图把运算数转换为一个数字，如果值不是一个数字，就不是一个有效的检测方式。
   c.  自定义一个isNumber函数来解决这个问题
\`\`\`
var isNumber = function isNumber(value){
    return typeof(value) === 'number' && isFinite(value);
}
\`\`\`
\`\`\`
//单元测试
console.assert(isNumber(NaN) === false);
console.assert(isNumber(Infinity) === false);
console.assert(isNumber('abc') === false);
console.assert(isNumber(undefined) === false);
\`\`\`

#### 4. parseInt的正确使用

parseInt 将字符串转换为数字(整数)的函数，它首先会检测第一个位置，如果该位置不是有效数字，直接返回NaN,否则接着向后查看，知道遇到非数字字符为止。
\`\`\`
parseInt("123abc") //123
parseInt("1.73")   //1
parseInt(".2")     //NaN
\`\`\`
如果字符串第一个字符为0，该字符串将基于八进制求值，0X将基于十六进制求值。
下面这个错误就会在不注意的时候产生:
\`\`\`
parseInt("08") //0
parseInt("09") //0
\`\`\`
所以在使用时，特别是解析日期和时间时要特殊注意。
当然，parseInt可以接受一个基数作为参数，这样就解决了这个问题
\`\`\`
parseInt("08",10)  //8
\`\`\`

除了paraseInt ,别忘了还有parseFloat函数，如果你所需要的数字不是一个整数，用这个的精确度更高哦。

#### 5. 特殊的数值常量

- Number.POSITIVE_INFINITY  //无穷大
- Number.NEGATIVE_INFINITY  //负无穷大
- Number.MAX_VALUE          //最大值
- Number.MIN_VALUE          //最小值


### String

#### 1. 字符表示
在过去的JavaScript中，没有char这样的字符数据类型，表示单个字符也只能使用长度为1的字符串来表示。
不过，现代浏览器存在Uint8Array等这些类型，可以当做char类型来使用。

#### 2. 字符串基本操作
字符串是非值操作，在操作字符串时，对于赋值和传递操作，只是对其引用进行操作，对其本身并没有影响，你会发现即使对于很长的字符串，这样的操作都会非常快；而修改操作则是对其副本进行修改，并存储到新的位置，把修改的字符串重新赋值给原来的变量是建立新的引用，原来的字符串在没有其他变量引用时会被回收。

#### 3. 字符串的连接操作
   安装上面2的说法，+、+=进行字符串连接运算在字符串很长的时候会非常慢。好消息是新版本的浏览器在这个方面做了很好的优化，使其复杂度保持在log(n)左右。
   但是对于IE浏览器，特别是IE7及更早的浏览器，这种连接会很糟糕。这个时候使用join方法会有所改善。
   而contact方法除了在Opear浏览器，别的浏览器上都相对慢一些甚至很多，不推荐使用。

### Boolean

#### 1. 类型转换

 - boolean => 其他
   在数值环境中 true => 1    false=> 0
   在字符串环境中 true => "true"  false => "false"

 - 其他 => boolean
   0或NaN  => false   其他数值 => true
   "" => false        非空字符串 => true
   空值(null)或者未定义的值(undefined) => false  非空对象(!null)、数组(包括空数组)、函数（包括空函数） => true  换言之：除null以外的对象类型转换都为true

### Null和Undefined

#### 1. Null类型只有一个值null，Undefined类型也只有一个值undefined。
  null表示为空或者不存在的对象引用。当定义了一个变量但没有给它赋值，它的值就是undefined。

#### 2 .typeof的坑
\`\`\`
typeof null //'object'
typeof undefined //'undefined'
\`\`\`

#### 3. null 和 undefined 比较
\`\`\`
null == undefined //true
null === undefined //false
\`\`\`

#### 4. null的类型判断
\`\`\`
function type(o){
    return (o === null) ? "null" : (typeof o);
}
\`\`\`

基本类型就这么多了，接下来说说复杂的类型吧

### 函数

#### 1. 类型判断
\`\`\`
var fun = function(){}
typeod fun // "function"
fun.constructor //function
\`\`\`

#### 2. 不要使用Function构造函数
使用Function构造函数创建的函数有顶级作用域，可能会对代码的理解增加难度。
Function构造函数是使用表达式来创建的，很容易出现语法错误。

当然它也有一定的灵活性，但是考虑到正确性和易维护性，建议不要使用。

#### 3. call和apply
call和apply方法的作用：临时把一个函数转换为方法传递给某个对象。
区别是：call可以同时传递多个值，apply则以数组的方式接受参数。

#### 4. 闭包
闭包是JavaScript的一个难点，简单的理解为函数内部定义另一个函数变量，内部函数可以访问外部函数的属性值。
在函数调用完毕之后，闭包结构依然保存在系统中，不会被销毁。

闭包的核心是可以访问当其他函数变量的函数，实现方式一般为函数内部创建另外一个函数。

#### 5. 执行上下文和this
JavaScript代码都是在某个执行上下文中运行的，在当前执行上下文中调用一个函数就会进入新的执行上下文，这个函数执行结束后就会返回上一层执行上下文。
this是代码运行时基于函数的运行环境，也就是执行上下文绑定的。在全局函数中，this就是window。
特别注意，如果一个函数不是作为某一个对象的属性去调用时，this的值是全局对象。

### 数组

#### 1. 如何检测一个变量时数组类型
\`\`\`
var a = [1,2,3];
typeof a  //"object"
\`\`\`
所以用typeof是不能检测一个数组的
\`\`\`
var isArray = function(value){
    return value && typeof value === "object" && value.constructor === Array;
}
\`\`\`
这个函数可以简单的检测一个变量是否为数组。
但是如果要判断真正的数组，这个函数可能会有点麻烦。
\`\`\`
var a = [1,'a',2,'b'];
isArray(a) //true
\`\`\`
这时候需要进一步的判断
\`\`\`
var isArray = function(value){
    return value &&
    typeof value === "object" &&
    value.constructor === Array &&
    typeof value.length === 'number' &&
    typeof value.splice === 'function'
    && !(value.propetyIsEnumerable('length'));
}
\`\`\`
是不是有点复杂，这才是真正的数组判断，要同时满足这么多...条件。

当然有一个简单的办法咯
\`\`\`
var isArray = function(value){
    return Object.prototype.toString.apply(value) === '[object Array]';
}
\`\`\`
#### 2. 使用splice删除数组
删除数据的方式：
    a.直接改变数据的length属性，有点暴力，只能删除尾部元素。
    b.delete，被删除元素原来的位置变为了undefined，需要通过移动元素。
    c.splice，两个参数，第一个参数是删除开始的下标数，第二个是要删除的个数，删除之后后面的元素会自动向前覆盖掉已经删除的元素。

综合考虑三种方式，使用splice效率更高。

### 对象

#### 1. 原型与原型链

每一个函数都有一个原型（prototype）属性，这个属性是一个指针，指向一个对象，这个对象中包含由该函数生成的所有实例共享的属性和方法。这样可以避免在每次创建对象时都重新定义一遍内部的属性和方法。

原型链是JavaScript实现继承的主要方法，思路是利用原型让一个引用类型继承另一个引用类型的属性和方法。在访问一个类的实例的属性时，如果该类不存在该属性，它会沿着原型链一直向上寻找，直到找到这个属性或者找到Object类。

#### 2. 使用new创建的数据类型
\`\`\`
var n = new Number();
var s = new String();
var f = new Function();
var a = new Array();
var o = new Object();

console.assert(typeof n === 'object');
console.assert(toString.call(n)  === "[object Number]");
console.assert(typeof s === 'object');
console.assert(toString.call(s)  === "[object String]");
console.assert(typeof f === 'function');
console.assert(toString.call(f)  === "[object Function]");
console.assert(typeof a === 'object');
console.assert(toString.call(a)  === "[object Array]");
console.assert(typeof o === 'object');
console.assert(toString.call(o)  === "[object Object]");
\`\`\`



`;

const Article7 = `

前几天做了阿里实习生的前端笔试题，和大家分享 一下。

#### 1.单项选择题
下列哪个函数可以合并相邻文字结点？</br>
A.normalize();</br>
B.merge();</br>
C.mix();</br>
D.combine();</br>
E.append();</br>
F.replace();</br>

##### 解析：

 - normalize()，这个方法唯一的作用就是处理文档树中的文本结点。当在某个节点上调用这个方法时，它就会
   在该结点的后代结点中查找，如果遇到空文本结点，直接删除；如果找到相邻的文本结点，将它们合并为一个文    本结点。
 - merge()，这个方法JavaScript里没有，在原生JavaScript中合并两个数组使用concat()方法。Jquery中可以
   通过这个方法合并和两个数组。
这个题选A

#### 2.单项选择题
下面这个div容器在文档流中实际占据的高度是多少？
\`\`\`
<style type='text/css'>
.box1{
    width:180px;
    height:180px;
    padding:5px 10px;
    border:5px 15px;
    box-sizing:border-box;
}
</style>
<div class="box1"></div>
\`\`\`
A 宽180px 高180px </br>
B 宽230px 高200px </br>
C 宽200px 高190px </br>
D 宽190px 高210px </br>
E 宽190px 高230px </br>

##### 解析
首先说明一个问题 这里的border属性写错了，大概是出题的程序猿哥哥太着急了吧。</br>
这个题目的考点是box-sizing属性。</br>
对于盒子模型来说，W3C标准盒子模型内边距和边框都会影响容器的大小。而设置元素box-sizing: border-box时，此元素的内边距和边框不再会增加它的宽度。</br>
所以实际占据的高度仍为180px，180px，选A

#### 3.单项选择题
可以获取当前元素([HTML Element el])临近兄弟非文本元素的方法是：</br>
A el.siblings</br>
B el.getElementsByTagName("div")</br>
C el.nextSibling</br>
D el.nextElement</br>
E el.parentNode.children</br>
##### 解析
- siblings() 是jquery方法，找到引用该方法元素的***所有***匹配对应选择器的兄弟元素。</br>
- getElementsByTagName(),该方法返回带有指定标签名的对象的集合。</br>
- nextSibling(),该方法返回某个元素之后紧跟的兄弟元素。</br>
- nextElement(),该方法不存在。</br>
- el.parentNode.children(),parentNode是指向它的父节点，children方法时找到所有对应的直接子结点，包括el本身。</br>
综上所述，应该选择C

#### 4. 不定项选择题
以下哪些属于http请求的返回头（排除自定义http header因素）</br>
A Content-Type</br>
B Cookie</br>
C Host</br>
D Expires</br>
E Last-Modified</br>
F User-Agent</br>

##### 解析
详情参考 HTTP Header 详解 http://kb.cnblogs.com/page/92320/ </br>
选择ADE

#### 5.不定项选择题
以下哪些方法够选择到id值为foo的元素：</br>
A document.getElementById("foo")</br>
B document.querySelector("#foo")</br>
C document.querySelectorAll("#foo")[0]</br>
D this.foo</br>
E document.foo</br>
F foo</br>

##### 解析
这个题目前三种大家应该都知道，平时也就是这样使用的。D重点应该是HTML中的id和全局的window之间的关系，可以这样理解，我们在HTML中书写的标签实际上是通过id的值这个变量挂在全局变量上的，当this值为window时，成立。document是window的另外一个变量属性，它和foo没有直接关系。F是为了兼容以前的浏览器而存在的。
所以，应该选A、B、C、D、F

#### 6.不定项选择题
以下针对npm命令和包管理策略描述正确的是：</br>
A npm install babel@^6.5命令可以安装最新版的6.5.X版本的babel</br>
B npm install babel@>=5.6命令可以安装最新5.x.x版本的babel</br>
C npm publish 命令可以覆盖之前发布过的版本</br>
D 安装完A包后再安装B包，如果B包依赖A包，则A包不会多次安装</br>
E require("babel")时，优先查找当前目录下是否有babel这个包</br>
F npm run build 命令可以运行当前目录下的build.sh</br>

##### 解析
A选项参考  <a>https://docs.npmjs.com/misc/semver</a> ^应该是安装6.x.y版本,x大于等于5</br>
B选项中的>=不存在</br>
C npm publish 不能覆盖之前的版本，只能发布一个新的版本</br>
D 在新版的npm中如果版本号一致是对的，在旧版的npm中不管什么条件都要重新安装</br>
E require是优先在当前目录下查找，是对的</br>
F npm run是运行当前目录下的package.json下的scripts下的内容</br>

综合，应该是选E或者DE


#### 7.填空
请在空白处填写代码，要求输出step1()中的1：
\`\`\`
function* step1(){
    yield 1;
}
function *step2(){
    yield step1();
}
console.log(step2()__________________________);
\`\`\`

##### 解析
这个题目考察的是yield语句，遇到yeild语句会暂停后面的操作，并将紧跟着yeild后面的那个表达式的值返回，next方法时继续执行，直到 遇到下一个yeild。所以这里应该是:
\`\`\`
step2().next().value.next().value;
\`\`\`

#### 8.填空
请完成一下填空，使得id为loading的div每1秒转1圈并无限循环：
\`\`\`
<html>
    <head>
        <style>
        #loading{
            width:100px;
            height:100px;
            position:absolute;
            animation:circling _____ linear 0s ______;
        }
        @______ circling{
            from {
                transform:_____________;
            }
            to{
                transform:_____________;
            }
        }
        </style>
    </head>
    <body>
        <div id="loading"></div>
    </body>
</html>
\`\`\`
##### 解析
这个题目重点考察animation动画的实现。</br>
自定义动画的实现
\`\`\`
@keyframes 动画名{
    from{
        初始状态
    }
    to{
        结束状态
    }
}
\`\`\`
transform属性的使用</br>
这里是旋转一周，从0度到359度，所以初始状态应该是0度，结束状态应该是359度，即：
\`\`\`
from{
    transform:rotate(0deg);
}
to{
    transform:rotate(359deg);
}
\`\`\`
animation属性</br>
animation：动画名 持续时间 速度 延时 重复次数</br>
这里应该为：
\`\`\`
animation:circling 1s linear 0s infinite;
\`\`\`

#### 9.问答题
请实现add函数，是的add(100)(200)(300)(400) == 1000
##### 解析
这个题目考察函数，在JavaScript中函数也是一个值，它是可以通过return返回的，具体实现如下：
\`\`\`
var add = function(a){
    return function(b){
        return function(c){
            return function(d){
                return a+b+c+d;
            }
        }
    }
}
\`\`\`

#### 10.问答题
请用JavaScript实现一个输入框，可以根据用户的输入来实时向服务器请求，并给出搜索结果；</br>
给出完整的HTML结构和JavaScript代码，css可不做要求</br>
需要考虑性能优化</br>
尽量使用原生JavaScript</br>

##### 解析
这个题目是对整体原生js的考察，有一定难度,这里是我的简单实现，仅作参考
\`\`\`
<input id="search"></input>
<div id="ans"></div>

<script type="text/javascript">

function debounce(func, wait, immediate) {
  var timeout, args, context, timestamp, result;

  var later = function() {
    var last = new Date().getTime() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };

  return function() {
    context = this;
    args = arguments;
    timestamp = new Date().getTime();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
};

var debug = console.log.bind(console);

var $search = document.getElementById('search');
var $ans = document.getElementById('ans');

var getSearchResult = function(keyword){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      var data = ['11', '12', '22'].filter(function(value){
        return value.indexOf(keyword)>-1;
      });
      resolve(data);
    }, 1000)
})};

function searchIt(value){
  getSearchResult(value).then(function(data){
    var ul = document.createElement('ul');
    data.map(function(value){
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(value));
      ul.appendChild(li);
    })
    ans.innerHTML='';
    ans.appendChild(ul)
  })
}

$search.addEventListener('input', debounce(function(event){searchIt(event.target.value)}, 1000));
searchIt('');
</script>

\`\`\`

分享快乐
`;

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
    },
    {
        id:3,
        title: " 随笔  ----前端路的酸甜苦辣",
        tag:"随笔",
        date:"2016-03-25",
        description:"学习中的一点小感受和大家一起分享",
        content:Article3
    },
    {
        id:4,
        title: "让人欢喜让人忧的CSS居中问题",
        tag:"HTML&CSS",
        date:"2016-03-26",
        description:"CSS布局中的居中问题",
        content:Article4
    },
    {
        id:5,
        title: "对React的一些理解",
        tag:"React",
        date:"2016-04-11",
        description:"学习过程中对React的一些理解",
        content:Article5
    },
    {
        id:6,
        title:"搞怪的JavaScript数据类型",
        tag:"JavaScript",
        date:"2016-04-18",
        description:"js中数据类型方面应该注意的一些问题",
        content:Article6
    },
    {
        id:7,
        title:"谈谈阿里的前端笔试题",
        tag:"其他",
        date:"2016-04-21",
        description:"2016年阿里实习生招聘笔试题",
        content:Article7
    }
];
const ArticleMain = React.createClass({displayName: "ArticleMain",
    componentWillMount(){
        document.body.scrollTop=170;
    },
   render(){
       let article = ARTICLE[this.props.article - 1];
       let articleHTML = (
         React.createElement("div", {className: "inside"}, 
             React.createElement("h2", {className: "title"}, article.title), 
             React.createElement("div", {className: "icon"}, React.createElement("i", {className: "fa fa-tag "}), React.createElement("span", {className: "tag"}, article.tag), 
                 React.createElement("i", {className: "fa fa-calendar "}), React.createElement("span", {className: "date"}, article.date)), 
             React.createElement("div", {className: "description", dangerouslySetInnerHTML: {__html:marked(article.content)}})
         )
       );
       return(
         React.createElement("div", {className: "article"}, 
             articleHTML
         )
       );
   }
});
const Tag = React.createClass({displayName: "Tag",
    componentWillMount(){
        if(document.body.scrollTop !== 0){
            document.body.scrollTop=170;
        }
    },
    componentWillReceiveProps(nextProps){
        if( this.props.tag !== nextProps.tag && document.body.scrollTop !== 0){
            document.body.scrollTop=170;
        }
    },
   render(){
       const articleList = ARTICLE;
       const tag = this.props.tag;
       let TagHTML = articleList.filter(v=> {
           if (tag === 'ALL') return true;
           return v.tag == tag
       }).reverse().map((article)=> {
           return (React.createElement("li", {key: article.id}, 
               React.createElement("div", {className: "inside"}, 
                   React.createElement("h2", {className: "title"}, React.createElement(Link, {to: "/article/" + article.id}, article.title)), 
                   React.createElement("div", {className: "icon"}, 
                       React.createElement("i", {className: "fa fa-tag "}), React.createElement("span", {className: "tag"}, article.tag), 
                       React.createElement("i", {className: "fa fa-calendar "}), React.createElement("span", {className: "date"}, article.date)
                   ), 
                   React.createElement("div", {className: "description"}, article.description), 
                   React.createElement("div", {className: "more"}, React.createElement(Link, {to: "/article/" + article.id}, React.createElement("span", null, "Read More"))
                   )
               )
           ));
       });
       return(
         React.createElement("div", {className: "nav"}, 
             React.createElement("ul", null, 
                 TagHTML
             )
         )
       );
   }
});
const Route = ReactRouter.Route;
const Router = ReactRouter.Router;
const Redirect = ReactRouter.Redirect;
const Link = ReactRouter.Link;
//display属性的改变
function css_display(value) {
    if (value) {
        return {display: 'flex'};
    } else {
        return {display: 'none'};
    }
}

function change_height(value) {
    if (value) {
        return {height: "50px",boxShadow: "0 2px 5px rgba(0,0,0,0.26)"};
    } else {
        return { height: "200px",boxShadow:"none"};
    }
}
function position_top(value){
    if (value) {
        return {top: '100px'};
    } else {
        return {top: '250px'};
    }
}
const Content = React.createClass({displayName: "Content",
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    render(){
        return (
          React.createElement("div", {className: "main"}, 
              React.createElement("div", {className: "content"}, 
                  React.createElement(LeftArea, {wheel: this.props.wheel}), 
                  React.createElement(RightArea, {tag: this.props.params.tag, article: this.props.params.article})
              )
          )
        );
    }
});
const Header = React.createClass({displayName: "Header",
    render(){
        return (
          React.createElement("header", {className: "header", style: change_height(this.props.wheel)}, 

              React.createElement("div", {className: "head1"}, 
                  React.createElement("div", {className: "logoSmall", style: css_display(this.props.wheel)}, React.createElement(Link, {to: "/tag/ALL"}, "CaoHuilin")
                  ), 
                  React.createElement("div", {className: "blank"}), 
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
              ), 
              React.createElement("div", {className: "head2", style: css_display(!this.props.wheel)}, 
                  React.createElement("div", {className: "logo"}, React.createElement(Link, {to: "/tag/ALL"}, "=CHL")), 
                  React.createElement("div", {className: "proverb"}, "Pursue beauty , Approach beauty , Achieve beauty")
              )
          )
        )
    }
});
const LeftArea = React.createClass({displayName: "LeftArea",
    render(){
        return (
          React.createElement("div", {className: "leftArea"}, 
              React.createElement("div", {className: "classify", style: position_top(this.props.wheel)}, 
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
        if (this.props.tag) {
            //console.log('render RightArea', TagHTML, TagHTML.length);
            return (
              React.createElement("div", {className: "rightArea"}, 
                React.createElement(Tag, {tag: this.props.tag})
              )
            )
        } else if (this.props.article) {

            return (
              React.createElement("div", {className: "rightArea"}, 
                React.createElement(ArticleMain, {article: this.props.article})
              )

            );
        } else {
            return null;
        }
    }
});
const Footer = React.createClass({displayName: "Footer",
    render(){
        return (
          React.createElement("footer", {id: "footer"}, 
              React.createElement("div", {className: "con"}, 
                  React.createElement("ul", null
                  ), 
                  React.createElement("ul", {className: "menu"}, 
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
          React.createElement("div", {className: "mainBody", onWheel: this.onWheelDown, onScroll: ()=>console.log('scroll')}, 
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
), document.getElementById('mainBody'));