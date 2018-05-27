import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import mainBody from '@/pages/homebody'
import myMusic from '@/pages/myMusic'

import songinfo from '@/pages/songinfo'
Vue.use(Router)
export default new Router({
  name: '#app',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [{
        path: '/',
        redirect: '/mainBody'
      },
      {
        path: '/mainBody',
        name: 'mainBody',
        component: mainBody
      },
      {
        path: '/myMusic',
        name: 'myMusic',
        component: myMusic
      },
      {
        path: '/songinfo',
        name: 'songinfo',
        component: songinfo
      }]
    }
  ]
})
