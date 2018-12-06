$(document).ready(function() {
    $("body").bind("click",bodyHandler1);
    $("body").bind("mouseover",bodyHandler2);
    $("div").bind("click",divHandler1);
    $("div").bind("click",divHandler2);
    $("div").bind("dblclick",divHandler3);
});

function bodyHandler1(event) {
    console.log("hello body");                //注意：console不是所有的浏览器都支持，在ie下可能会报错
    //console.log(event);
}

function bodyHandler2() {
    $("div").css("backgroundColor","yellow");
}

function divHandler1(event) {
    console.log("hello div1");
    // console.log(event)

    /**
     * stopPropagation方法，调用后，会立即停止对后续节点的访问，但是会执行完绑定到当前节点上的所有同类事件处理程序；
     * 简言之，只能阻止父类元素的冒泡，就是一个元素绑定了多个同类事件（比如click），且父元素也绑定了该类事件，
     * 那么在元素调用stopPropagation方法后，父元素不会执行同类事件，不同类事件会执行。但是该元素绑定的多个同类事件会依次执行。
     *
     * 在本例中：使用了此函数，body的bodyHandler1不会执行，body的bodyHandler2会执行，div的divHandler2，divHandler3
     * 都会执行
     */
    event.stopPropagation();


    /**
     * stopImmediatePropagation方法，调用后，除了所有后续节点，绑定到当前元素上的、当前事件处理程序之后的
     * 事件处理程序都不会执行。简言之，既能阻止父类元素冒泡，也能阻止同类事件的执行。假如一个元素绑定了多个同类事件
     * （比如click），且父元素也绑定了该类事件，那么在元素调用stopImmediatePropagation方法后，父元素不会执行同类事件，
     * 该元素执行完当前事件，绑定的同类事件也不会执行，但不同类事件会执行
     *
     *在本例中：使用了此函数，body的bodyHandler1不会执行，body的bodyHandler2会执行，div的同类事件divHandler2不会再执行，
     * 但是divHandler3会执行。
     */
    // event.stopImmediatePropagation();
}

function divHandler2(event) {
    console.log("hello div2");
    // console.log(event)
}


function divHandler3(event) {
    alert("hello div3");
}

//自定义一个控制台输出的函数，当调用此函数输出控制台报错时，可以直接把这个函数取消，不用取消全部使用此函数的地方
function conlog(event){
    condole.log(event);
}