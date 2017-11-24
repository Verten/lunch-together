import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '../views/user/login.vue'
import registration from '../views/user/registration.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login,
  },
  {
    path: '/registration',
    name: 'registration',
    component: registration,
  },
]

export default new VueRouter({
  mode: 'history',
  routes,
})
