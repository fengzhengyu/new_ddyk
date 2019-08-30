<template>
  <div >
    <ul class="nav-wrap">
      <li class="nav-item">
        <i class="iconfont icon-sangeren"></i>
        <span>药博会</span>
      </li>
      <li class="nav-item">
       <i class="iconfont icon-zixun1"></i>
        <span>新闻资讯</span>
      </li>
      <li class="nav-item">
        <i class="iconfont icon-zhuantituceng"></i>
        <span>专题活动</span>
      </li>
      <li class="nav-item">
        <i class="iconfont icon-shipin"></i>
        <span>专题视频</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="stylus">
  .nav-wrap
    display flex
    height px2rem(70)
    .nav-item
      flex 1
      text-align center
      padding-top px2rem(10)
      font-size 12px
   
      color #fff
      cursor pointer
      i 
        font-size 14px

        vertical-align middle
</style>
