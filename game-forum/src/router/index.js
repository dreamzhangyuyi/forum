import Vue from 'vue'
import Router from 'vue-router'
import _import from './_import'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: '首页',
    component: _import()
  }]
})
