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
      return new Promise((resolve, reject) => {
        console.debug('login with user: ', user)
        AV.User.logIn(user.username, user.password).then(
          loginedUser => {
            console.debug('success logined user,', loginedUser)
            commit({
              type: MutationTypes.FETCH_USER,
              user,
            })
            resolve(loginedUser)
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
    postUser: ({ commit }, user) => {
      return new Promise((resolve, reject) => {
        console.debug('registration with user: ', user)
        let loginUser = new AV.User()
        for (let key in user) {
          loginUser.set(`${key}`, user[key])
        }
        loginUser.signUp().then(
          registedUser => {
            console.debug('success registration user,', registedUser)
            commit({
              type: MutationTypes.POST_USER,
              user,
            })
            resolve(registedUser)
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

export default userModule
