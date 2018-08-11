<template>
	<ul class="item-list">
   <li class="item" v-for="(item, key) of cities" :key="key">{{key}}</li> 
  </ul>
</template>

<script>
export default{
	name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .item-list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      text-align: center
      line-height: .4rem
      font-size: .15rem
      color: $bgColor
</style>
