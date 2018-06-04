$(document).ready(function(){
    $("#beforeBegins").click(function (){
        var list=document.getElementById("list");
        list.insertAdjacentHTML("beforeBegin","<li>three</li>");
    });
    $("#afterBigins").click(function (){
        var list=document.getElementById("list");
        list.insertAdjacentHTML("afterBegin","<li>three</li>");
    });
    $("#beforeEnds").click(function (){
        var list=document.getElementById("list");
        list.insertAdjacentHTML("beforeEnd","<li>three</li>");
    });
    $("#afterEnds").click(function (){
        var list=document.getElementById("list");
        list.insertAdjacentHTML("afterEnd","<li>three</li>");
    });
})