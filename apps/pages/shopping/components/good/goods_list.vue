<template>
  <div class="goods-list scroll-y flex1 vflex">
    <div class="group">
      <div class="title">面膜</div>
      <div class="list">
        <div class="group-item flex">
          <img src="http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/15.jpg" alt="">
          <div class="flex1">
            <div class="name">鲜补水面膜</div>
            <div class="detail">月销量234 | 好评率98%</div>
            <div class="price">￥96.9</div>
            <picker/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scope rel="stylesheet/scss">
  @import "../../../../../client/static/style/base/variables";
  .goods-list {

  }
</style>

<script>
  import Picker from '../../../../common/picker.vue'
  export default {
    name: 'goods-list',
    data() {
      return {
      }
    },
    methods: {

    },
    components: {Picker}
  }
</script>