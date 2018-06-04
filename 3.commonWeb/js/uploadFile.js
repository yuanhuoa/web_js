$(function(){
    $("#uploadFileSpan").click(function () {
        $("#uploadFile").click();
    })
    //显示file信息
    $("#uploadFile").change(function () {
        console.log(this);
        var file = this.files;

        $("#input-name").val(this.value)
        if(this.value == ""){
            $("#delFile").css("visibility","hidden");
        } else {
            $("#delFile").css("visibility","visible");
        }
    })
    //点击×删除文件
    $("#delFile").click(function () {
        $("#delFile").css("visibility","hidden");
        $("#input-name").val("")
    })



})