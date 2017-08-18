<template>
  <div id="app">
    <div class="wrap">
      ddddd
      <i class="icon-right-arrow"></i>
    </div>
  </div>
</template>

<style lang="scss" rel="stylesheet/scss">
  @import "../../../client/static/style/common.scss";
  .wrap {
    width: 300px;
  }
</style>

<script>
export default {
  data() {
    return {}
  },
  head: {
    title: '购物车',
    script: [{src: '/assets/shopping.js', defer: true}],
    link: [{href: '/assets/css/shopping.css', rel: 'stylesheet'}]
  }
}
</script>