'use strict';

function filter(Vue) {
  Vue.filter('cash', (value, keep0 = true, divide = 100, arr = 2, null_value = value) => {
    if (value && (typeof +value === 'number') && !isNaN(+value)) {
      return keep0 ? (value / divide).toFixed(arr) : (Math.round(value) / divide);
    } else if (value === 0) {
      return keep0 ? (value / divide).toFixed(arr) : (Math.round(value) / divide);
    }
    return null_value;
  });
  Vue.filter('toFixed', (value, arr = 2) => {
    if (value && !isNaN(+value) && (typeof +value === 'number')) {
      return value.toFixed(arr);
    }
    return value;
  });
  Vue.filter('unitTurn', (value) => {
    if (value && (typeof +value === 'number' && !isNaN(+value))) {
      if (value / 10000 >= 1) {
        return `${value / 10000}万`
      }
      return value;
    }
  });
}

export default filter;