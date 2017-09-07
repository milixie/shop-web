<template>
  <div class="home scroll-y flex1">
    <div class="main"><img :src="home_page.bg_img" alt=""></div>
    <div class="combo">
      <div class="block" v-for="item in home_page.group" :key="item.title">
        <div class="title">【{{item.title}}】</div>
        <ul class="pic" v-for="sub_item in item.group_list" :key="sub_item.show_img">
          <li><img class="img" :src="sub_item.show_img" alt=""></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" rel="stylesheet/scss">
  @import "../../../../client/static/style/base/variables";
  .home {
    margin-top: 0.01rem;
    .main {
      img {
        width: 100%;
      }
    }
    .combo {
      .block {
        .title {
          background: $light-main-color;
          padding: 0.02rem;
          text-align: center;
        }
        .pic {
          .img {
            width: 100%;
          }
        }
      }
    }
  }

</style>
<script>
  import {mapState} from 'vuex';
  export default {
    name: 'home',
    data() {
      return {}
    },
    computed: {
      ...mapState(['home_page'])
    }
  }
</script>