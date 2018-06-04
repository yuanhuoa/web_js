import "../static/css/popup.css";
import $ = require("../static/js/jquery-3.3.1.min.js");

var extension = null;
import {
  DIV_SHOW, FIRST_PAGE, SECOND_PAGE
} from "./constans";

function addDocumentUrlListener() {
  document.body.insertAdjacentHTML("beforeend", DIV_SHOW);
  $("#_close_show").click(function () {
    $("#div_show").css("display", "none")
  })

  // 切换页面
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
addDocumentUrlListener();

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  extension = sender
  $("#_title_img").attr("src", 'chrome-extension://'+ extension['id'] +'/static/icons/title.png')
  $("#_content_show").html(FIRST_PAGE)
  if(message.title === "change-show"){
    // 显示主div
    if($("#div_show").css("display") == "none"){
      $("#div_show").css("display", "block")
    } else {
      $("#div_show").css("display", "none")
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

/**
 * 浏览器识别
 */
function getBrowserInfo(){
  var ua = navigator.userAgent.toLocaleLowerCase();
  var browserType=null;
  if (ua.match(/msie/) != null || ua.match(/trident/) != null) {
    browserType = "IE";
  } else if (ua.match(/firefox/) != null) {
    browserType = "火狐";
  }else if (ua.match(/ubrowser/) != null) {
    browserType = "UC";
  }else if (ua.match(/opera/) != null) {
    browserType = "欧朋";
  } else if (ua.match(/bidubrowser/) != null) {
    browserType = "百度";
  }else if (ua.match(/metasr/) != null) {
    browserType = "搜狗";
  }else if (ua.match(/tencenttraveler/) != null || ua.match(/qqbrowse/) != null) {
    browserType = "QQ";
  }else if (ua.match(/maxthon/) != null) {
    browserType = "遨游";
  }else if (ua.match(/chrome/) != null) {
    var is360 = _mime("type", "application/vnd.chromium.remoting-viewer");
    function _mime(option, value) {
      var mimeTypes = navigator.mimeTypes;
      for (var mt in mimeTypes) {
        if (mimeTypes[mt][option] == value) {
          return true;
        }
      }
      return false;
    }
    if(is360){
      browserType = '360';
    }else{
      browserType = '谷歌';
      $('html').css("zoom",".80");
    }
  }else if (ua.match(/safari/) != null) {
    browserType = "Safari";
  }
  console.log(browserType)
}
