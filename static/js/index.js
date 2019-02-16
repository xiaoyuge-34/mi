// 顶部导航高亮
$(".top-nav").children("a").mouseover(function () {
    this.style="text-decoration:none;color:white"
});
$(".top-nav").children("a").mouseleave(function () {
    this.style="text-decoration:none;color:;"
});

// 购物车高亮
$(".top-cart").children("a").mouseover(function () {
    this.style="text-decoration:none;color:white"
});
$(".top-cart").children("a").mouseleave(function () {
    this.style="text-decoration:none;color:;"
});


// 登录信息高亮
$(".top-info").children("a").mouseover(function () {
    this.style="text-decoration:none;color:white"
});
$(".top-info").children("a").mouseleave(function () {
    this.style="text-decoration:none;color:;"
});

// 购物车提示下滑狂
$("#shopping-cart").mouseover(function () {
    this.style="height:40px;width: 120px;background: white;text-align: center;";
    this.firstChild.style = "color:red;text-decoration:none;";
    $("#cart-tips").slideDown(300);

});
$("#shopping-cart").mouseleave(function () {
    this.style="height:40px;width: 120px;background: #515151;text-align: center;";
    this.firstChild.style = "color:;text-decoration:none;";
    $("#cart-tips").slideUp(300);
});

// 选中选项
$(".tab-bar .tab-nav").children("a").mouseover(function () {
    for(var i = 0;i<$(".tab-bar .tab-nav").children("a").length;i++){
        $(".tab-bar .tab-nav").children("a").eq(i).css("color", "");
        if(i<8){
        $(".top-recommend-content").children("div").eq(i).attr("hidden", "");
        }
    }
    this.style = "text-decoration:none;color: red;";
    var index = $(".tab-bar .tab-nav").children("a").index(this);
    if(index<8) {
        $(".top-recommend-content").children("div").eq(index).removeAttr("hidden");
        $(".top-recommend-content").removeAttr("hidden");
        $(".top-recommend-content").children("div").children("div:last-child").children("div").remove();
        // $(".top-recommend").removeAttr("hidden", "");
        $(".top-recommend").slideDown(300);
    }
    else{
        $(".top-recommend").slideUp(300);
    }
});


$(".top-recommend").mouseleave(function () {
    for(var i = 0;i<$(".tab-bar .tab-nav").children("a").length;i++){
        // $(".top-recommend-content").children("div").eq(i).attr("hidden", "");
        $(".tab-bar .tab-nav").children("a").eq(i).css("color", "")
        // $(".top-recommend").attr("hidden", "");
        $(".top-recommend").slideUp(300);
    }
});

$(".tab-logo").mouseover(function () {
    for(var i = 0;i<$(".tab-bar .tab-nav").children("a").length;i++){
        // $(".top-recommend-content").children("div").eq(i).attr("hidden", "");
        $(".tab-bar .tab-nav").children("a").eq(i).css("color", "");
        // $(".top-recommend").attr("hidden", "");
        $(".top-recommend").slideUp(300);
    }
});

$(".tab-search").mouseover(function () {
    for(var i = 0;i<$(".tab-bar .tab-nav").children("a").length;i++){
        // $(".top-recommend-content").children("div").eq(i).attr("hidden", "");
        $(".tab-bar .tab-nav").children("a").eq(i).css("color", "");
        // $(".top-recommend").attr("hidden", "");
        $(".top-recommend").slideUp(300);
    }
});

$(".top-bar").mouseover(function () {
    for(var i = 0;i<$(".tab-bar .tab-nav").children("a").length;i++){
        // $(".top-recommend-content").children("div").eq(i).attr("hidden", "");
        $(".tab-bar .tab-nav").children("a").eq(i).css("color", "");
        // $(".top-recommend").attr("hidden", "");
        $(".top-recommend").slideUp(300);
    }
});

// 输入框被点击高亮
$("#content-search-input").click(function () {
    $(".search-button").attr("style","border: 1px solid red;");
    $(".input-search").attr("style","border: 1px solid red;");
    $(".hot-content").removeAttr("hidden");
});

// 输入框失去焦点
$("#content-search-input").blur(function(){
    $(".search-button").attr("style","");
    $(".input-search").attr("style","");
    $(".hot-content").attr("hidden", "");
});

// 热搜内容高亮
$(".hot-content").children("a").children("div").mouseover(function () {
    this.style = "background: #EBEBEB;"
});

$(".hot-content").children("a").children("div").mouseleave(function () {
    this.style = "background: white;"
});

// 搜索按钮高亮
$(".search-button").mouseover(function () {
    this.style = "background: red;color:white;border:1px solid red;"
});

$(".search-button").mouseleave(function () {
    this.style = ""
});

// 选中选项
$(".options-container").children("ul").children("a").children("li").mouseover(function () {
    for(var i = 0;i<$(".options-container").children("ul").children("a").children("li").length;i++){
        $(".recommend-content").children("div").eq(i).attr("hidden", "");
        $(".options-container").children("ul").children("a").children("li").eq(i).css("background", "");
    }
    this.style = "background: #FF4500";
    var index = $(".options-container").children("ul").children("a").children("li").index(this);
    $(".recommend-content").children("div").eq(index).removeAttr("hidden");
    $(".recommend-content").removeAttr("hidden");
});

// 离开弹出框
$(".recommend-container").mouseleave(function () {
    for(var i = 0;i<$(".options-container").children("ul").children("a").children("li").length;i++){
        $(".recommend-content").children("div").eq(i).attr("hidden", "");
        $(".recommend-content").attr("hidden", "");
        $(".options-container").children("ul").children("a").children("li").eq(i).css("background", "");
    }
});

// 清除a标签下划线
$(".options-container").children("ul").children("a").mouseover(function () {
    this.style = "text-decoration:none;";
});


$(".recommend-content a").mouseover(function () {
    this.style = "color:red;"
});

$(".recommend-content a").mouseleave(function () {
    this.style = "color:"
});

// 销量推荐左边选项
$(".sales-container").children(".options").children("a").children("div").children("span").mouseover(function () {
    this.style = "color: white;";
});

$(".sales-container").children(".options").children("a").children("div").children("span").mouseleave(function () {
    this.style = "";
});

$(".img-container").children("div").children("img").mouseover(function () {
    this.style="box-shadow: 3px 3px 10px 10px #DEDEDE;"
});

$(".img-container").children("div").children("img").mouseleave(function () {
    this.style=""
});


