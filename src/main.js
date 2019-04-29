import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

Vue.use(Router)

const routes = [
  // { path: '/', component: NAME },
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
