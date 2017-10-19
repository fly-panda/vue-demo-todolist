import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Detail from '@/page/detail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
