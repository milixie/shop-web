<template>
  <ul class="store flex1 scroll-y">
    <li class="store-info flex">
      <label><i class="icon-shop"></i>商品数量：</label>
      <span>1234件</span>
    </li>
    <li class="store-info flex">
      <label><i class="icon-bag"></i>月销量：</label>
      <span>123件</span>
    </li>
    <li class="store-info flex">
      <label><i class="icon-users"></i>收藏人数：</label>
      <span>5.1万</span>
    </li>
    <li class="store-info flex">
      <label><i class="icon-time"></i>营业时间：</label>
      <span>00:00 ~ 24:00</span>
    </li>
    <li class="store-info flex">
      <label><i class="icon-phone1"></i>门店电话：</label>
      <span>40008000</span>
    </li>
    <li class="store-info flex" @click="openMap">
      <label><i class="icon-location"></i>门店地址：</label>
      <span>北京市朝阳区798艺术区东门12号</span>
    </li>
    <li class="store-info flex">
      <label><i class="icon-dish"></i>店铺介绍：</label>
      <span> 补水天使俱乐部成立于2015年3月12号，由腾讯、携程领头投资天使轮1000万美金，一经推出就受到广大观众的喜爱，尤其是深受每天忙于工作的美女白领的喜爱，同时，补水天使俱乐部也受到了广大男士的关注，因为我们推出了基于男士肌肤专门补水的特效功能</span>
    </li>
    <li class="store-info flex">
      <label><i class="icon-grade3"></i>其他信息：</label>
      <span>店铺购满299元或者购满2件即可包邮，但不含港澳台、新疆、西藏等偏远地区，快递一律发顺丰，保证您所购宝贝尽快送达，祝您购物愉快！</span>
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
  export default {
    name: 'store',
    data() {
      return {}
    },
    methods: {
      openMap() {
        location.href = 'http://api.map.baidu.com/marker?location=39.916979519873,116.41004950566&title=我的位置&content=百度奎科大厦&output=html';
      }
    }
  }
</script>