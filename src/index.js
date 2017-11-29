import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

import filter from './utilities/filter'

// setup Vue filter
filter(Vue)

const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})

export { app, router, store }
