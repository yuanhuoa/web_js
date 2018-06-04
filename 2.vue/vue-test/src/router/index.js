import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VueFirst from '@/pages/VueFirst'
import Run from '@/pages/sport/run'
import Basketball from '@/pages/sport/basketball'
import VIf from '@/pages/VIf'
import VFor from '@/pages/VFor'
import Computed from '@/pages/Computed'
import Listen from '@/pages/Listen'
import Class from '@/pages/Class'
import VOn from '@/pages/VOn'
import VInput from '@/pages/VInput'
import VComponent from '@/pages/VComponent'
import Vself from '@/pages/Vself'
import Detail from '@/components/Detail'
import User from '@/pages/User'
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
      path: '/vuefirst',
      name: 'VueFirst',
      component: VueFirst
    },
    {
      path: '/vIf',
      name: 'VIf',
      component: VIf
    },
    {
      path: '/vFor',
      name: 'VFor',
      component: VFor
    },
    {
      path: '/computed',
      name: 'Computed',
      component: Computed
    },
    {
      path: '/listen',
      name: 'Listen',
      component: Listen
    },
    {
      path: '/class',
      name: 'Class',
      component: Class
    },
    {
      path: '/vOn',
      name: 'VOn',
      component: VOn
    },
    {
      path: '/vInput',
      name: 'VInput',
      component: VInput
    },
    {
      path: '/vComponent',
      name: 'VComponent',
      component: VComponent
    },
    {
      path: '/vself',
      name: 'Vself',
      component: Vself
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User,
      // 子路由
      children: [
        {
          path: 'run',
          component: Run
        },
        {
          path: 'basketball',
          component: Basketball
        }
      ]
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
