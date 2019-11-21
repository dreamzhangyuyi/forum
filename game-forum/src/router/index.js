import Vue from 'vue'
import Router from 'vue-router'
import _import from './_import'
import Home from '@/views/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Home
    }
  ]
})
