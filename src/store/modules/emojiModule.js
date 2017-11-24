import * as MutationTypes from "../mutation_type";
import * as API from "../../api";
import { callAPI } from "../../utilities";

const emojiModule = {
  state: {
    emojis: []
  },
  mutations: {
    [MutationTypes.EMOJI_REQUEST]: state => {
      state.emojis = [];
    },
    [MutationTypes.FETCH_EMOJI_LIST]: (state, payload) => {
      state.emojis = payload.emojis;
    }
  },
  getters: {
    getEmojis: state => {
      const _emojis = state.emojis;
      let emojis = [];
      for (let e in _emojis) {
        emojis.push(_emojis[e]);
      }
      return emojis;
    }
  },
  actions: {
    fetchEmojis: ({ commit }) => {
      const config = {
        method: "get",
        url: `${API.getEmojisUrl()}`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      };
      const onRequest = () => ({
        type: MutationTypes.EMOJI_REQUEST
      });
      const onRequestSuccess = emojis => {
        return {
          type: MutationTypes.FETCH_EMOJI_LIST,
          emojis
        };
      };
      const onRequestFailure = error => {
        return {
          type: MutationTypes.ERROR,
          error
        };
      };
      callAPI(
        { commit },
        config,
        onRequest,
        onRequestSuccess,
        onRequestFailure
      );
    }
  }
};

export default emojiModule;
