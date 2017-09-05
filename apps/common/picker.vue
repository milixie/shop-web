<template>
  <div class="picker center">
    <div class="reduce circular left" @click="reduce" v-show="number > 0">
      <i class="icon-subtract"></i>
      <a href="javascript:void(0)" class="circular-btn"></a>
    </div>
    <span class="number" v-show="number > 0">{{number}}</span>
    <div class="plus circular right" @click="plus">
      <i class="icon-add"></i>
      <a href="javascript:void(0)" class="circular-btn"></a>
    </div>
  </div>
</template>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "../../client/static/style/base/variables";
  .picker {
    width: 0.75rem;
    height: 0.25rem;
    line-height: 0.25rem;
    .circular {
      width: 0.25rem;
      height: 0.25rem;
      line-height: 0.23rem;
      text-align: center;
      border: 0.01rem solid $light-main-color;
      border-radius: 50%;
      background: $main-color;
      position: relative;
      .circular-btn {
        display: inline-block;
        width: 200%;
        height: 200%;
        position: absolute;
        left: -50%;
        top: -50%;
      }
      i {
        color: #fff;
        font-weight: bold;
      }
    }
  }
</style>

<script>
  export default {
    name: 'picker',
    props: {
      number: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {}
    },
    methods: {
      plus(el) {
        const value = this.number + 1;
        this.$emit('input', value);
        this.$emit('getPos', el);
      },
      reduce() {
        if (this.number === 0) return;
        const value = this.number - 1;
        this.$emit('input', value);
      }
    }
  }
</script>