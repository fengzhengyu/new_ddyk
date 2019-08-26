<template>
 
     
      <div class="search">
        <div class="img" @click="$router.go(-1)">
          <i class="iconfont icon-fanhui2"></i>
        </div>
        <div class="input" @click="$router.push({name:'search'})">
          <input type="text" placeholder="请输入搜索关键词" class="category-search-text">
          <i class=" iconfont icon-sousuo category-search-icon" ></i>
        </div>
      </div>
 
 
</template>

<script>
export default {
 
}
</script>
<style scoped lang="stylus">

    .search
      position fixed
      top 0
      width px2rem(750)
      background #fff
      display flex
      align-items: center;
      height px2rem(120)
      border-bottom  1px solid #eaeaea
    
      .img
        width px2rem(40)
        height px2rem(40)
        text-align center
        line-height px2rem(40)
        padding px2rem(40)
        i
          font-size px2rem(40)
          color #919191
      .input
        flex 1
        padding 0 px2rem(30)  
        height px2rem(60)
        position relative
       
        input 
          width 100%
          height 100% 
          box-sizing border-box
          border-radius px2rem(20)
          padding-left  px2rem(55)
          font-size 12px
          color #000
          background #ededed
        .category-search-icon
          position absolute
          top 50%
          left px2rem(50) 
          font-size 16px
          margin-top -8px
          color #717171
          cursor pointer
</style>
