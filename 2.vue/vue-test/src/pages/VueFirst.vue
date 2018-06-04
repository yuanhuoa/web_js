<template>
  <div>
    <p>1.双括号数据绑定：{{ msg }}</p>
    <p>2.使用 v-html 指令用于输出 html 代码：<span v-html="msg"></span></p>
    <p>3.HTML 属性中的值应使用 v-bind 指令：</p>
      <p class="bindAttr">a.绑定id：<span v-bind:id="'list-' + id">  id:  list-{{id}}</span></p>
      <p class="bindAttr">b.绑定class：<span v-bind:class="{'class1': ifShow}">
        <label><input type="checkbox" v-model="ifShow">勾选变化颜色</label></span></p>
      <p class="bindAttr">c.绑定href：<a v-bind:href="url" target="_blank">百度</a></p>
    <p>4.Vue.js 都提供了完全的 JavaScript 表达式支持：</p>
      <p class="bindAttr">a.加法 5 + 5 ：{{5+5}}</p>
      <p class="bindAttr">b.三目运算 ok ? 'YES' : 'NO'：{{ ifShow ? 'YES' : 'NO' }}</p>
      <p class="bindAttr">c.调用基础api "abcdef".split('').reverse().join('') ：{{ message.split('').reverse().join('') }}</p>

    <p>5.修饰符</p>
    <p class="bindAttr">a.事件修饰器.stop<a :href="url" v-on:click.stop="doSomething">baidu</a></p>
    <p class="bindAttr">b.按键修饰符.keyup.enter<input @keyup.enter="doThis" v-model="msgs"></p>
    <p class="bindAttr">c.按键修饰符.在改变后才触发（也就是说只有光标离开input输入框的时候值才会改变）
      <input v-model.lazy="msgs">绑定：{{msgs}}</p>
    <p class="bindAttr">d.按键修饰符.失去焦点去除前后空格
      <input v-model.trim="msgss">绑定：{{msgss}}</p>

    <p>5.过滤器</p>
    <p class="bindAttr">a.在两个大括号中 {{ message | capitalize }}</p>
    <p class="bindAttr" :id="message | capitalize">b.在v-bind 指令中 id:{{ message | capitalize }}</p>

    <p>6.对象添加一个新的属性<button @click="reverseMessage">{{message}}</button></p>
    <div ></div>
  </div>
</template>

<script>

export default{
  name: 'VueFirst',
  data () {
    return {
      msg: '<span style="color: red;">v-html 输出</span>',
      id: 0,
      ifShow: false,
      url: 'http://www.baidu.com',
      message: 'abcdef',
      writeIn: '',
      msgs: '',
      msgss: '',
      props: {
        name: 'zhang'
      }
    }
  },
  methods: {
    doSomething: function () {
      console.info('阻止单击事件冒泡,a跳转之前执行此方法')
      confirm('确认删除吗')
    },
    reverseMessage: function () {
      /* Vue.set 方法用来新增对象的属性。如果要增加属性的对象是响应式的，那该方法可以确保属性被创建后也是响应式的
       * this.props.pwd = 'pwd' 可以直接赋值，但是其属性。。。。
       */
      console.log(this.props.name)
      this.props.pwd = 'pwd'
      this.$set(this.props, 'psw', 123456)
      console.log(this.props)
    }
  },
  components: {

  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  watch: {
    msgs: function (val) {
      console.info(val)
    },
    msgss: function (val) {
      console.info(val)
    }
  }
}
</script>
<style>
  .bindAttr{
    text-indent: 2em;
  }
  .class1{
    color: red;
  }
</style>
