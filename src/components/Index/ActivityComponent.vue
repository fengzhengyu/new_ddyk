<template>
  <div>
    <div class="activity">
       <div class="item"></div>
        <div class="item right">
          <div class="chuck"></div>
          <div class="chuck"></div>
        </div>
    </div>
   
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="stylus">
    .activity
      padding 0 px2rem(30)  px2rem(30)  px2rem(30)
      background #fff
      display flex
      justify-content space-between
      .item
       width px2rem(335)
       height px2rem(370)
       background #a6d7e5
       &.right
         display flex
         flex-flow column
         justify-content space-between
         background #fff
         .chuck
           height px2rem(175)
           background #77cc7d

</style>
