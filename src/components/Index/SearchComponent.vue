<template>
 
    <div class="search-wrap">    
      <div class="search">
        <div class="img"><img src="../../assets/images/logo.png" alt=""></div>
        <div class="input" @click="$router.push({name:'search'})">
          <input type="text" placeholder="请输入搜索产品" class="index-search-text">
          <i class=" iconfont icon-sousuo index-search-icon" ></i>
        </div>
      </div>
    </div>
 
</template>

<script>
export default {
 
}
</script>
<style scoped lang="stylus">
  .search-wrap
    .search
      padding px2rem(30)
      display flex
      align-items: center;
      .img
        width px2rem(172)
        height px2rem(38)
        img
          width 100%
          height 100%
      .input
        flex 1
        padding-left px2rem(30)  
        height px2rem(60)
        position relative
        input 
          width 100%
          height 100% 
          box-sizing border-box
          border-radius px2rem(20)
          padding-left  px2rem(50)
          font-size 12px
        
          color #000
        .index-search-icon
          position absolute
          top 50%
          left px2rem(40) 
          color #717171
          cursor pointer
          font-size 16px
          margin-top: -8px;
</style>
