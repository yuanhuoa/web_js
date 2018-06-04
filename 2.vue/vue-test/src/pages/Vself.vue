<template>
  <div>
    <appheader></appheader>
    <h2>Vue 自定义组件</h2>
    <div>
      <p>1.自定义组件：<a href="https://www.cnblogs.com/lhl66/p/7492444.html" target="_blank">https://www.cnblogs.com/lhl66/p/7492444.html</a>
      </p>
      <p>2.自定义组件：<a href="https://cn.vuejs.org/v2/guide/custom-directive.html" target="_blank">https://cn.vuejs.org/v2/guide/custom-directive.html</a>
      </p>
      <br>
      <p>1.页面载入时，input 元素自动获取焦点：</p>
      <input id="input_1" class="input_1" v-focus>
      <h3>2钩子函数</h3>
      <p v-addColor="{ color: 'pink', text: '3.设置背景颜色!' }"></p>
    </div>

    <div class="outer">
      <div class="left" v-drag><span class="cen">move</span></div>
      <div class="right" v-drag><span class="cen">move</span></div>
    </div>
  </div>
</template>

<script>
import appheader from './common/header'

export default {
  data () {
    return {}
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
      }
    },
    drag: {
      bind: function (el) {
        el.onmousedown = function (e) {
          // 获取鼠标点击处分别与div左边和上边的距离：鼠标位置-div位置
          var divx = e.clientX - el.offsetLeft
          var divy = e.clientY - el.offsetTop
          // 包含在onmousedown里，表示点击后才移动，为防止鼠标移出div，使用document.onmousemove
          document.onmousemove = function (e) {
            // 获取移动后div的位置：鼠标位置-divx/divy
            var l = e.clientX - divx
            var t = e.clientY - divy
            el.style.left = l + 'px'
            el.style.top = t + 'px'
          }
          document.onmouseup = function (e) {
            document.onmousemove = null
            document.onmouseup = null
          }
        }
      }
    },
    addColor: {
      bind: function (el, binding) {
        //  简写方式设置文本及背景颜色
        el.innerHTML = binding.value.text
        el.style.backgroundColor = binding.value.color
      }
    }
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
  .input_1 {
    color: #000;
    background: #96B97D;
  }

  .outer div {
    position: absolute;
    width: 100px;
    height: 100px;
    cursor: all-scroll;
  }

  .outer .left {
    background-color: red;
    top: 0;
    left: 0;
    opacity: 0.2;
  }

  .outer .right {
    background-color: blue;
    top: 0;
    right: 0;
    opacity: 0.2;
  }

  .cen {
    color: white;
    font-size: 41px;
  }
</style>
