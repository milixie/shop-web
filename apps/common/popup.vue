<template>
  <transition name="fade">
    <div class="pop" v-if="show" @click="close">
      <div class="mask"></div>
      <slot></slot>
    </div>
  </transition>
</template>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "../../client/static/style/base/variables";
  .pop {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    .mask {
      position: fixed;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      z-index: 500;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>

<script>
  export default {
    name: 'popup',
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {}
    },
    methods: {
      close() {
        this.$emit('closeMask');
      }
    }
  }
</script>