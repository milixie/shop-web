<template>
  <div class="shop vflex">
    <head-bar/>
    <search/>
    <tab :is_active="is_active" @switch="switchTab" v-if="!search_val"/>
    <home v-if="is_active === 0 && !search_val"/>
    <goods v-if="is_active === 1 && !search_val"/>
    <store v-if="is_active === 2 && !search_val"/>
    <div class="scroll-y search-result flex1" v-if="search_val">
      <all-goods/>
    </div>
    <cart v-if="((is_active === 1 && !search_val) || search_val) && cart && cart.length > 0"/>
  </div>
</template>

<style lang="scss" rel="stylesheet/scss">
  .shop {
    width: 100%;
    height: 100%;
  }
</style>

<script>
  import {mapState} from 'vuex';
  import HeadBar from './head_bar.vue';
  import Search from './search.vue';
  import Tab from './tab.vue';
  import Home from './home.vue';
  import Goods from './goods.vue';
  import Store from './store.vue';
  import Cart from './cart/cart.vue';
  import CartDetail from './cart/cart_detail.vue';
  import Popup from '../../../common/popup.vue';
  import AllGoods from './good/all_goods.vue';
  export default {
    data() {
      return {
        is_active: 0
      }
    },
    computed: {
      ...mapState(['cart', 'search_val'])
    },
    methods: {
      switchTab(index) {
        this.is_active = index;
      }
    },
    components: {HeadBar, Search, Tab, Home, Goods, Store, Cart, CartDetail, Popup, AllGoods}
  }
</script>