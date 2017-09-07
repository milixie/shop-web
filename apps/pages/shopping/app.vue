<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss" rel="stylesheet/scss">
  @import "../../../client/static/style/common";
  #app {
    width: 100%;
    height: 100%;
  }
</style>

<script>
  import store from './store';
  import router from './router';

  export default {
    data() {
      return {
      }
    },
    store,
    router,
    head: {
      title: '购物',
      script: [{src: '/assets/shopping.js', defer: true}],
      link: [{href: '/assets/css/shopping.css', rel: 'stylesheet'}]
    },
  }
</script>