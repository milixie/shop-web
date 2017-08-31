<template>
  <ul class="tab flex" @click="switchTab">
    <li data-id="0" class="sub-tab flex1" :class="{active: is_active === 0}">首页</li>
    <li data-id="1" class="sub-tab flex1" :class="{active: is_active === 1}">全部商品</li>
    <li data-id="2" class="sub-tab flex1" :class="{active: is_active === 2}">店铺信息</li>
  </ul>
</template>

<style lang="scss" scope rel="stylesheet/scss">
  .tab {
    background: #fff;
    .sub-tab {
      padding: 0.1rem;
      text-align: center;
      position: relative;
      &.active {
        color: #ff6666;
        font-weight: bold;
      }
    }
  }
</style>

<script>
  export default {
    name: 'tab',
    props: ['is_active'],
    data() {
      return {}
    },
    methods: {
      switchTab(e) {
        const index = Number(e.target.dataset.id);
        if (this.is_active === index) return;
        this.$emit('switch', index);
      }
    }
  }
</script>