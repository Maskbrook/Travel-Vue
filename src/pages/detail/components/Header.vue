<template>
  <div>
    <router-link
      tag="div"
      class="header-abs"
      to="/"
      v-show="showAbs"
    >
      <span class="iconfont header-abs-back">&#xe624;</span>
    </router-link>

    <div
      class="header-fixed"
      to="/"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link
        tag="span"
        class="iconfont header-fixed-back"
        to="/"
      >
        &#xe624;
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 0) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted () { // 解绑全局事件
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .header-abs
    position: absolute
    left: .1rem
    top: .1rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    border-radius: .4rem
    text-align: center
    background: rgba(0, 0, 0, .8)
    .header-abs-back
      color: #fff
      font-size: .4rem
  .header-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    width: 100%
    height: .76rem
    line-height: .76rem
    background: $bgColor
    text-align: center
    color: #fff
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      padding: 0 0 0 .2rem
      color: #fff
</style>
