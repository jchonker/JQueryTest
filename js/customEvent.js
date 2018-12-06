var clickmebtn;

$(document).ready(function() {
    clickmebtn = $("clickmebtn");
    clickmebtn.click(function () {
        var  e = JQuery.Event("MyEvent");
        $("#clickmebtn").trigger(e);
        alert("hello");
    });

    clickmebtn.bind("MyEvent",function(event){
        console.log(event);

    });
});