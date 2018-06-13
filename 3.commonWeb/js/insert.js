//prepend,append,before,after
$(document).ready(function(){
    $("#beforeBegins").click(function (){
        // var list=document.getElementById("list");
        // list.insertAdjacentHTML("beforeBegin","<li>three</li>");
        $("#list").prepend("<li>three</li>")
    });
    $("#afterBigins").click(function (){
        // var list=document.getElementById("list");
        // list.insertAdjacentHTML("afterBegin","<li>three</li>");
        $("#list").append("<li>three</li>")
    });
    $("#beforeEnds").click(function (){
        // var list=document.getElementById("list");
        // list.insertAdjacentHTML("beforeEnd","<li>three</li>");
        $("#list").before("<li>three</li>")
    });
    $("#afterEnds").click(function (){
        // var list=document.getElementById("list");
        // list.insertAdjacentHTML("afterEnd","<li>three</li>");
        $("#list").after("<li>three</li>")
    });
})