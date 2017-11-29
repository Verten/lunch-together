import * as MutationTypes from '../mutation_type'
import Order from '../../leancloud/models/order'
import AV from '../../leancloud/storage'

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
    fetchOrders: ({ commit }, owner) => {
      return new Promise((resolve, reject) => {
        commit({
          type: MutationTypes.ORDER_REQUEST,
        })
        const OrderQuery = new AV.Query('OrderHistory')
        OrderQuery.descending('createdAt')
        if (owner === 'self') {
          OrderQuery.equalTo('owner', AV.User.current())
        }
        OrderQuery.include('owner')
        OrderQuery.find().then(
          orders => {
            commit({
              type: MutationTypes.FETCH_ORDER_LIST,
              orders,
            })
            resolve(orders)
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
    postOrder: ({ commit }, order) => {
      return new Promise((resolve, reject) => {
        commit({
          type: MutationTypes.ORDER_REQUEST,
        })
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
