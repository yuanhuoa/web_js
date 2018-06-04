<template>
  <div>
    <p>welcome user</p>
    <p>
      <!-- router-link 的to属性要注意，路由是先进入到home,然后才进入相应的子路由如 phone,
            所以书写时要把 home 带上 -->
      <router-link to="/user/sort/run">跑步</router-link>
      <router-link to="/user/sort/basketball">打球</router-link>
      <router-view></router-view>
    </p>
    <div>---------https://github.com/hilongjw/vue-vueRouter-webpack-example.git-------------</div>
    <p>vue.js实例项目:  https://www.zhihu.com/question/37984203</p>
  </div>
</template>

<script>
export default {
  components: {

  }
}
</script>
