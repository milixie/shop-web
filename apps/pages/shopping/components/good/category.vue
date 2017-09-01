<template>
  <ul class="category vflex scroll-y">
    <li class="sub-category" :class="{active: id === 0}" id="0" @click="switchCategory(0)">
      <i class="icon-campaign"></i>
      <span>今日特惠</span>
    </li>
    <li class="sub-category" :class="{active: id === 1}" id="1" @click="switchCategory(1)">
      <i class="icon-campaign"></i>
      <span>今日特惠</span>
    </li>
    <li class="sub-category" :class="{active: id === 2}" id="2" @click="switchCategory(2)">
      <i class="icon-campaign"></i>
      <span>今日特惠</span>
    </li>
    <li class="sub-category" :class="{active: id === 3}" id="3" @click="switchCategory(3)">
      <i class="icon-campaign"></i>
      <span>今日特惠</span>
    </li>
  </ul>
</template>

<style lang="scss" scope rel="stylesheet/scss">
  @import "../../../../../client/static/style/base/variables";
  .category{
    width: 1rem;
    border-right: 0.01rem solid #eee;
    .sub-category {
      border-bottom: 1px solid #eee;
      padding: 0.15rem 0;
      text-align: center;
      &.active {
        background: #fff;
        color: $main-color;
      }
    }
  }
</style>

<script>
  export default {
    name: 'category',
    data() {
      return {
        id: 0
      }
    },
    methods: {
      switchCategory(idx) {
        if (idx === this.id) return;
        this.id = idx;
      }
    }
  }
</script>