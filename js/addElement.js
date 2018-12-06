/**
 * append:在被选中元素的结尾来添加内容
 * prepend:在被选中元素的开头插入内容
 *
 * before:在被选中元素之前插入内容
 * after:在被选中元素之后插入内容
 *
 * before,after会在被选中元素前后另起一行添加
 */

$(document).ready(function () {
    $("#btn1").click(function () {
        $("#p1").append("append words")
        $("#p1").prepend("prepend words")

    });

    $("#btn2").click(function () {
        $("#p2").before("before words")
        $("#p2").after("after words")
    });
});



function appendText() {
    /**
     * 追加新的元素
     * html,JQuery,DOM
     */
    var text1 = "<p>iwen</p>";
    var text2 = $("<p></p>").text("ime");
    var text3 = document.createElement("p");
    text3.innerHTML="acely";
    $("body").append(text1,text2,text3);

}

