<template>
  <div class="home scroll-y flex1">
    <div class="main"><img src="http://7xj5et.com1.z0.glb.clouddn.com/shop/timg.jpeg" alt=""></div>
    <div class="combo">
      <div class="block">
        <div class="title">【鲜补水面膜系列】</div>
        <ul>
          <li><a href=""><img src="http://7xj5et.com1.z0.glb.clouddn.com/shop/main.png" alt=""></a></li>
          <li><a href=""><img src="http://7xj5et.com1.z0.glb.clouddn.com/shop/head.jpg" alt=""></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "../../../../client/static/style/base/variables";
  .home {
    margin-top: 0.01rem;
    .combo {
      .block {
        .title {
          background: $light-main-color;
          padding: 0.02rem;
          text-align: center;
        }
      }
    }
  }

</style>
<script>
  export default {
    name: 'home',
    data() {
      return {}
    }
  }
</script>