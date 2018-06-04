<template>
  <div style="width: 1050px;">
    <h1>vue 的简单应用</h1>
    <vue-detail></vue-detail>
  </div>
</template>

<script>

import VueDetail from './pages/VueDetail'

export default {
  name: 'App',
  data () {
    return {}
  },
  methods: {},
  components: {
    VueDetail
  }
}
</script>
<style scoped>
  input{
    width: 100px;
    height: 30px;
    border-radius: 5px;
    background-color: #8ac007;
    border: 1px solid #8ac007;
    margin-right: 30px;
    cursor: pointer;
  }
  input:hover{
    opacity: 0.5;
  }
</style>
