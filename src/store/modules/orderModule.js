import * as MutationTypes from '../mutation_type'
import * as API from '../../api'
import { callAPI } from '../../utilities'

const orderModule = {
  state: {
    orders: [],
    order: null,
  },
  mutations: {
    [MutationTypes.POST_ORDER]: (state, payload) => {
      state.order = payload.order
    },
    [MutationTypes.FETCH_ORDER_LIST]: (state, payload) => {
      state.orders = payload.orders
    },
  },
  getters: {
    getOrders: state => {
      state.orders
    },
    getOrder: state => {
      state.order
    },
  },
  actions: {
    fetchOrders: ({ commit }) => {},
    postOrder: ({ commit }, order) => {},
  },
}

export default orderModule
