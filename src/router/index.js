import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import login from '../views/user/login.vue'
// import registration from '../views/user/registration.vue'
// import orderHome from '../views/order/home.vue'
import initOrder from '../views/order/initOrder.vue'
import listOrder from '../views/order/listOrder.vue'
import AV from '../leancloud/storage'

const orderHome = () => import(/* webpackChunkName: "order" */ '../views/order/home.vue')
const registration = () => import(/* webpackChunkName: "registration" */ '../views/user/registration.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login,
    meta: {
      checkAlreadyLogined: true,
    },
  },
  {
    path: '/registration',
    name: 'registration',
    component: registration,
  },
  {
    path: '/order',
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
    if (AV.User.current()) {
      // store.getters.isAuthenticated
      next()
      store.commit({
        type: 'FETCH_USER',
        user: AV.User.current(),
      })
    } else {
      next({
        path: '/',
        query: {
          redirect: to.fullPath,
        },
      })
    }
  } else if (to.matched.some(record => record.meta.checkAlreadyLogined)) {
    if (AV.User.current()) {
      next({
        path: '/order',
      })
      store.commit({
        type: 'FETCH_USER',
        user: AV.User.current(),
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
