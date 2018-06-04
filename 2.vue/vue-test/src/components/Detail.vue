<template>
    <div id="det">
      <h3>{{msg}}</h3>
      <div v-html="message"></div>
      <br />

      <p>1. HTML 属性中的值应使用 v-bind 指令。</p>
      <label for="r1">v-bind：实现修改颜色</label><input type="checkbox" v-model="class1" id="r1">
      <div v-bind:class="{'class1': class1}">
        directiva v-bind:class eg
      </div>

      <br>
      <p>2. Vue.js 都提供了完全的 JavaScript 表达式支持。</p>
      {{5+5}}<br>
      {{ ok ? 'YES' : 'NO' }}<br>
      {{ messages.split('').reverse().join('_') }}
      <div v-bind:id="'list-' + id">菜鸟教程</div>

      <br/>
      <p>3.指令是带有 v- 前缀的特殊属性。eg:v-if v-show<input type="checkbox" v-model="seen"/></p>
      <p v-show="seen">现在你看到我了</p>
      <p v-if="seen">现在你看到我了</p>

      <br/>
      <div>
        <p>4.参数在指令后以冒号指明。例如， v-bind 指令被用来响应地更新 HTML 属性：</p>
        <a v-bind:href="url" target="_blank">百度</a>
      </div>

      <br/>
      <div>
        <p>5.按钮的事件我们可以使用 v-on 监听事件，并对用户的输入进行响应。：</p>
        <button v-on:click="reverseMessage">{{buttonValue}}</button>
      </div>

      <br/>
      <div>
        <p>6.Vue.js 允许你自定义过滤器，被用作一些常见的文本格式化。：</p>
        {{ message6 | capitaliz }}
      </div>

      <br/>
      <div>
        <p>7.Vue.js 为两个最为常用的指令提供了特别的缩写：：</p>
        <span>eg:v-bind 简写</span><a :href="url" target="_blank">百度</a><br/>
        <span>eg:v-on 简写</span><button @click="reverseMessage">{{buttonValue}}</button>
      </div>

      <br/>
      <p>8.v-if v-else 指令：> 0.5 Sorry  else  Not sorry<input type="button" v-model="random" @click="changVal"/></p>
      <div v-if="random > 0.5">
        Sorry
      </div>
      <div v-else>
        Not sorry
      </div>

      <br/>
      <p>9.v-for指令 循环</p>
      <div v-if="type === 'A'">
        A
      </div>
      <div v-else-if="type === 'B'">
        B
      </div>
      <div v-else-if="type === 'C'">
        C
      </div>
      <div v-else>
        Not A/B/C
      </div>

      <br/>
      <p>9.v-else-if 指令：<input type="text" v-model="type"></p>
      <!-- 在Vue2.0中，v-for迭代语法已经发生了变化：丢弃了: $index,  $key  -->
      <ul>
        <li v-for="site in sites" :key="site.name">
          {{ site.name }}
        </li>
      </ul>
      <ul>
        <li v-for="value in object" :key="value">
          {{ value }}
        </li>
      </ul>
      <ul>
        <li v-for="(value,key) in object" :key="key">
          {{ key }}:{{ value }}
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      msg: 'W你好',
      message: '<a href="https://www.baidu.com" target="_blank">v-html： eg</a>',
      class1: false,

      ok: true,
      messages: 'RUNOOB',
      id: 1,
      seen: true,
      url: 'https://www.baidu.com',
      buttonValue: '点击反转字符串',
      message6: 'helloworld',
      rawId: new Date(),
      type: '',
      random: 0,
      props: {
        name: 'zhang'
      },
      sites: [
        { name: 'Runoob' },
        { name: 'Google' },
        { name: 'Taobao' }
      ],
      object: {
        name: 'zhangsan',
        sex: 'man',
        phone: '110'
      }
    }
  },
  methods: {
    reverseMessage: function () {
      /* vue里面不能直接读取对象属性 可以通过Vue.set 或者this.$set设置属性  */
      console.log(this.props.name)
      this.$set(this.props, 'psw', 123456)
      console.log(this.props)
      this.buttonValue = this.buttonValue.split('').reverse().join('')
    },
    changVal: function () {
      this.random = Math.random().toFixed(2)
    }
  },
  filters: {
    capitaliz: function (value) {
      /* 首字母大写 */
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<style>
  .class1{
    background: #444;
    color: #eee;
  }
  #det{
    text-align: left;
  }
</style>
