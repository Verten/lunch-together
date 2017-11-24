import * as MutationTypes from '../mutation_type'
import * as API from '../../api'
import { callAPI } from '../../utilities'

const userModule = {
  state: {
    user: null,
    users: [],
  },
  mutations: {
    [MutationTypes.USER_REQUEST]: state => {
      state.user = null
      state.users = []
    },
    [MutationTypes.FETCH_USER_LIST]: (state, payload) => {
      state.users = payload.users
    },
    [MutationTypes.FETCH_USER]: (state, payload) => {
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
    fetchUsers: ({ commit }) => {
      const config = {
        method: 'get',
        url: `${API.getUsersUrl()}`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
      const onRequest = () => ({
        type: MutationTypes.USER_REQUEST,
      })
      const onRequestSuccess = users => {
        return {
          type: MutationTypes.FETCH_USER_LIST,
          users,
        }
      }
      const onRequestFailure = error => {
        return {
          type: MutationTypes.ERROR,
          error,
        }
      }
      callAPI({ commit }, config, onRequest, onRequestSuccess, onRequestFailure)
    },
    fetchUser: ({ commit }, name) => {
      const config = {
        method: 'get',
        url: `${API.getUsersUrl()}/${name}`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
      const onRequest = () => ({
        type: MutationTypes.USER_REQUEST,
      })
      const onRequestSuccess = user => {
        return {
          type: MutationTypes.FETCH_USER,
          user,
        }
      }
      const onRequestFailure = error => {
        return {
          type: MutationTypes.ERROR,
          error,
        }
      }
      callAPI({ commit }, config, onRequest, onRequestSuccess, onRequestFailure)
    },
  },
}

export default userModule
