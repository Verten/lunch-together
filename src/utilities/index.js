import axios from "axios";

const responseJSON = response => {
  return response.data;
};

/**
 * @param {*} config
 * @param {*} onRequest
 * @param {*} onRequestSuccess
 * @param {*} onRequestFailure
 */
export const callAPI = (
  context,
  config,
  onRequest,
  onRequestSuccess,
  onRequestFailure
) => {
  const { commit } = context;
  commit(onRequest());
  axios(config)
    .then(responseJSON)
    .then(json => {
      commit(onRequestSuccess(json));
    })
    .catch(error => {
      console.debug(`error with api:${config.url}`, error);
      const response = error.response;
      if (response === undefined) {
        commit(onRequestFailure(error));
      } else {
        error.status = response.status;
        error.statusText = response.statusText;
        Object.assign(error, response.data);
        commit(onRequestFailure(error));
      }
    });
};
