$(document).ready(function () {
    /**
     * 隐藏函数hide(),显示函数show(),隐藏显示函数toggle()加上事件参数表示动画事件，完成这个过程需要的时间
     */

    $("#hide").click(function () {
        $("p").hide(1000);
    });

    $("#show").click(function () {
        $("p").show(1000);
    });


    //上面的隐藏和显示功能是分开的，下面的隐藏显示功能是在同一个按键上
    $("#toggle").click(function () {
        $("p").toggle(1000);
    });
});