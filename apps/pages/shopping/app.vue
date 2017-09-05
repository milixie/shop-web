<template>
  <div id="app">
    <div class="shop vflex">
      <head-bar/>
      <search/>
      <tab :is_active="is_active" @switch="switchTab"/>
      <home v-if="is_active === 0"/>
      <goods v-if="is_active === 1"/>
      <store v-if="is_active === 2"/>
      <cart v-if="is_active === 1 && cart && cart.length > 0"/>
    </div>
  </div>
</template>

<style lang="scss" rel="stylesheet/scss">
  @import "../../../client/static/style/common.scss";

  #app {
    width: 100%;
    height: 100%;
  }

  .shop {
    width: 100%;
    height: 100%;
  }
</style>

<script>
  import store from './store';
  import {mapState} from 'vuex';
  import HeadBar from './components/head_bar.vue';
  import Search from './components/search.vue';
  import Tab from './components/tab.vue';
  import Home from './components/home.vue';
  import Goods from './components/goods.vue';
  import Store from './components/store.vue';
  import Cart from './components/cart/cart.vue';
  import CartDetail from './components/cart/cart_detail.vue';
  import Popup from './../../common/popup.vue';
  export default {
    data() {
      return {
        is_active: 0
      }
    },
    store,
    head: {
      title: '购物车',
      script: [{src: '/assets/shopping.js', defer: true}],
      link: [{href: '/assets/css/shopping.css', rel: 'stylesheet'}]
    },
    computed: {
      ...mapState(['cart'])
    },
    methods: {
      switchTab(index) {
        this.is_active = index;
      }
    },
    components: {HeadBar, Search, Tab, Home, Goods, Store, Cart, CartDetail, Popup}
  }
</script>