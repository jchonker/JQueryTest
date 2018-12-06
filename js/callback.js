$(document).ready(function () {

    $("button").click(function () {

        //回调函数，执行完动作后再执行
        // $("p").hide(1000,function () {
        //     alert("动画结束，执行回调函数")
        // });

        //可以通过这种方式设置多个函数依次执行
        $("p").css("color","red").slideUp(1000).slideDown(1000)
    });
})