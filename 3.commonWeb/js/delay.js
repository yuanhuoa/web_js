$(function(){
    /**
     * 详细
     */
    // $("#contain-list-1").mouseenter(function(){
    //     console.log("移入第一li");
    //     throttle(true,eval('(' + "removeEntefn1" + ')'));
    //     throttle(eval('(' + "addEntefn1" + ')'),1);
    // });
    // $("#contain-list-1").mouseleave(function(){
    //     console.log("移出第一li");
    //     throttle(removeEntefn1,1);
    //     throttle(true,addEntefn1);
    // });
    // $("#contain-list-2").mouseenter(function(){
    //     console.log("移入第2li");
    //     throttle(true,removeEntefn2);
    //     throttle(addEntefn2,2);
    // });
    // $("#contain-list-2").mouseleave(function(){
    //     console.log("移出第2li");
    //     throttle(removeEntefn2,2);
    //     throttle(true,addEntefn2);
    // });
    // $("#contain-list-3").mouseenter(function(){
    //     throttle(true,removeEntefn3);
    //     throttle(addEntefn3,3);
    // });
    // $("#contain-list-3").mouseleave(function(){
    //     throttle(removeEntefn3,3);
    //     throttle(true,addEntefn3);
    // });
    // var addEntefn1=function(){
    //         addHoverStyle(1);
    //     };
    // var removeEntefn1=function(){
    //     removeHoverStyle(1);
    // };
    // var addEntefn2=function(){
    //     addHoverStyle(2);
    // };
    // var removeEntefn2=function(){
    //     removeHoverStyle(2);
    // };
    // var addEntefn3=function(){
    //     addHoverStyle(3);
    // };
    // var removeEntefn3=function(){
    //     removeHoverStyle(3);
    // };
    // var addHoverStyle=function(num){
    //     $("#contain-list-"+num).css("background","#ffffff");
    //     $("#contain-list-"+num+" a").css("color","#000");
    //     $("#contain-list-"+num+" i").css("border-top-color","#000");
    //     $("#contain-content-"+num).addClass("contain-show");
    // };
    // var removeHoverStyle=function(num){
    //     $("#contain-list-"+num).removeAttr("style");
    //     $("#contain-list-"+num+" a").removeAttr("style");
    //     $("#contain-list-"+num+" i").removeAttr("style");
    //     $("#contain-content-"+num).removeClass("contain-show");
    // };

    /**
     * 简化
     */
    var liId = ["#contain-list-1", "#contain-list-2", "#contain-list-3"];
    liId.forEach(function (value) {
        $(value).mouseenter(function(){
            var num = this["id"].substring(this["id"].lastIndexOf("-")+1,this["id"].length);
            console.log("移入li:"+num);
            throttle(true,eval('(' + "removeEntefn"+ num + ')'));
            throttle(eval('(' + "addEntefn"+ num + ')'),1);
        });
        $(value).mouseleave(function(){
            var num = this["id"].substring(this["id"].lastIndexOf("-")+1,this["id"].length);
            console.log("移出li:"+num);
            throttle(eval('(' + "removeEntefn"+ num + ')'),1);
            throttle(true,eval('(' + "addEntefn"+ num + ')'));
        });
    })

    /** 不能组合成为一个方法：当移出一个li移入到另一个li会 同时 开启移出计时器，开启移入计时器
     *  当组合成为一个方法之后，指向同一个计时器 后面覆盖前面，导致移出失败
     */
    var addEntefn1 = function(){
        addHoverStyle(1);
    };
    var removeEntefn1 = function(){
        removeHoverStyle(1);
    };
    var addEntefn2 = function(){
        addHoverStyle(2);
    };
    var removeEntefn2 = function(){
        removeHoverStyle(2);
    };
    var addEntefn3 = function(){
        addHoverStyle(3);
    };
    var removeEntefn3 = function(){
        removeHoverStyle(3);
    };
    var addHoverStyle=function(num){
        $("#contain-list-"+num).css("background","#ffffff");
        $("#contain-list-"+num+" a").css("color","#000");
        $("#contain-list-"+num+" i").css("border-top-color","#000");
        // $("#contain-content-"+num).addClass("contain-show");
        $("#contain-content-"+num).slideDown("fast")
    };
    var removeHoverStyle=function(num){
        $("#contain-list-"+num).removeAttr("style");
        $("#contain-list-"+num+" a").removeAttr("style");
        $("#contain-list-"+num+" i").removeAttr("style");
        // $("#contain-content-"+num).removeClass("contain-show");
        $("#contain-content-"+num).slideUp("fast")
    };


    /** 节流器
     *    @param  isclear  获取传入的第一个参数
     *    @param  fn       第二个参数，表示函数
     **/
    var throttle=function  () {
        var isclear = arguments[0],fn;
        if (typeof isclear === "boolean"){
            fn=arguments[1];
            //函数的计时句柄存在，就清除函数
            fn._throttleID && clearTimeout(fn._throttleID);
            // if(fn._throttleI){
            //     console.log(fn._throttleID);
            // }
        }
        else{
            fn=isclear;
            var param = arguments[1];
            var p= {
                context: null,
                args: [param],
                time: 200,
            };
            //清除执行句柄函数
            arguments.callee(true, fn);
            //为函数绑定计时器的句柄，延迟执行函数
            fn._throttleID=setTimeout(function(){
                fn.apply(p.context, p.args);
            }, p.time)
        }
    }
})