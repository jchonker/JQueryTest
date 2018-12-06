$(document).ready(function(){
	
	//这种方式有很大缺点，当事件非常多的时候，非常消耗内存，可以使用bind()和unbind()
//	$("#clickmebtn").click(function(){
//		alert("hello");
//	});


	//在JQuery1.7之后，可以使用on替代bind，off替代unbind，而且官方推荐这样使用
	//1：使用bind和unbind

	//绑定事件
	// $("#clickmebtn").bind("click",clickHandler1);            //方法名后面没有括号
	// $("#clickmebtn").bind("click",clickHandler2);
	//解除绑定
	// $("#clickmebtn").unbind("click");                        //解除所有绑定事件
	// $("#clickmebtn").unbind("click",clickHandler2);              //解除指定绑定事件


	//2：使用on和off
	//使用on和off
    //绑定事件
    $("#clickmebtn").on("click",clickHandler1);            //方法名后面没有括号
    $("#clickmebtn").on("click",clickHandler2);
    //解除绑定
    // $("#clickmebtn").off("click");                        //解除所有绑定事件
    $("#clickmebtn").off("click",clickHandler2);             //解除指定绑定事件
});

function clickHandler1(e){
	console.log("clickHandler1");
}

function clickHandler2(e) {
	console.log("clickHanlder2");
}