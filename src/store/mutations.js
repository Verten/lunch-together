import * as MutationTypes from './mutation_type'

export default {
  [MutationTypes.ERROR]: (state, payload) => {
    state.error = payload.error
    state.isProcessing = false
  },
  [MutationTypes.ORDER_REQUEST || MutationTypes.USER_REQUEST]: state => {
    state.isProcessing = true
  },
  [MutationTypes.FETCH_USER_LIST || MutationTypes.FETCH_USER || MutationTypes.POST_USER || MutationTypes.POST_ORDER || MutationTypes.FETCH_ORDER_LIST]: state => {
    state.isProcessing = false
  },
  [MutationTypes.SELECT_TITLE]: (state, title) => {
    state.title = title
  },
}
