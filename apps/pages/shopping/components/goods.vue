<template>
  <div class="goods flex flex1">
    <category/>
    <goods-list/>
  </div>
</template>

<style lang="scss" scoped rel="stylesheet/scss">
  .goods {
    margin-top: 0.01rem;
  }
</style>

<script>
  import Category from './good/category.vue';
  import GoodsList from './good/goods_list.vue';
  export default {
    name: 'goods',
    data() {
      return {

      }
    },
    components: {Category, GoodsList},
    methods: {
    }
  }
</script>