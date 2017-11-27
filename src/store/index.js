import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import mutations from './mutations'
import userModule from './modules/userModule'
import orderModule from './modules/orderModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'NEW ORDER',
    error: null,
    isProcessing: false,
  },
  modules: {
    userModule,
    orderModule,
  },
  mutations,
  getters,
})
