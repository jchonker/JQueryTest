
//remove和empty
$(document).ready(function () {

    $("#btn").click(function () {
        // $("p").remove();
        // $("p").empty();

        /**
         * remove和empty的区别：
         * empty只清除被作用元素的内容，不删除被作用元素
         * remove不但清除被作用元素的内容，还删除被作用元素
         *
         * 如在本例中：
         * $("div").remove();删除包括div元素及其中的所用内容
         * $("div").empty();只删除div元素中的内容，但不删除div元素
         */
        // $("div").remove();
        $("div").empty();
    });

});