$(document).ready(function () {
    $("#btn1").click(function () {

        //获取值

        //text()只能获取到指定元素的内容，即便是元素中还有其他标签，不会获取到标签名
        //在本例中输出:this is my webpage这是一个a标签
        alert("text:"+$("#text").text());        //注意：text()是有括号的

        //html()也可以获取到指定元素中的内容，但如果指定元素中有还有其他标签，也会直接获取到标签名
        //在本例中输出:this is my webpage<a>这是一个a标签</a>
        alert("text:"+$("#text").html());

        //获取文本框内容
        alert("text:"+$("it").val())
    });

    $("#btn2").click(function () {
        //attr(属性名)获取属性名
        alert("href属性是:"+$("#aid").attr("href"))
    });




    //设置值
    $("#btn3").click(function () {
        $("#p1").text("极客学院");
    });

    $("#btn4").click(function () {
        $("#p2").html("<a href='http://www.jikexueyuan.com'>极客学院</a>");
    });

    $("#btn5").click(function () {
        $("#i1").val("极客学院")
    });

    //设置属性
    $("#btn6").click(function () {
        //设置单个属性
        //这里要注意:a标签中的href的网址要加上http或者https协议，不然不能访问
        //$("#aid1").attr("href","http://www.jikexueyuan.com");

        //设置多个属性,是以json形式设置的
        $("#aid1").attr({
            "href":"http://www.jd.com",
            "title":"after"
        });
    });

    //回调方法，每次点击都会追加内容
    $("#btn7").click(function () {
        $("#p3").text(function (i,ot) {
            return "old:"+ot+" new:这是新的内容"+(i);
        });
    });
});