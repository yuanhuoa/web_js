import $ = require("../../static/js/jquery-3.3.1.min.js");

/**
 * 删除广告
 */
export class DelAd {
    deleteAd() {
        //电影天堂
        if($('body>a') || $('body>a')){
            var num = 0;
            var a = setInterval(function () {
                if($("div[id^=cs_]"))$("div[id^=cs_]").remove()
                if($('body>a'))$('body>a').remove()
                num++;
                if(num==5)clearInterval(a);
            },800);
        }
    }
}