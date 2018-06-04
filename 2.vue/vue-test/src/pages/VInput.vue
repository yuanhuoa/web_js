<template>
  <div>
    <h2>Vue 表单</h2>
    <div>
      <p>1.多个复选框：</p>
      <label><input type="checkbox" value="Baidu" v-model="checkedNames">Baidu</label>
      <label><input type="checkbox" value="Google" v-model="checkedNames">Google</label>
      <label><input type="checkbox" value="Taobao" v-model="checkedNames">taobao</label>
      <br>
      <span>选择的值为: {{ checkedNames }}</span>
    </div>
    <div>
      <p>2.单选框：</p>
      <label><input type="radio" value="Man" v-model="picked">Man</label>
      <label><input type="radio" value="Woman" v-model="picked">Woman</label>
      <br>
      <span>选中值为: {{ picked }}</span>
    </div>
    <div>
      <p>3.复选框全选：<label><input type="checkbox" v-model="chooseAll">全选（数组深度监控）</label></p>
      <label v-for="stu in student" :key="stu.name">
        <input type="checkbox" value=stu v-model="stu.choose">{{stu.name}}<br>
      </label>
      <span>选中值为: {{ chooseStu }}</span>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      checkedNames: ['Baidu'],
      picked: 'Man',
      student: [
        {
          name: 'zhangsan',
          choose: false
        }, {
          name: 'lisi',
          choose: false
        }, {
          name: 'wangwu',
          choose: false
        }],
      chooseStu: [],
      chooseAll: false
    }
  },
  watch: {
    student: {
      handler: function (newValue) {
        this.chooseStu = newValue.map(value => {
          if (value.choose) {
            return value.name
          }
        })
        this.chooseStu = this.chooseStu.filter((item) => {
          return item != null
        })
      },
      deep: true
    },
    chooseAll: function (val) {
      this.chooseStu = this.student.map((value, index, array) => {
        if (val) {
          array[index].choose = true
          return value.name
        } else {
          array[index].choose = false
        }
      })
      if (!val) this.chooseStu = []
    }
  },
  methods: {}
}
</script>
