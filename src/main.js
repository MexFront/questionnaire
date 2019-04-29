import 'normalize.css'

import('@/scss/style.scss')
/* eslint-disable import/first */

import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import mainpage from './components/Mainpage.vue'

Vue.use(Router)

const routes = [
  { path: '/', component: mainpage },
]

const router = new Router({
  routes,
  mode: 'history',
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
