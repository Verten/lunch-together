import * as MutationTypes from '../mutation_type'

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
      return state.orders
    },
    getOrder: state => {
      return state.order
    },
  },
  actions: {
    fetchOrders: ({ commit }) => {},
    postOrder: ({ commit }, order) => {},
  },
}

export default orderModule
