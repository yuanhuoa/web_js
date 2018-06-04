<template>
  <div>
    <div class="container">
      <ul>
        <!-- router-link 定义点击后导航到哪个路径下 -->
        <li v-for="(item, index) in routers" v-bind:key="item.name" v-on:click="changeColor(index)">
          <router-link :routers="routers" v-bind:id="'list-' + index" v-bind:to=item.router
                       v-bind:class="{ 'container-a':true,'container-a-click':item.checked }">{{item.name}}
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 对应的组件内容渲染到router-view中 -->
    <div class="contain-main">
      <router-view></router-view>
    </div>
    <div style="clear: both;"></div>
  </div>
</template>

<script>

import Storage from '../components/localstorage'

export default {
  components: {
    Storage
  },
  created () {
    this.toWhere()
  },
  data () {
    return {
      routers: [
        {
          name: 'ECharts First',
          router: '/',
          checked: false
        }, {
          name: 'vue 起步',
          router: '/',
          checked: false
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    changeColor: function (index) {
      this.routers[index].checked = true
      var preIndex = Storage.fetchEchartsNum()
      if (preIndex != null) {
        if (index === preIndex) return
        this.routers[preIndex].checked = false
      }
      Storage.saveEchartsNum(index)
    },
    toWhere: function (froms) {
      // 首先查询url,没有404
      var path = this.$route.path
      var router = this.routers.map(function (value) {
        return value['router']
      })
      var index = router.indexOf(path)
      if (index === -1) {
        // 404
      } else {
        if (froms) this.routers[router.indexOf(froms.path)].checked = false
        this.routers[index].checked = true
        this.$router.push({path: router[index].router}) // 路由跳转
      }
    }
  },
  watch: {
    $route (to, froms) {
      this.toWhere(froms)
    }
  }
}
</script>
