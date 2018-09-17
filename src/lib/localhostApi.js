const restURL = "http://localhost:27017/flower_test";

export default {
  directCall: async (endpoint, body, method, headers = {}) => {
    const fetchParams = {
      headers: {
        'content-type': 'application/json',
        ...headers,
      },
      method,
    };

    if(method !== 'GET' || method === 'get') {
      fetchParams.body = JSON.stringify(body);
    }
    return fetch(restURL + endpoint, fetchParams)
    .then(async (responseBody) => {
      const _jsonBody = await responseBody.json();

      if (responseBody.status >= 300) {
          let _error = 'An error occured';
          if (_jsonBody.msg) _error = `${_error} : ${_jsonBody.msg}`;
          return Promise.reject(_error);
      }
      return _jsonBody;
    });
  },
};