import * as MutationTypes from '../mutation_type'
import * as API from '../../api'
import { callAPI } from '../../utilities'
import AV from '../../leancloud/storage'

const userModule = {
  state: {
    user: null,
    users: [],
  },
  mutations: {
    [MutationTypes.FETCH_USER_LIST]: (state, payload) => {
      state.users = payload.users
    },
    [MutationTypes.FETCH_USER]: (state, payload) => {
      state.user = payload.user
    },
    [MutationTypes.POST_USER]: (state, payload) => {
      state.user = payload.user
    },
  },
  getters: {
    getUsers: state => {
      return state.users
    },
    getUser: state => {
      return state.user
    },
  },
  actions: {
    fetchUsers: ({ commit }) => {},
    fetchUser: ({ commit }, user) => {
      console.debug('login with user: ', user)
    },
    postUser: ({ commit }, user) => {
      console.debug('registration with user: ', user)
      let UserObject = AV.Object.extend('Order_User')
      let userObject = new UserObject()
      userObject.set('username', user.username)
      userObject.set('password', user.password)
      userObject.set('email', user.password)
      userObject.save().then(
        _user => {
          console.debug('success registration user,', _user)
          commit({
            type: MutationTypes.POST_USER,
            user,
          })
        },
        error => {
          console.error(error)
          commit({
            type: MutationTypes.ERROR,
            error,
          })
        }
      )
    },
  },
}

export default userModule
