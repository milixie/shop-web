<template>
  <div class="goods-list scroll-y flex1 vflex" :class="{'block': cart.length > 0}">
    <div class="group" v-for="item in group" :key="item.idx" v-show="current_id === item.idx">
      <div class="title">{{item.name}}</div>
      <div class="list">
        <div class="group-item flex"
             v-for="sub_item in item.content"
             :key="sub_item.name">
          <img :src="sub_item.head_img" alt="" class="img">
          <div class="content flex1">
            <div class="name">{{sub_item.name}}</div>
            <div class="detail">月销量{{sub_item.sale}} | 好评率{{sub_item.comment_rate}}</div>
            <div class="price"><span>￥</span>{{sub_item.price | cash}}</div>
            <div class="select">
              <picker :number="sub_item.amount" @getPos="getIcoPos" @input="count => cartHandler(sub_item, count)"/>
            </div>
          </div>
        </div>
      </div>
      <div class="alert"> 没有更多啦 </div>
    </div>
    <svg-ico :balls="balls" :move_balls="move_balls"/>
  </div>
</template>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "../../../../../client/static/style/base/variables";

  .goods-list {
    &.block{
      padding-bottom: 0.45rem;
    }
    .group {
      .title {
        background: #f6f6f6;
        padding: 0.08rem 0.1rem;
      }
      .list {
        background: #fff;
        .group-item {
          padding: 0.1rem;
          .img {
            width: 0.6rem;
            height: 0.6rem;
          }
          .content {
            position: relative;
            padding-left: 0.1rem;
            .name {
              font-size: 0.16rem;
              margin-bottom: 0.05rem;
            }
            .detail {
              font-size: 0.12rem;
              color: #ccc;
              margin-bottom: 0.05rem;
            }
            .price {
              color: $main-color;
              font-size: 0.2rem;
              span {
                font-size: 0.12rem;
              }
            }
            .select {
              position: absolute;
              right: 0;
              bottom: 0;
            }
          }
        }
      }
    }
    .alert {
      padding: 0.1rem;
      text-align: center;
      font-size: 0.12rem;
      color: #aaa;
    }
  }
</style>

<script>
  import _ from 'lodash';
  import {mapState, mapMutations} from 'vuex';
  import Picker from '../../../../common/picker.vue';
  import SvgIco from '../svg.vue';
  export default {
    name: 'goods-list',
    props: ['current_id'],
    data() {
      return {
        balls: [{
          show: false,
          id: 0
        }, {
          show: false,
          id: 1
        }, {
          show: false,
          id: 2
        }, {
          show: false,
          id: 3
        }],
        move_balls: []
      }
    },
    computed: {
      ...mapState(['cart', 'category', 'current_id']),
      group() {
        return this.$store.getters.category_show;
      }
    },
    methods: {
      ...mapMutations(['updateCart', 'addToCart', 'removeFromCart']),
      getIcoPos(el) {
        this.balls.forEach(item => {
          if (!item.show) {
            item.el = el;
            item.show = true;
            this.move_balls.push(item);
          }
        });
      },
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
      }
    },
    components: {Picker, SvgIco}
  }
</script>