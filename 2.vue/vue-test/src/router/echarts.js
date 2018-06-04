import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NotFound from '@/pages/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '*',
      component: NotFound,
      name: 'notfound',
      meta: {
        title: '404-页面丢了'
      }
    }
  ]
})
