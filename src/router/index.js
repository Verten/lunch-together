import Vue from 'vue'
import VueRouter from 'vue-router'

import helloWorld from '../components/helloWorld.vue'
import emojisList from '../components/emojisList.vue'
import userList from '../components/userList.vue'
import userDetail from '../components/userDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'helloWorld',
    component: helloWorld,
  },
  {
    path: '/user',
    name: 'userList',
    component: userList,
  },
  {
    path: '/user/:name',
    name: 'userDetail',
    component: userDetail,
    props: true,
  },
  {
    path: '/emoji',
    name: 'emojisList',
    component: emojisList,
  },
]

export default new VueRouter({
  mode: 'history',
  routes,
})
