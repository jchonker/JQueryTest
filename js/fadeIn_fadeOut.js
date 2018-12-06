$(document).ready(function () {
   $("#in").on("click",function () {
       $("#div1").fadeIn(2000);
       $("#div2").fadeIn(2000);
       $("#div3").fadeIn(2000);
   });
   $("#out").on("click",function () {
       $("#div1").fadeOut(2000);
       $("#div2").fadeOut(2000);
       $("#div3").fadeOut(2000);
   })

   //单个按钮实现淡入和淡出
   $("#toggle").on("click",function () {
       $("#div1").toggle(2000);
       $("#div2").toggle(2000);
       $("#div3").toggle(2000);
   })

   //fadeTo(时间，透明度)：在某个时间内，渐变至某个透明度状态，主要是至
   $("#to").on("click",function () {
       $("#div1").fadeTo(0,0.5);
       $("#div2").fadeTo(5000,0.7);
       $("#div3").fadeTo(3000,0.3);
   })
});