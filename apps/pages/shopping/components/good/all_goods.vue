<template>
  <div class="goods-list scroll-y flex1 vflex" :class="{'block': cart.length > 0}">
    <div class="group" v-for="item in group" :key="item.idx">
      <div class="list">
        <div class="group-item flex" @click.prevent="viewDetail">
          <img :src="item.head_img" alt="" class="img">
          <div class="content flex1">
            <div class="name">{{item.name}}</div>
            <div class="detail">月销量{{item.sale}} | 好评率{{item.comment_rate}}</div>
            <div class="price"><span>￥</span>{{item.price | cash}}</div>
            <div class="select">
              <picker :number="item.amount" @getPos="getIcoPos" @input="count => cartHandler(item, count)"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="alert" v-if="group.length > 0"> 没有更多啦 </div>
    <div class="alert" v-else> 没找到相关商品 </div>
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
      ...mapState(['cart', 'category', 'current_id', 'search_val']),
      group() {
        const group = _.cloneDeep(this.$store.getters.category_show);
        const total_shop = [];
        group.forEach(item => {
          item.content.forEach(sub_item => {
            total_shop.push(sub_item);
          })
        });
        const result = total_shop.filter(item => {
          const searchRegex = new RegExp(this.search_val, 'i');
          return searchRegex.test(item.name) || searchRegex.test(item.spell_full) || searchRegex.test(item.spell_initials);
        });
        return result;
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
      },
      viewDetail() {
        this.$router.push({name: 'detail'});
      }
    },
    components: {Picker, SvgIco}
  }
</script>