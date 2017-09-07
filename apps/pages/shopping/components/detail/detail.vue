<template>
  <div class="detail-shop scroll-y">
    <div class="slide">
      <img src="http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/1.jpg" alt="">
    </div>
    <div class="price-info flex">
      <div class="price flex1">
        ¥<span>79.90</span>
      </div>
      <div class="cart">
        <div class="add">加入购物车</div>
      </div>
    </div>
    <div class="other">
      <div class="intro">
        补水天使俱乐部成立于2015年3月12号，由腾讯、携程领头投资天使轮1000万美金，一经推出就受到广大观众的喜爱，尤其是深受每天忙于工作的美女白领的喜爱，同时，补水天使俱乐部也受到了广大男士的关注，因为我们推出了基于男士肌肤专门补水的特效功能
      </div>
      <div class="comment">
        <p class="title"> 评论 </p>
        <ul>
          <li v-for="n in number" :key="n">
            <p>王丽丽</p>
            <span> 特别好用呢特别好用呢特别好用呢特别好用呢特别好用呢特别好用呢特别好用呢特别好用呢特别好用呢特别好用呢特别好用呢特别好用呢特别好用呢特别好用呢</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" rel="stylesheet/scss">
  @import "../../../../../client/static/style/base/variables";
  .detail-shop {
    width: 100%;
    height: 100%;
    .slide {
      height: 2rem;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .price-info {
      padding: 0.1rem;
      background: $main-color;
      color: #fff;
      .price {
        span {
          font-size: 0.26rem;
        }
      }
      .cart {
        .add {
          padding: 0.1rem;
          background: #fff;
          border-radius: 0.04rem;
          color: $main-color;
        }
      }
    }
    .other {
      padding: 0.1rem;
      .intro {
        line-height: 1.5em;
        text-indent: 2em;
      }
      .comment {
        margin-top: 0.2rem;
        .title {
          font-size: 0.16rem;
          color: $main-color;
        }
        li {
          border-bottom: 0.01rem solid #eee;
          padding: 0.15rem;
          line-height: 1.5em;
          background: #fff;
          margin: 0.1rem 0;
          p {
            color: $main-color;
            font-size: 0.15rem;
            margin-bottom: 0.1rem;
          }
          span {
            text-indent: 2em;
            display: inline-block;
          }
        }
      }
    }
  }
</style>

<script>
  import {mapState} from 'vuex';
  export default {
    data() {
      return {
        number: 5
      }
    },
    computed: {
    },
    methods: {
    },
  }
</script>