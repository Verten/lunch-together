import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})

export { app, router, store }
