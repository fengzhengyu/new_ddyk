<template>
  <div class="">
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {

};
</script>
<style scoped lang="stylus">
 .mint-swipe-item
   color red
   text-align center
   line-height px2rem(300)
   img 
    width 100%
    height 100%

</style>
