$(document).ready(function(){
    $("#connectors").click(function (){
        var array = ["a","b","c","d","e","f"];
        var connector = $("#connector").val();
        var a = array.join((connector==null)?"":connector);
        $("#conJoin").text(a) ;
    });
    $("#connectorsPop").click(function (){
        var array = ["a","b","c","d","e","f"];
        var last = array.pop();
        $("#connectorPop").text(last);
        console.log(array)
        $("#conPop").text(array) ;
    });
    $("#connectorsDel").click(function (){
        var array = ["a","b","c","d","e","f"];
        var last = array.shift();
        $("#connectorDel").text(last);
        console.log(array)
        $("#conDel").text(array) ;
    });
    $("#connectorsAdd").click(function (){
        var array = ["a","b","c","d","e","f"];
        var connector = $("#connectorAdd").val();
        var a = array.unshift(connector)
        $("#conAdd").text(array) ;
    });


    $("#forEachArray").click(function (){
        var array1 = [1,2,3,4,5,6];
        var x = array1.forEach(function(value,index,array){
            array[index] = value+1;
            return array;
        });
        console.log("新数组"+x); //不管以上返回什么，x都为undefined
        console.log("原数组"+array1);
        $("#forEachArraySpan").text(array1) ;
    });
    $("#mapArray").click(function (){
        var array1 = [1,2,3,4,5,6];
        var x = array1.map(function(value,index,array){
            return value+1;
        });
        console.log("新数组"+x); //返回新数组
        console.log("原数组"+array1);
        $("#mapArraySpan").text(array1) ;
    });
})