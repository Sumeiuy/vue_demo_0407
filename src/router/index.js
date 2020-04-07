import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/Index'
import login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    meta: {
      auth: true
    },
    name: 'index',
    component: index
  }, {
    path: '/login',
    name: 'login',
    component: login
  }]
})
