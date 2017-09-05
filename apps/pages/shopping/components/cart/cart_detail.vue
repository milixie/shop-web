<template>
  <transition name="trans">
    <div class="cart-detail vflex">
      <div class="head-top flex">
        <span class="flex1 cart-line"> 购物车 </span>
        <span class="flex1 text-right" @click="clear"><i class="icon-dustbin"></i>清空</span>
      </div>
      <div class="detail scroll-y">
        <div v-for="item in cart" :key="item.id" class="group flex">
          <span class="flex1">{{item.name}}</span>
          <span class="flex1 price">¥{{item.price | cash}}</span>
          <picker :number="item.amount" @input="count => cartHandler(item, count)"/>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" rel="stylesheet/scss">
  @import "../../../../../client/static/style/base/variables";

  .cart-detail {
    width: 100%;
    transform: translate3d(0, -100%, 0);
    background: #fff;
    position: absolute;
    top: -0.45rem;
    z-index: 501;
    border-top: 0.01rem solid #eee;
    border-bottom: 0.01rem solid #eee;
    .head-top {
      padding: 0.1rem;
      border-bottom: 0.01rem solid #f6f6f6;
      .cart-line {
        position: relative;
        padding-left: 0.1rem;
        &:before {
          position: absolute;
          left: 0;
          top: 0;
          width: 0.05rem;
          height: 100%;
          background: $main-color;
          content: '';
        }
      }
    }
    .detail {
      padding: 0 0.1rem;
      max-height: 3rem;
      .group {
        padding: 0.15rem 0.1rem;
        align-items: center;
        border-bottom: 0.01rem solid #f6f6f6;
        &:last-child {
          border-bottom: none;
        }
        .price {
          color: $main-color;
          font-size: 0.2rem;
        }
      }
    }
  }

  .trans-enter-active, .trans-leave-active {
    transition: transform 0.3s;
  }

  .trans-enter, .trans-leave-to {
    transform: translate3d(0, 0, 0);
  }
</style>

<script>
  import {mapState, mapMutations} from 'vuex';
  import Picker from './../../../../common/picker.vue';
  import Popup from './../../../../common/popup.vue';
  export default {
    name: 'cart_detail',
    data() {
      return {}
    },
    components: {Picker, Popup},
    computed: {
      ...mapState(['cart'])
    },
    methods: {
      ...mapMutations(['updateCart', 'addToCart', 'removeFromCart', 'clearCart']),
      cartHandler(item, count) {
        if (count === 1) {
          const find_cart = this.cart.find(sub_cart => sub_cart.id === item.id);
          if (find_cart) {
            this.updateCart({item, count});
          } else {
            this.addToCart(item);
          }
        } else if (count === 0) {
          this.removeFromCart(item);
        } else if (count > 1) {
          this.updateCart({item, count});
        }
      },
      clear() {
        this.clearCart();
      }
    }
  }
</script>