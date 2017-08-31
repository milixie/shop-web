<template>
  <div id="app">
    <div class="shop vflex">
      <head-bar/>
      <search/>
      <tab :is_active="is_active" @switch="switchTab"/>
      <home v-if="is_active === 0"/>
    </div>
  </div>
</template>

<style lang="scss" rel="stylesheet/scss">
  @import "../../../client/static/style/common.scss";
  #app {
    width: 100%;
    height: 100%;
  }
</style>

<script>
import HeadBar from './components/head_bar.vue';
import Search from './components/search.vue';
import Tab from './components/tab.vue';
import Home from './components/home.vue';
export default {
  data() {
    return {
      is_active: 0
    }
  },
  head: {
    title: '购物车',
    script: [{src: '/assets/shopping.js', defer: true}],
    link: [{href: '/assets/css/shopping.css', rel: 'stylesheet'}]
  },
  methods: {
    switchTab(index) {
      this.is_active = index;
    }
  },
  components: {HeadBar, Search, Tab, Home}
}
</script>