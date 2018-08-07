<template>
  <div class="header">
    <div class="header-left"></div>
    <div class="header-input"></div>
    <div class="header-right"></div>
  </div>
</template>

<script>
export default{
  name: 'HomeHeader'
}
</script>

<!-- 使用stylus -->
<!-- 1rem = (html的font-size) = 50px -->
<style lang="stylus" scoped>
  .header
    height: 1rem
    background: red
</style>
