<template>
  <div>
    <h2>vue 事件处理：</h2>
    <p>
      <button v-on:click="counter += 1">1.增加 1</button>
      <span>这个按钮被点击了 {{ counter }} 次。</span></p>
    <P>
      <button id="but_1" v-on:click="greet">2.Greet</button>
    </P>
    <div>
    <form v-on:submit.prevent="onSubmit"><input type="submit" value="提交"></form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      counter: 0,
      name: ''
    }
  },
  computed: {},
  methods: {
    greet: function (event) {
      // `this` 在方法里指当前 Vue 实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件 获取当前dom信息
      if (event) {
        alert('tagName：' + event.target.tagName + ' ----- id：' + event.target.id + '-------baseURI：' + event.target.baseURI)
      }
    },
    onSubmit: function () {
      console.log(0)
    }
  }
}
</script>
