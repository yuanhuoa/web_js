<template>
  <div>
    <appheader></appheader>
    <h2>Vue 组件------×</h2>
    <div>
      <p>1.全局组件：</p>
      <p>格式：<span style="color: #42b983">Vue.component(tagName, options)</span></p>
      <p>tagName 为组件名，options 为配置选项。注册后使用<span style="color: #42b983">&lt;tagName>&lt;/tagName></span>来调用组件：</p>
      <p>vue 多页面demo ：<a target="_blank" href="https://segmentfault.com/q/1010000006084272?_ea=1008985">https://segmentfault.com/q/1010000006084272?_ea=1008985</a></p>
      <br>
    </div>
    <p>-----动画效果-----动画库：<a href="https://daneden.github.io/animate.css/" target="_blank">https://daneden.github.io/animate.css/</a></p>
    <div class="main">
      <h1><a id="Header1_HeaderTitle" class="headermaintitle" href="http://www.cnblogs.com/imgss/">IMGSS</a></h1>
    </div>
  </div>
</template>

<script>
import appheader from './common/header'
export default {
  data () {
    return {}
  },
  components: {
    appheader
  },
  watch: {
    student: {}
  },
  methods: {}
}
</script>
<style scoped>
  .main{
    width: 200px;
    height: 100px;
    border: 1px solid gold;
    background: #6b2291;
  }
  h1{
    margin: 10px;
  }
  a{
    font-family: 'PingFang SC','Helvetica Neue','Helvetica','Arial',sans-serif;
    font-weight: bold;
    text-overflow: clip;
    white-space: nowrap;
    text-align: center;
    color: white;
    text-decoration: none;
  }
  a#Header1_HeaderTitle:before{
    z-index: 2;
    position: relative;
    content: ' ';
    display: block;
    width: 104px;
    height: 2px;
    box-shadow: 0px 0px 5px #fff;
    background: #fff;
    animation: scan 2s infinite;
    animation-direction: alternate;
  }
  @keyframes scan
  {
    from {top:5px;}
    to {top:35px;}
  }
  @-webkit-keyframes mymove /*Safari and Chrome*/
  {
    from {top:5px;}
    to {top:35px;}
  }
</style>
