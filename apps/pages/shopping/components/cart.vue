<template>
  <div class="cart flex">
    <div class="price-info flex flex1">
      <div class="circle">
        <i class="icon-cart"></i>
        <span class="number">1</span>
      </div>
      <span class="total"> 总计：¥<span class="price">8.9</span></span>
    </div>
    <div class="settle">去结算</div>
  </div>
</template>

<style lang="scss" scope rel="stylesheet/scss">
  @import "../../../../client/static/style/base/variables";
  .cart {
    width: 100%;
    height: 0.45rem;
    background: #fff;
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
  export default {
    name: 'cart',
    data() {
      return {}
    }
  }
</script>