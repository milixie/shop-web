'use strict';

import filter from './filter';

const config = {
  install(Vue) {
    filter(Vue);
  }
};

export default config;