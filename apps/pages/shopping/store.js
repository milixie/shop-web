import Vue from 'vue';
import Vuex from 'vuex';
import request from './../../lib/request';
import _ from 'lodash';
import pinyin from 'pinyin';

Vue.use(Vuex);

const options = {
  state: {
    home_page: {},
    store_info: {},
    user: {},
    activity: {},
    category: [],
    special_product: [],
    cart: [],
    current_id: -1,
    search_val: ''
  },
  getters: {
    category_show: state => {
      const category = _.cloneDeep(state.category);
      const cart = state.cart;
      if (state.special_product && state.special_product.length > 0) {
        category.unshift({
          idx: -1,
          name: '今日特惠',
          content: state.special_product
        });
      }
      category.map(item => {
        item.content.map(sub_item => {
          const spell_full_arr = pinyin(sub_item.name, {style: pinyin.STYLE_NORMAL});
          const spell_initials_arr = pinyin(sub_item.name, {style: pinyin.STYLE_FIRST_LETTER});
          let spell_full = '';
          spell_full_arr.forEach(spell => {
            spell_full += spell[0];
          });
          let spell_initials = '';
          spell_initials_arr.forEach(letter => {
            spell_initials += letter[0];
          });
          sub_item.spell_full = spell_full;
          sub_item.spell_initials = spell_initials;
          const find_cart = cart.find(sub_cart => sub_cart.id === sub_item.id);
          if (find_cart) {
            sub_item.amount = find_cart.amount;
          } else {
            Object.assign(sub_item, {amount: 0});
          }
          return sub_item;
        });
        return item;
      });
      return category;
    }
  },
  mutations: {
    addToCart(state, item, count) {
      item.amount = 1;
      state.cart.push(item);
    },
    removeFromCart(state, item) {
      item.amount = 0;
      const index = state.cart.findIndex(sub_cart => sub_cart.id === item.id);
      state.cart.splice(index, 1);
    },
    updateCart(state, preload) {
      preload.item.amount = preload.count;
      const index = state.cart.findIndex(sub_cart => sub_cart.id === preload.item.id);
      state.cart[index].amount = preload.count;
    },
    clearCart(state) {
      state.cart = [];
    },
    updateId(state, id) {
      state.current_id = id;
    },
    searchInput(state, val) {
      state.search_val = val;
    }
  },
  actions: {
    async placeOrder({state}) {
      const url = '/order';
      const params = {
        cart: state.cart
      };
      const {data} = await request.post(url, params);
      if (data && data.status === 'ok') {

      }
    }
  },
  plugin: {}
};

const store = new Vuex.Store(options);
store.$ssrInstance = () => new Vuex.Store(options);
export default store;