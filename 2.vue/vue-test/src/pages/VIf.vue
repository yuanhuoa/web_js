<template>
  <div>
    <p>1. v-if 指令：<input type="checkbox" v-model="seen"> <span v-if="seen">显示</span></p>
    <p>2. v-else 指令: 随机生成一个数字，判断是否大于0.5：<input type="button" v-model="randomNum" @click="changeNum()">
      <span v-if="randomNum>0.5">大于0.5</span>
      <span v-else>小于0.5</span>
    </p>
    <p>3. v-else-if 指令: <input type="text" v-model="type">
      <span v-if="type === 'A'">A</span>
      <span v-else-if="type === 'B'">B</span>
      <span v-else-if="type === 'C'">C</span>
      <span v-else>Not A/B/C</span>
    </p>
    <p>1. v-if 指令：<input type="checkbox" v-model="seen"> <span v-show="seen">显示</span></p>
  </div>
</template>

<script>

export default {
  name: 'VIf',
  data () {
    return {
      seen: true,
      randomNum: 0,
      randomNumIf: false,
      type: 'A'
    }
  },
  methods: {
    changeNum: function () {
      this.randomNum = Math.random().toFixed(2)
    }
  },
  components: {

  }
}
</script>
