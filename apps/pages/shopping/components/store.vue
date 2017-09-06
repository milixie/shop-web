<template>
  <ul class="store flex1 scroll-y">
    <li class="store-info flex">
      <label><i class="icon-shop"></i>商品数量：</label>
      <span>{{store_info.product_number}}件</span>
    </li>
    <li class="store-info flex">
      <label><i class="icon-bag"></i>月销量：</label>
      <span>{{store_info.month_sale}}件</span>
    </li>
    <li class="store-info flex">
      <label><i class="icon-users"></i>收藏人数：</label>
      <span>{{store_info.collect_total | unitTurn}}</span>
    </li>
    <li class="store-info flex">
      <label><i class="icon-time"></i>营业时间：</label>
      <span>{{work_time.start}}~{{work_time.end}}</span>
    </li>
    <li class="store-info flex">
      <label><i class="icon-phone1"></i>门店电话：</label>
      <span><a href="tel:store_info.tel">{{store_info.tel}}</a></span>
    </li>
    <li class="store-info flex" @click="openMap">
      <label><i class="icon-location"></i>门店地址：</label>
      <span>{{store_info.address}}</span>
    </li>
    <li class="store-info flex">
      <label><i class="icon-dish"></i>店铺介绍：</label>
      <span>{{store_info.intro}}</span>
    </li>
    <li class="store-info flex">
      <label><i class="icon-grade3"></i>其他信息：</label>
      <span>{{store_info.other}}</span>
    </li>
  </ul>
</template>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "../../../../client/static/style/base/variables";
  .store {
    background: #fff;
    margin: 0.1rem;
    border-radius: 0.02rem;
    box-shadow: 0 0.01rem 0 0 rgba(0, 0, 0, 0.06);
    position: relative;
    padding: 0.2rem;
    .store-info {
      position: relative;
      z-index: 1;
      padding-bottom: 0.2rem;
      label {
        display: inline-block;
        width: 1rem;
        min-width: 1rem;
        line-height: 1.5em;
        i {
          position: relative;
          left: -0.05rem;
          color: $main-color;
        }
      }
      span {
        line-height: 1.5em;
      }
    }
  }

</style>

<script>
  import {mapState} from 'vuex';
  import dateFnsFormat from 'date-fns/format';
  import dateFnsRange from 'date-fns/difference_in_calendar_days';
  import dateFnsStartDay from 'date-fns/start_of_day';
  export default {
    name: 'store',
    data() {
      return {}
    },
    computed: {
      ...mapState(['store_info']),
      work_time() {
        const {start_time, end_time} = this.store_info;
        const today = dateFnsStartDay(new Date()).getTime();
        const start = dateFnsFormat(today + start_time, 'HH:mm');
        const end = dateFnsFormat(today + end_time, 'HH:mm');
        return {
          start,
          end
        };
      }
    },
    methods: {
      openMap() {
        location.href = 'http://api.map.baidu.com/marker?location=39.916979519873,116.41004950566&title=我的位置&content=百度奎科大厦&output=html';
      }
    }
  }
</script>