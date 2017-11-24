import * as MutationTypes from "./mutation_type";

export default {
  [MutationTypes.ERROR]: (state, payload) => {
    state.error = payload.error;
    state.isProcessing = false;
  },
  [MutationTypes.EMOJI_REQUEST]: state => {
    state.isProcessing = true;
  },
  [MutationTypes.USER_REQUEST]: state => {
    state.isProcessing = true;
  },
  [MutationTypes.FETCH_USER_LIST]: state => {
    state.isProcessing = false;
  },
  [MutationTypes.FETCH_USER]: state => {
    state.isProcessing = false;
  },
  [MutationTypes.FETCH_EMOJI_LIST]: state => {
    state.isProcessing = false;
  }
};
