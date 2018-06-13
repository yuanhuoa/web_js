import "../static/css/popup.css";
import "../static/css/options.css";
import $ = require("../static/js/jquery-3.3.1.min.js");
import {MainContent} from "./page/mainContent";
import {DelAd} from "./utils/delAd";
import {GetBrowser} from "./utils/getBrowser";


/** 初始化插件页面
 *  加载js的时候添加节点
 */
function init() {
    MainContent.addBody();
    MainContent.addMainEvent();
    MainContent.switchPage();
}

init();

/**
 *  插件图标点击事件
 */
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.title === "change-show") {
        // 显示主div
        if ($("#piece_div_show").css("display") == "none") {
            $("#piece_div_show").css("display", "block");
        } else {
            $("#piece_div_show").css("display", "none");
        }
    }
});

/**
 * 播放 audio
 */
function playSuccessAudio() {
    let audio: HTMLAudioElement = new Audio(chrome.runtime.getURL('static/sounds/extension_success.mp3'));
    audio.play();
}

// 删除广告
DelAd.deleteDianyingAd();
//获取浏览器信息
console.log(GetBrowser.getBrowserInfo());