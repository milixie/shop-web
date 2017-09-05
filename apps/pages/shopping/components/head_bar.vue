<template>
  <div class="head vflex">
    <img :src="store_info.bg" alt="" class="bg">
    <div class="content flex flex1">
      <div class="header">
        <img :src="store_info.logo" alt="">
      </div>
      <div class="info flex1">
        <div class="title">{{store_info.name}}</div>
        <div class="detail">{{store_info.free_mail}}</div>
        <div class="detail">一律发
          <span v-for="(mail, index) in store_info.mail_supplier" :key="mail.name">
            {{mail.name}}
            <span v-if="store_info.mail_supplier && index !== store_info.mail_supplier.length - 1">、</span>
          </span>
        </div>
      </div>
      <div class="love vflex">
        <div class="collect center" :class="{'no-collect': user.collect_status}" @click="collect">
          <span v-if="user.collect_status">已收藏</span>
          <span v-else>收藏</span>
        </div>
        <div class="people">{{store_info.collect_total | unitTurn}}人已收藏</div>
      </div>
    </div>
    <div class="activity flex"><i class="icon-volume volume"></i>
      <ul class="flex1">
        <li v-if="full_minus">
          <span class="title">满减</span>
          <span>满{{full_minus.full}}减{{full_minus.minus}}</span>
        </li>
      </ul>
      <div class="more" v-if="activity.full_minus && activity.full_minus.length > 1">
        <span>更多活动</span>
        <i class="icon-right-arrow arrow arrow-first"></i>
        <i class="icon-right-arrow arrow arrow-last"></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss"  rel="stylesheet/scss">
  @import "../../../../client/static/style/base/variables";
  .head {
    width: 100%;
    position: relative;
    z-index: 0;
    overflow: hidden;
    padding: 0.15rem 0.1rem 0.05rem 0.15rem;
    border-bottom: 0.01rem solid #ddd;
    box-shadow: 0 0.01rem 0 0 rgba(0, 0, 0, 0.06);
    .bg {
      position: absolute;
      left: 0;
      top: 0;
      -webkit-filter: blur(0.15rem);
      filter: blur(0.15rem);
      z-index: -1;
    }
    .content {
      .header {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 0.05rem;
        overflow: hidden;
        z-index: 1;
        background: #fff;
        padding: 0.04rem;
        img {
          border-radius: 50%;
        }
      }
      .info {
        padding: 0 0.1rem;
        .title {
          font-size: 0.2rem;
          margin-bottom: 0.05rem;
        }
        .detail {
          font-size: 0.12rem;
          margin-bottom: 0.02rem;
        }
      }
      .love {
        .collect {
          background: $main-color;
          width: 0.8rem;
          height: 0.25rem;
          line-height: 0.28rem;
          border-radius: 0.3rem;
          color: #fff;
          &.no-collect {
            background: #ddd;
            color: #333;
          }
        }
        .people {
          font-size: 0.12rem;
          margin-top: 0.06rem;
        }
      }
    }
    .activity {
      margin-top: 0.1rem;
      .volume {
        position: relative;
        left: -0.1rem;
        top: -0.01rem;
        font-size: 0.18rem;
        color: $main-color;
      }
      ul {
        li {
          .title {
            background: $main-color;
            border-radius: 0.02rem;
            padding: 0.02rem;
            color: #fff;
            font-size: 0.12rem;
          }
        }
      }
      .more {
        position: relative;
        top: 0.04rem;
        font-size: 0.12rem;
        span {
          position: relative;
          left: 0.24rem;
        }
        .arrow {
          position: relative;
          font-size: 0.12rem;
        }
        .arrow-first {
          left: 0.2rem;
        }
        .arrow-last {
          right: -0.04rem;
        }
      }
    }
  }
</style>

<script>
  import {mapState} from 'vuex';
  export default {
    name: 'head',
    data() {
      return {
        is_collect: true
      }
    },
    computed: {
      ...mapState([
        'store_info',
        'user',
        'activity']),
      full_minus() {
        const full_minus = this.activity.full_minus;
        if (full_minus && full_minus.length > 0) {
          return {
            full: full_minus[0].full,
            minus: full_minus[0].minus
          }
        }
        return false;
      }
    },
    methods: {
      collect() {
        this.is_collect = !this.is_collect;
      }
    }
  }
</script>