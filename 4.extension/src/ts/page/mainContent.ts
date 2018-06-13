import {DIV_SHOW, FIRST_PAGE, SECOND_PAGE, EG_PAGE} from "../html/insertHtml";
import {Md} from "../utils/md";
import $ = require("../../static/js/jquery-3.3.1.min.js");
import Clipboard = require("../../static/js/clipboard-1.7.1.min.js");

export class MainContent {
    /**
     *   增加body节点     before<body>prepend  …………  append</body>after
     */
    static addBody() {
        let url: string = chrome.runtime.getURL("static");
        sessionStorage.setItem("my_extension_url", url);
        $("body").append(DIV_SHOW(url));

        $("#piece_close_show").click(function () {
            $("#piece_div_show").css("display", "none");
        })
    }

    /**
     * 给主页增加事件
     */
    static addMainEvent() {
        $("#piece_content_show").html(FIRST_PAGE(sessionStorage.getItem("my_extension_url")));
        $(".piece_page_col").click(function () {
            $(this).addClass("piece_page_col_active");
            $(this).siblings().removeClass("piece_page_col_active");
            let conetent:string =  $(this).text();
            if(conetent=="主页"){
                $(".piece_first_content:first").removeAttr("style");
                $(".piece_first_content:last").css("display","none");
            }else{
                $(".piece_first_content:first").css("display","none");
                $(".piece_first_content:last").removeAttr("style");
            }
        })
        $(".piece_page_col")[0].click();
    }
    /**
     * 给其他页增加事件
     */
    static addEGEvent() {
        $("#piece_content_show").html(EG_PAGE);

        // 复制关键词
        var clipboard = new Clipboard('#btnCoupon');
        clipboard.on('success', function (e) {
            e.clearSelection();
            $('#btnCoupon').text("copied");
            $('#btnCoupon').css({"background-color": "#00c57d"});
            setTimeout(function () {
                $('#btnCoupon').text("copy");
                $('#btnCoupon').removeAttr("style");
            }, 1000);
        })

        $("#md5").click(function () {
            let mes: string = $("#mdnum").val().toString();
            if (mes == '') return;
            $("#mdnumTo").val(Md.md5(mes));
        })
    }

    /**
     *   页面切换
     */
    static switchPage() {
        $("#_footer_left_show").click(function () {
            if ($("#_first_page")[0] != undefined) return;
            $("#_second_page").remove();
            $("#piece_content_show").html(FIRST_PAGE);
        })
        $("#_footer_right_show").click(function () {
            if ($("#_second_page")[0] != undefined) return;
            $("#_first_page").remove();
            $("#piece_content_show").html(SECOND_PAGE);
        })
    }
}