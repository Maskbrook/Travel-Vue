<template>
  <div>
    <div class="title">热门推荐</div>
      <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
          <img class="item-img" :src="item.imgUrl" />
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1803/12/126471e0966aca5ba3.img.jpg_200x200_f1286016.jpg',
        title: '北京国际鲜花港',
        desc: '起伏的花坛，绿色的草坪，游人如织'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1803/12/126471e0966aca5ba3.img.jpg_200x200_f1286016.jpg',
        title: '北京国际鲜花港',
        desc: '起伏的花坛，绿色的草坪，游人如织'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1803/12/126471e0966aca5ba3.img.jpg_200x200_f1286016.jpg',
        title: '北京国际鲜花港',
        desc: '起伏的花坛，绿色的草坪，游人如织起伏的花坛，绿色的草坪，游人如织'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1803/12/126471e0966aca5ba3.img.jpg_200x200_f1286016.jpg',
        title: '北京国际鲜花港',
        desc: '鲜花铺就，起伏的花坛，绿色的草坪'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .title
    line-height: .8rem
    marigin-top: .2rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        marigin-top: .2rem
        background: #ff9300
        padding 0 .2rem
        border-radius: .05rem
        color: #fff
</style>
