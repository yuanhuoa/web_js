$(function(){
    $("#sub").click(function () {
        console.log("sub点击实际");
        $(this).blur();
        $("#name").blur();
        $("#psw").blur();
        if($("#name").val() == ""){
            $("#name").focus();
            $("#log-error").text("请输入用户名/邮箱");
            $("#name").css("border-color","#fc4343");
            $(this).attr("disabled",false);
            return;
        } else if($("#psw").val() == ""){
            $("#psw").focus();
            $("#log-error").text("请输入密码");
            $("#name").removeAttr("style");
            $("#psw").css("border-color","#fc4343");
            $(this).attr("disabled",false);
            return;
        } else{
            $("#sub").attr("disabled",true);
            $("#sub").val("登录中...");
            setTimeout(function () {
                //ajax获取结果
                if ($("#name").val() == "123" && $("#psw").val() == "123"){
                    console.log("登陆成功");
                } else {
                    console.log("登陆失败");
                    $("#psw").focus();
                    $("#psw").css("border-color","#fc4343");
                    $("#log-error").html("帐号或密码错误，请重新输入或者<a href=\"#\" class=\"forgot-psw\">找回密码</a>");
                }
                $(this).attr("disabled",false);
                $("#sub").val("登录");
            },3000)
        }
    })

    $("#name").focus(function () {
        $("#name").removeAttr("style");
    });
    $("#psw").focus(function () {
        $("#psw").removeAttr("style");
    })

    $("#name").blur(function () {
        if($("#name").val() != ""){
            $("#name").removeAttr("style");
        }
    });
    $("#psw").blur(function () {
        if($("#psw").val() != ""){
            $("#psw").removeAttr("style");
        }
    })

    //删除的显示隐藏
    $("#name").keyup(function () {
        if($("#name").val() == ""){
            $("#del-name").css("display","none");
        }else{
            $("#log-error").text("");
            $("#del-name").css("display","inline-block");
        }
    });
    $("#psw").keyup(function () {
        if($("#psw").val() == ""){
            $("#del-psw").css("display","none");
        }else{
            $("#log-error").text("");
            $("#del-psw").css("display","inline-block");
        }
    })
    //删除
    $("#del-name").click(function () {
        $("#name").val("");
    })
    $("#del-psw").click(function () {
        $("#psw").val("");
    })
})