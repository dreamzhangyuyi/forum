import Vue from 'vue'
import Router from 'vue-router'
import _import from './_import'
import Home from '@/views/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: '/epidemic/',
  routes: [
    {
      path: '/epidemic',
      name: '新型肺炎疫情图',
      component: Home
    }
  ]
})
