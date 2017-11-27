import * as MutationTypes from '../mutation_type'
import Order from '../../leancloud/models/order'

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
    postOrder: ({ commit }, order) => {
      return new Promise((resolve, reject) => {
        let savedOrder = new Order()
        for (const key in order) {
          savedOrder.set(`${key}`, order[key])
        }
        savedOrder.save().then(
          _order => {
            commit({
              type: MutationTypes.POST_ORDER,
              order,
            })
            resolve(_order)
          },
          error => {
            commit({
              type: MutationTypes.ERROR,
              error,
            })
            reject(error)
          }
        )
      })
    },
  },
}

export default orderModule
