import {DIV_SHOW, FIRST_PAGE, SECOND_PAGE} from "../constans";
import {Md} from "../utils/md"
import $ = require("../../static/js/jquery-3.3.1.min.js");
import Clipboard = require("../../static/js/clipboard-1.7.1.min.js");

export class MainContent {
    /**
     *   增加body节点以及切换功能
     */
    static addBody(){
        document.body.insertAdjacentHTML("beforeend", DIV_SHOW);
        $("#_close_show").click(function () {
            $("#div_show").css("display", "none")
        })

        $("#_footer_left_show").click(function () {
            if ($("#_first_page")[0] != undefined) return
            $("#_second_page").remove()
            $("#_content_show").html(FIRST_PAGE)
        })
        $("#_footer_right_show").click(function () {
            if ($("#_second_page")[0] != undefined) return
            $("#_first_page").remove()
            $("#_content_show").html(SECOND_PAGE)
        })
    }

    /**
     * 给第一页增加事件
     */
    static addMainEvent(){
        // 增加首页内容
        $("#_content_show").html(FIRST_PAGE);

        // 复制关键词
        var clipboard = new Clipboard('#btnCoupon');
        clipboard.on('success', function (e) {
            e.clearSelection();
            $('#btnCoupon').text("copied");
            $('#btnCoupon').css({"background-color": "#00c57d"});
            setTimeout(function () {
                $('#btnCoupon').text("copy");
                $('#btnCoupon').removeAttr("style");
            },1000);
        })


        $("#md5").click(function () {
            var mes = $("#mdnum").val();
            if(mes == '')return;
            var md = new Md();
            $("#mdnumTo").val(md.md5(mes));
        })


    }

}