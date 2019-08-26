<template>
  <footer class="footer border-top">
      <div class="item" :class="{'active':selected == 'index'}" @click="go('index')">
          <i slot="icon" class="iconfont icon-zhuye footer-icon"></i>
          <span class="footer-text ">首页</span>
      </div>
      <div class="item" :class="{'active':selected == 'category'}"  @click="go('category')">
         <i slot="icon" class="iconfont icon-leimupinleifenleileibie2-copy footer-icon"></i>
         <span class="footer-text "> 分类</span>
      </div>
 
      <div class="item" :class="{'active':selected == 'member'}" @click="go('member')">
          <i slot="icon" class="iconfont icon-wodedangxuan1 footer-icon"></i>
          <span class="footer-text ">我的</span>
      </div>
  </footer>
</template>
<script>
  // import { getCartCount  } from 'common/api'
  export default {
    data(){
      return {
        selected: '',
       
      }
      
    },
    created() {
      this.selected = this.$route.name;
     
    },
   
    methods: {
      go(value){
        this.$router.push({
          name: value
        })
      }
     
    }
  }
</script>


<style lang="stylus" scoped>
    footer
        height px2rem(120)
        color #737373
        position fixed
        bottom 0
        background #fff
        width  px2rem(750)
        display flex
        justify-content center
        align-items center
     
        border-top 1px solid #eaeaea
    
       
        .item
            flex 1
            text-align center
            padding .1rem
            color #737373
            
            .footer-icon
              color #bdbdbd
              position relative
              font-size 22px
            
            .footer-text 
              display block
              font-size 12px
              padding-top px2rem(5)
            &.active 
                color #fd4c29
                .footer-text  
                  color #fd4c29
                .footer-icon
                  color #fd4c29

</style>

