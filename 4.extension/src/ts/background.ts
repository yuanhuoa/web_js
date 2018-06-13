import {
} from "./html/constans";
import {AJAX} from "./utils/getData";

let tabId:number;

function setExtensionIcon() {
  chrome.tabs.query({active: true, currentWindow: true}, tabs=>{
    tabId = tabs[0].id;
    let isBaidu = tabs[0].url.indexOf("https://www.baidu.com") > -1;
    if(isBaidu){
      chrome.browserAction.setIcon({path: {'19': 'static/icons/icon_16.png','38': 'static/icons/icon_16.png'}});
    }else{
      chrome.browserAction.setIcon({path: {'19': 'static/icons/icon_16_default.png','38': 'static/icons/icon_16_default.png'}});
    }
  })
}

/**
 *  浏览器当前页标签变化事件 刷新可能并不触发 http页面可能报错
 */
chrome.tabs.onUpdated.addListener((tabId, info) => {
  if (info && info['status'] == "complete") {
    setExtensionIcon();
    // 注入JavaScript， url: ['content-script页面url']
    chrome.tabs.executeScript({ code: `document.URL`}, url => {
      if (url && url[0]) {
        chrome.tabs.sendMessage(tabId, {title: "doSomeThing", info:info, url:url})
      }
    });
  }
})

/**
 *  标签页更改时产生
 */
chrome.tabs.onActivated.addListener(()=>{
  setExtensionIcon();
})

chrome.browserAction.onClicked.addListener(()=>{
  // chrome.tabs.create({url:"https://www.baidu.com/",selected:true})
  chrome.tabs.sendMessage(tabId,{title:"change-show"})
});

