import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import login from '../views/user/login.vue'
import registration from '../views/user/registration.vue'
import orderHome from '../views/order/home.vue'
import initOrder from '../views/order/initOrder.vue'
import listOrder from '../views/order/listOrder.vue'

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
  {
    path: '/order',
    name: 'orderHome',
    component: orderHome,
    children: [
      {
        path: '',
        name: 'initOrder',
        component: initOrder,
      },
      {
        path: 'list',
        name: 'listOrder',
        component: listOrder,
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next()
    } else {
      next({
        path: '/',
        query: {
          redirect: to.fullPath,
        },
      })
    }
  } else {
    next()
  }
})

export default router
