import * as MutationTypes from './mutation_type'

export default {
  [MutationTypes.ERROR]: (state, payload) => {
    state.error = payload.error
    state.isProcessing = false
  },
  [MutationTypes.ORDER_REQUEST]: state => {
    state.isProcessing = true
  },
  [MutationTypes.USER_REQUEST]: state => {
    state.isProcessing = true
  },
  [MutationTypes.FETCH_USER_LIST]: state => {
    state.isProcessing = false
  },
  [MutationTypes.FETCH_USER]: state => {
    state.isProcessing = false
  },
  [MutationTypes.POST_USER]: state => {
    state.isProcessing = false
  },
  [MutationTypes.POST_ORDER]: state => {
    state.isProcessing = false
  },
  [MutationTypes.FETCH_ORDER_LIST]: state => {
    state.isProcessing = false
  },
  [MutationTypes.SELECT_TITLE]: (state, title) => {
    state.title = title
  },
}
