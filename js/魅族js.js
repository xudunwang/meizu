//封装ID

function byId(id) {
    if( typeof (id) === "string"){
        return document.getElementById(id);
    }
    else {
        return id;
    }
}

var index = 0;
var time = null;
var headerMenu1 = byId("header-top-right_1");
var headerChildMenu1 =byId("header-top-right_1_child") ;
var headerMenu2 = byId("header-top-right_2"),
    headerChildMenu2 = byId("header-top-right_2_child");
var mainMenu = byId("mainMenu");
var headerNav = byId("header-nav-content"),
    contentItem = headerNav.getElementsByClassName("content-item");
var childMenu = byId("childMenu"),
    childMenuContent = childMenu.getElementsByClassName("childMenu-content");
var main = byId("main");
var pics = byId("banner").getElementsByTagName("div");
var dots = byId("dots").getElementsByTagName("span");
var loginHead = byId("login-head");
var loginMenu = byId("login-menu");
var open1 = byId("open1");
var open2 = byId("open2");
var open3 = byId("open3");
var open5 = byId("open5");
console.log(loginMenu);
// console.log(dots.length);
// console.log(pics.length);
// console.log(contentItem.length);
// console.log(childMenuContent.length);
// console.log(headerMenu1);
// console.log(headerChildMenu1);
// console.log(headerMenu2);
// console.log(headerChildMenu2);

    //header-top-left_1第一个下拉列表的操作

    headerMenu1.onmousemove = function () {
        headerChildMenu1.className = 'header-top-right_1_child';
        headerChildMenu1.setAttribute("style","position:absolute;z-index:888888;");
        headerMenu1.style.background = 'rgba(255,255,255,0.1)';
    }
    headerChildMenu1.onmouseout = function () {
        headerChildMenu1.className = 'header-top-right_1_child dsp';
        headerMenu1.style.background = 'none';
    }
    headerChildMenu1.onmousemove = function () {
        headerChildMenu1.className = 'header-top-right_1_child';
        headerMenu1.style.background = 'rgba(255,255,255,0.1)';
    }
    headerMenu1.onmouseout = function () {
        headerChildMenu1.className = 'header-top-right_1_child dsp';
        headerMenu1.style.background = 'none';
    }

    //header-top-left_2第一个下拉列表的操作
    headerMenu2.onmousemove = function () {
        headerChildMenu2.className ='header-top-right_2_child';
        headerMenu2.style.background = 'rgba(255,255,255,0.1)';
        headerChildMenu2.setAttribute("style","position:absolute;z-index:888888;");
    }
    headerChildMenu2.onmouseout = function () {
        headerChildMenu2.className = 'header-top-right_2_child dsp';
        headerMenu2.style.background = 'none';
    }
    headerChildMenu2.onmousemove = function () {
        headerChildMenu2.className ='header-top-right_2_child';
        headerMenu2.style.background = 'rgba(255,255,255,0.1)';
    }
    headerMenu2.onmouseout = function () {
        headerChildMenu2.className = 'header-top-right_2_child dsp';
        headerMenu2.style.background = 'none';
    }


    //移动到主菜单，显示子菜单的内容
    for (var i = 0;i<contentItem.length;i++){
        contentItem[i].setAttribute("data-index",i);
        contentItem[i].onmousemove = function () {
            childMenu.className = 'childMenu';
            var idx = this.getAttribute("data-index");
            console.log(idx);
            for(var j = 0;j<childMenuContent.length;j++){
                childMenuContent[j].style.display = 'none';
            }
            childMenuContent[idx].style.display = 'block';
        }
        contentItem.onmousemove = function(){
            childMenu.className = 'childMenu';
            childMenu.setAttribute("style","position:absolute;z-index:666666;");
        }
        headerNav.onmouseout = function () {
            childMenu.className = 'dsp';
        }
        childMenu.onmousemove = function () {
            childMenu.className = 'childMenu';
        }
        childMenu.onmouseout = function () {
            childMenu.className = 'childMenu dsp';
        }
        // mainMenu.onmousemove = function() {
        //     childMenu.className = 'childMenu';
        // }
    }

    //登录的下拉菜单login

    loginHead.onmousemove = function(){
        loginMenu.className = 'login-menu';
        loginMenu.setAttribute("style","position:absolute;z-index:777777;");
    }
    loginHead.onmouseout = function(){
        loginMenu.className = 'dsp';
    }
    loginMenu.onmousemove = function(){
        loginMenu.className = 'login-menu';
    }
    loginMenu.onmouseout = function(){
        loginMenu.className = 'dsp';
    }


    //鼠标划过图片效果
    main.onmouseover = function () {
        clearInterval(time);
    }

    //鼠标离开图片效果
    main.onmouseout = function () {
        time = setInterval(function () {
            index++;
            if (index >= pics.length){
                index = 0 ;
            }
            // console.log(index);
            changeImg();
        },4000)
    }
    main.onmouseout();


    //点击圆点切换图片
    for (var i = 0; i < dots.length;i++){
        dots[i].id = i;
        dots[i].onclick = function () {
            index = this.id;
            console.log(index);
            //使圆点和当前图片同步
            this.className = 'active';
            //调用图片函数
            changeImg();
        }
    }

    //点击魅蓝手机，打开组员弄的网站
    open1.onclick = function(){
        window.open("魅族手机/魅族手机.html");
    }
    open2.onclick = function () {
        window.open("魅族官网之魅蓝品牌/魅族官网之魅蓝品牌.html");
    }

    //点击数码配件，打开组员弄的网站
    open3.onclick = function () {
        window.open("魅族手机 数码配件/数码配件.html");
    }
    
    open5.onclick = function () {
        window.open("居家/居家.html");
    }

    //切换图片
    function changeImg() {
    //遍历banner下所以的div以及dots下所以的span，将div隐藏，将span清除
    for(var i = 0;i<pics.length;i++){
        pics[i].style.display='none';
        dots[i].className = '';
    }
    //根据index索引找到当前的div和当前span，将其显示出来和设为当前
    pics[index].style.display='block';
    dots[index].className = 'active';
}




