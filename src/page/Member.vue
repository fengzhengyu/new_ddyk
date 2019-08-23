<template>
  <div class="member">
    <header class="mine-header">
     

    
    </header>
     <section class="mine-main">
    
      
    
      <div class="my-collect menu-list" @click="goCollect">
        <span class="menu-icon"><i class="iconfont icon-shoucang"></i></span>
        <span class="menu-name">我的收藏</span>
        <span class="menu-go"><i class="iconfont icon-qianjin1"></i></span>
      </div>
      <div class="mine-line"></div>

      <!-- <div  class="setting  menu-list" @click="goSetting">
        <span class="menu-icon"><i class="iconfont icon-huiyuantongjibaobiao"></i></span>
        <span class="menu-name">账号设置</span>
        <span class="menu-go"><i class="iconfont icon-qianjin1"></i></span>
      </div> -->
      <div class="mine-line"></div>
    </section>
    <v-footer></v-footer>
    
  
  </div>

</template>

<script type="text/ecmascript-6">


import footer from "@/components/common/Footer.vue";


export default {
  data() {
    return {
     
    };
  },
  methods: {
   
  },
  components: {
 

    'v-footer': footer,


  }
};
</script>

<style scoped lang="stylus">
.member
  position fixed
  top 0
  left 0
  right 0
  bottom px2rem(120)  
  overflow-y auto
  .mine-header
    width px2rem(750)
    height px2rem(560)
    background url("../assets/images/my-bg.png") no-repeat;
    background-size  px2rem(750) px2rem(560)
  .menu-list
    display: flex;
    padding: px2rem(25) 0
    overflow: hidden;  
    span 
      flex 1
      &.menu-icon
        width px2rem(40)
        flex 0 0 px2rem(40)
       &.menu-go  
        width px2rem(40)
        flex 0 0 px2rem(40)

</style>
