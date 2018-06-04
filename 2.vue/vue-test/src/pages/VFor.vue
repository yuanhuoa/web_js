<template>
  <div>
    <p>1. v-for 指令：数组</p>
    <p v-for="item in nums" :key="item"> <span>显示{{item}}</span></p>
    <p>2. v-for 指令：对象</p>
    <!--默认  1.value,2.key,3.index-->
    <p v-for="(value, key, index) in obj" v-bind:key="key"> <span>显示{{index}}:{{key}}:{{value}}</span></p>
    <p>3. v-for 指令：数组对象</p>
    <!--默认  1.value,2.index-->
    <p v-for="(item, index) in arrays" v-bind:key="item.name"><span>显示{{index}}.{{item.name}}：{{item.sex}}</span></p>
    <p>4. v-for 指令：绑定id，绑定class</p>
    <p v-for="index in nums1" v-bind:key="index">
      <span v-bind:id="'id_' + index">数组index:{{index}}   id is : id_{{index}}</span></p>
    <p>4.v-for 迭代整数 <span v-for="n in 5" :key="n">{{n}},</span></p>
  </div>
</template>

<script>
export default {
  name: 'VFor',
  data () {
    return {
      nums: [1, 2, 3],
      nums1: [4, 5, 6],
      obj: {
        name: 'zhangsan',
        sex: 'man'
      },
      arrays: [{
        name: 'aaaaaa',
        sex: 'man'
      }, {
        name: 'bbbbbb',
        sex: 'man'
      }]
    }
  },
  methods: {

  },
  components: {

  }
}
</script>
<style>
  [id^='id_']{
    color: red;
  }
</style>
