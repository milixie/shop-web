<template>
  <div class="search flex">
    <i class="icon-search search-icon"></i>
    <input type="search"
           :value="shop_name"
           placeholder="请输入商品名称"
           class="search-box flex1"
           @input="getInputVal">
  </div>
</template>

<style lang="scss" rel="stylesheet/scss">
  .search {
    background: #eee;
    padding: 0.05rem 0.1rem;
    position: relative;
    box-shadow: 0 0.01rem 0 0 rgba(0, 0, 0, 0.06);
    .search-icon {
      position: absolute;
      left: 0.15rem;
      top: 0.12rem;
      color: #ccc;
    }
    .search-box {
      height: 0.3rem;
      line-height: 0.3rem;
      padding-left: 0.3rem;
      border-radius: 0.04rem;
      border: none;
      outline: none;
    }
  }

</style>

<script>
  import {mapMutations} from 'vuex';
  export default {
    name: 'search',
    data() {
      return {
        shop_name: ''
      }
    },
    methods: {
      ...mapMutations(['searchInput']),
      getInputVal(e) {
        const val = e.target.value;
        this.searchInput(val);
      }
    }
  }
</script>