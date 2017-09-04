<template>
  <div class="goods-list scroll-y flex1 vflex">
    <div class="group">
      <div class="title">面膜</div>
      <div class="list">
        <div class="group-item flex">
          <img class="img" src="http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/15.jpg" alt="">
          <div class="content flex1">
            <div class="name">鲜补水面膜</div>
            <div class="detail">月销量234 | 好评率98%</div>
            <div class="price"><span>￥</span>96.9</div>
            <div class="select">
              <picker :number="n" @getPos="getIcoPos" @input="changeNumber"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <svg-ico :balls="balls" :move_balls="move_balls"/>
  </div>
</template>

<style lang="scss" scope rel="stylesheet/scss">
  @import "../../../../../client/static/style/base/variables";

  .goods-list {
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
  }
</style>

<script>
  import Picker from '../../../../common/picker.vue'
  import SvgIco from '../svg.vue'
  export default {
    name: 'goods-list',
    data() {
      return {
        n: 1,
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
    methods: {
      getIcoPos(el) {
        this.balls.forEach(item => {
          if (!item.show) {
            item.el = el;
            item.show = true;
            this.move_balls.push(item);
          }
        });
      },
      changeNumber(count) {
        this.n = count;
      }
    },
    components: {Picker, SvgIco}
  }
</script>