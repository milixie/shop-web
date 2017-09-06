<template>
  <div class="cart-wrap">
    <div class="cart flex">
      <div class="price-info flex flex1" @click="CartDetailToggle">
        <div class="circle">
          <i class="icon-cart"></i>
          <span class="number">{{total.total_amount}}</span>
        </div>
        <span class="total"> 总计：¥<span class="price">{{total.total_price | cash}}</span></span>
      </div>
      <div class="settle" @click="place">去结算</div>
    </div>
    <cart-detail v-if="show"/>
    <popup :show="show" @closeMask="closeMask"></popup>
  </div>

</template>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "../../../../../client/static/style/base/variables";

  .cart-wrap {
    position: relative;
    left: 0;
    top: 0;
  }

  .cart {
    width: 100%;
    height: 0.45rem;
    background: #fff;
    position: fixed;
    bottom: 0;
    z-index: 502;
    .price-info {
      line-height: 0.35rem;
      .circle {
        position: relative;
        left: 0.08rem;
        top: -0.08rem;
        width: 0.45rem;
        height: 0.45rem;
        line-height: 0.45rem;
        text-align: center;
        background: $instead-color;
        border-radius: 50%;
        i {
          color: #fff;
          font-size: 0.24rem;
        }
        .number {
          position: absolute;
          right: -0.04rem;
          top: -0.04rem;
          width: 0.2rem;
          height: 0.2rem;
          line-height: 0.2rem;
          text-align: center;
          background: $main-color;
          border-radius: 50%;
          color: #fff;
        }
      }
      .total {
        margin-left: 0.2rem;
        .price {
          color: $main-color;
          font-size: 0.24rem;
          position: relative;
          top: 0.02rem;
          left: 0.04rem;
        }
      }
    }
    .settle {
      width: 1.2rem;
      line-height: 0.44rem;
      text-align: center;
      background: $main-color;
      color: #fff;
    }
  }
</style>

<script>
  import {mapState, mapActions} from 'vuex';
  import Popup from './../../../../common/popup.vue';
  import CartDetail from './cart_detail.vue';
  export default {
    name: 'cart',
    data() {
      return {
        show: false
      }
    },
    components: {CartDetail, Popup},
    computed: {
      ...mapState(['cart']),
      total() {
        const cart = this.cart;
        let total_amount = 0;
        let total_price = 0;
        cart.forEach(item => {
          total_amount += item.amount;
          total_price += item.amount * item.price;
        });
        return {
          total_amount,
          total_price
        };
      }
    },
    methods: {
      ...mapActions(['placeOrder']),
      CartDetailToggle() {
        this.show = !this.show;
      },
      closeMask() {
        this.show = false;
      },
      place() {
        this.placeOrder();
      }
    }
  }
</script>