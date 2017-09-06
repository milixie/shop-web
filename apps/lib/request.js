'use strict';

import axios from 'axios';

axios.interceptors.request.use(config => {
  if (config.headers) {
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
  } else {
    config.headers = {'X-Requested-With': 'XMLHttpRequest'};
  }
  return config;
}, error => Promise.reject(error));

axios.interceptors.response.use(response => {
  if (response.data.error_code && response.data.error_code !== 0) {
    return Promise.reject(response);
  }
  return response;
}, error => Promise.reject(error));

/**
 * Request
 *
 * @class Request
 */
class Request {
  constructor() {
    this.axios = axios;
  }
  /**
   * Request.get
   *
   * @param {String} url
   * @param {any} data
   * @param {Object} config
   * @returns
   *
   * @memberOf Request
   */
  get(url, data, config) {
    return this.axios.get(url, {params: data});
  }
  /**
   * Request.post
   *
   * @param {string} url
   * @param {any} data
   * @param {Object} config
   * @returns
   *
   * @memberOf Request
   */
  post(url, data, config) {
    return this.axios.post(url, data);
  }
}
export default new Request();