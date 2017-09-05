<template>
  <ul class="category vflex scroll-y" :class="{'block': cart.length > 0}">
    <li class="sub-category"
        :class="{active: item.idx === current_id}"
        @click="switchCategory(item.idx)"
        v-for="item in category"
        :key="item.idx">
      <i v-show="item.idx === -1" class="icon-campaign"></i>
      <span>{{item.name}}</span>
    </li>
  </ul>
</template>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "../../../../../client/static/style/base/variables";
  .category{
    width: 0.85rem;
    border-right: 0.01rem solid #eee;
    &.block {
      padding-bottom: 0.45rem;
    }
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
  import {mapState, mapMutations} from 'vuex';
  export default {
    name: 'category',
    data() {
      return {
      }
    },
    mounted() {
      this.id = this.category && this.category[0].idx;
    },
    computed: {
      ...mapState(['current_id', 'cart']),
      category() {
        return this.$store.getters.category_show;
      }
    },
    methods: {
      ...mapMutations(['updateId']),
      switchCategory(idx) {
        if (idx === this.current_id) return;
        this.updateId(idx);
      }
    }
  }
</script>