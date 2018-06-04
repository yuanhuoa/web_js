<template>
  <div>
    <h2>计算属性关键词: computed。</h2>
    <p>1.双括号内计算：{{ message.split('').reverse().join('') }}</p>
    <p>2.computed计算：computed:{{ reversedMessage }} <em style="color:red;">and</em>  method:{{reversedMessage2()}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'abcdef'
    }
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  },
  /*  我们可以使用 methods 来替代 computed，效果上两个都是一样的，但是 computed 是基于它的依赖缓存，
   *  只有相关依赖发生改变时才会重新取值。而使用 methods ，在重新渲染的时候，函数总会重新调用执行。
   */
  methods: {
    reversedMessage2: function () {
      return this.message.split('').reverse().join('')
    }
  }
}
</script>
