const STORAGE_KEY = 'vue-test-vueJs'
const STORAGE_KEY_NUM = 'vue-test-num'
const ECHARTS_NUM = 'echarts-num'
export default {
  fetch: function () {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '[]')
  },
  save: function (items) {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  },
  fetchNum: function () {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY_NUM))
  },
  saveNum: function (items) {
    window.sessionStorage.setItem(STORAGE_KEY_NUM, JSON.stringify(items))
  },
  fetchEchartsNum: function () {
    return JSON.parse(window.sessionStorage.getItem(ECHARTS_NUM))
  },
  saveEchartsNum: function (items) {
    window.sessionStorage.setItem(ECHARTS_NUM, JSON.stringify(items))
  }
}
