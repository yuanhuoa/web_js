import {AJAX} from "./utils";

let buyerId:number = 0;
let pluginId: number = 0;
let tabId:number;
/**
 *   设置内存中的内容
 */
chrome.storage.local.set({"buyerId":{
    id: 123,
    email: 456
  }
});
chrome.storage.local.get("buyerId",data=>{
  if (data && data.buyerId) {
    console.log(data.buyerId)
  }
})
/**
 *  监听对已保存内容的更改
 */
chrome.storage.onChanged.addListener(function(changes, areaName){
  if(areaName === "local" && changes["buyerId"]){
    chrome.tabs.sendMessage(tabId,{title:"change-buyerId",buyerId:changes["buyerId"]})
    console.log(changes["buyerId"].newValue.buyerId)
  }
});

/**   在alarmInfo指定的时间创建一个新的alarm，同时发出onAlarm事件。如果已经有重名的alarm则替换已有的alarm。
 *    alarmInfo:   when_触发alarm的时间(ms)
 *                 delayInMinutes_onAlarm事件发出的延迟时间(min)
 *                 periodInMinutes_非null表示alarm周期性执行的时间间隔(min)
 *    可以用来定期获取商品
 */
chrome.alarms.create("test_alert", { periodInMinutes: 1 });

/**
 *  制定计划周期性地执行代码，或在指定时间执行代码。
 *  一分钟内最多只能有一个alarm
 */
chrome.alarms.onAlarm.addListener(alarm => {
    if (alarm.name === "test_alert") {
        alert(123)
    }
});

/**
 *  监控chrome.tabs.sendMessage事件，与content page交互
 */
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if(message.title === "get-asin-info"){
    AJAX("get","getAsinInfo/" + message.requestData,{})
      .then(res=>sendResponse(res))
  }else if(message.title === "get-related"){
    AJAX("get","related" + message.requestData,{})
      .then(res=>sendResponse(res))
      .catch(err=>{sendResponse(err)})
  }
  return true;
});

function setExtensionIcon() {
  chrome.tabs.query({active: true, currentWindow: true}, tabs=>{
    tabId = tabs[0].id;
    let isAmazon = tabs[0].url.indexOf("https://www.baidu.com") > -1;
    if(isAmazon){
      chrome.browserAction.setIcon({path: {'19': 'static/icons/icon_16.png','38': 'static/icons/icon_16.png'}});
    }else{
      chrome.browserAction.setIcon({path: {'19': 'static/icons/default_icon_16.png','38': 'static/icons/icon_16_default.png'}});
    }
  })
}

/**
 *  浏览器标签变化事件
 */
chrome.tabs.onUpdated.addListener((tabId, info, tab) => {
  if (info && info['status'] === "loading") {
    setExtensionIcon();
    chrome.tabs.executeScript({ code: `document.URL`}, url => {
      if (url && url[0]) {
        chrome.tabs.sendMessage(tabId, {title: "select-product"})
      }
    });
  }
})

/**  当应用第一次安装、更新至新版本或浏览器更新至新版本时产生
 *   enum of "install", "update", "chrome_update", "shared_module_update"
 */
chrome.runtime.onInstalled.addListener(response => {
  response['reason'] == "install" && getPluginIdFromServer();

    if(response['reason'] == "install"){window.open("http://www.dealgogogo.com/welcomes");}
    if(response['reason'] == "update"){window.open("http://www.dealgogogo.com/welcomes");}
});

/**
 * 卸载打开url
 */
chrome.runtime.setUninstallURL("http://www.baidu.com");

function getPluginIdFromServer() {
  // 储存插件id
  AJAX("post","saveExtensionID",{})
    .then(res=>{
        if(res.status === 0 && res.data){
          let extensionId = res.data.extension_id;
          extensionId && chrome.storage.local.set({ 'pluginId': extensionId });
          pluginId = +extensionId;
        }
    })
    .catch(err=>console.log(err))
}

