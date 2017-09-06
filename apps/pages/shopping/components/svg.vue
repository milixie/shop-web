<template>
  <div class="svg">
    <transition name="fade" v-for="ball in balls" :key="ball.id" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ico-wrap" v-if="ball.show">
        <i class="ico ico-hook"></i>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "../../../../client/static/style/base/variables";

  .svg {
    .ico-wrap {
      position: fixed;
      left: 0.4rem;
      bottom: 0.2rem;
      transition: all .3s cubic-bezier(0.49, -0.29, 0.75, 0.41);
      .ico {
        display: inline-block;
        width: 0.1rem;
        height: 0.1rem;
        border-radius: 50%;
        background: $main-color;
        transition: all .3s linear
      }
    }
  }

</style>

<script>
  import unit from './../../../lib/unit';
  export default {
    name: 'svg',
    props: ['move_balls', 'balls'],
    data() {
      return {
      }
    },
    methods: {
      beforeEnter(el){ //这个方法的执行是因为这是一个vue的监听事件
        let count = this.balls.length;
        while (count --) {
          let ball = this.balls[count];
          if (ball.show) {
            let rect = ball.el; //获取小球的相对于视口的位移(小球高度)
            let x = rect.pageX - unit.remToPx(0.4);
            let y = - (window.innerHeight - rect.pageY - unit.remToPx(0.2)); //负数,因为是从左上角往下的的方向
            el.style.display = ''; //清空display
            el.style.webkitTransform = `translate3d(0,${y}px,0)`;
            el.style.transform = `translate3d(0,${y}px,0)`;
            //处理内层动画
            let inner = el.getElementsByClassName('ico-hook')[0]; //使用inner-hook类来单纯被js操作
            inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
            inner.style.transform = `translate3d(${x}px,0,0)`;
          }
        }
      },
      enter(el, done) { //这个方法的执行是因为这是一个vue的监听事件
        let rf = el.offsetHeight; //触发重绘html
        this.$nextTick(() => { //让动画效果异步执行,提高性能
          el.style.webkitTransform = 'translate3d(0,0,0)';
          el.style.transform = 'translate3d(0,0,0)';
          //处理内层动画
          let inner = el.getElementsByClassName('ico-hook')[0]; //使用inner-hook类来单纯被js操作
          inner.style.webkitTransform = 'translate3d(0,0,0)';
          inner.style.transform = 'translate3d(0,0,0)';
          el.addEventListener('transitionend', done); //Vue为了知道过渡的完成，必须设置相应的事件监听器。
        });
      },

      afterEnter(el) { //这个方法的执行是因为这是一个vue的监听事件
        let ball = this.move_balls.shift(); //完成一次动画就删除一个dropBalls的小球
        if (ball) {
          ball.show = false;
          el.style.display = 'none'; //隐藏小球
        }
      }
    }
  }
</script>