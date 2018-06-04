<template>
  <div>
    <h2>vue 样式绑定</h2>
    <p :class="{ active: isActive }"><label>1.改变class<input type="checkbox" v-model="isActive"></label></p>
    <p :class="{ active: isActive, changeColor: changeColor }"><label>2.后定义class覆盖前class<input type="checkbox" v-model="changeColor"></label></p>
    <p :class="classObj">3.class直接绑定数据里的一个对象data obj</p>
    <p :class="classObject">4.class绑定返回对象的计算属性computed</p>
    <p :class="[activeClass, changeColorClass]">5.class数组定义</p>
    <p :class="[activeClass, changeColor ? changeColorClass : '']">6.class数组定义 + 三目运算</p>
    <p :style="{ color: activeColor, fontSize: fontSize + 'px' }">5.在 v-bind:style 直接设置样式，-变成驼峰</p>
    <p :style="styleObject">5.在 v-bind:style 直接设置样式：对象</p>
    <p :style="[baseStyles, overridingStyles]">5.在 v-bind:style 直接设置样式：数组</p>

  </div>
</template>

<script>

export default {
  data () {
    return {
      isActive: true,
      changeColor: false,
      classObj: {
        active: true,
        changeColor: false
      },
      error: null,
      activeClass: 'active',
      changeColorClass: 'changeColor',
      activeColor: 'green',
      fontSize: 15,
      styleObject: {
        color: 'green',
        fontSize: '18px'
      },
      baseStyles: {
        color: 'green',
        fontSize: '20px'
      },
      overridingStyles: {
        'font-weight': 'bold'
      }
    }
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        changeColor: this.error && this.error.type === 'fatal'
      }
    }
  },
  methods: {}
}
</script>
<style scoped>
  p{
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }
  .active{
    background-color: #e3e2e2;
    color: red;
  }
  .changeColor{
    color: #000;
  }
</style>
