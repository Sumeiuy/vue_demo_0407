// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

import './assets/style/reset.css'

import axios from 'axios'
// 引入mockjs
require('./mock/index')

// axios引入全局
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  //根据字段判断是否路由过滤
  if (to.matched.some(record => record.meta.auth)) {
    if (getToken() !== null) {
      next()
    } else {
      //防止无限循环
      if (to.name === 'login') {
        next();
        return
      }
      next({
        path: '/login',
      });
    }
  } else {
    next() //若点击的是不需要验证的页面,则进行正常的路由跳转
  }
});
