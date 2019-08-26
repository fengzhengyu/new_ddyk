<template>
  <div class="member">
    <header class="mine-header">
      <div class="user-photo">
          <!-- <img src="../assets/img/account.png" alt=""> -->
          <img class="phone" src="../assets/images/account.png" >
      </div>
      <p class="member-user-name" v-if="!isLogin" @click="goLogin">点击登录</p>
      <p class="member-user-name" v-else>匿名</p>
    </header>
    <section class="mine-main">
      
      <div class="my-collect menu-list">
        <span class="menu-icon member-menu-icon1">
          <i class="iconfont icon-shoucang"></i>
        </span>
        <span class="menu-name member-menu-text">我的收藏</span>
        <span class="menu-go member-menu-icon">
          <i class="iconfont icon-qianjin1"></i>
        </span>
      </div>
      <div class="mine-line"></div>

      <div class="setting menu-list">
        <span class="menu-icon member-menu-icon1">
          <i class="iconfont icon-huiyuantongjibaobiao"></i>
        </span>
        <span class="menu-name member-menu-text">我的积分</span>
        <span class="menu-go member-menu-icon">
          <i class="iconfont icon-qianjin1"></i>
        </span>
      </div>
      <div class="mine-line"></div>

      <div class="setting menu-list">
        <span class="menu-icon member-menu-icon1">
          <i class="iconfont icon-huiyuantongjibaobiao"></i>
        </span>
        <span class="menu-name member-menu-text">账号管理</span>
        <span class="menu-go member-menu-icon">
          <i class="iconfont icon-qianjin1"></i>
        </span>
      </div>
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
      isLogin: false
    }
  },
  methods: {
    goLogin(){
        this.$router.push({
          name: 'login'
        })
    }
  },
  components: {
    "v-footer": footer
  }
};
</script>

<style scoped lang="stylus">
.member 
  position: absolute
  top: 0
  width  px2rem(750)
  bottom 0
  overflow-y: auto
  z-index 999
  background #f2f2f2

  .mine-header 
    width: px2rem(750)
    height: px2rem(560)
    background: url('../assets/images/my-bg.png') no-repeat
    background-size: px2rem(750) px2rem(561)
    overflow hidden
    .user-photo
      width px2rem(200)
      height  px2rem(200)
      margin px2rem(30) auto
      border-radius 50%
      overflow hidden
      img
        width 100%
        height 100%
    .member-user-name
      padding px2rem(20)   
      text-align center
      color #fff
      font-weight 400
      font-size 16px

  .mine-main 
    .menu-list 
      display: flex
      padding: px2rem(25) 0
      overflow: hidden
      align-items: center
      background: #fff
      font-size 14px
      span 
        flex: 1
        color: #555
        &.menu-icon 
          width: px2rem(60)
          flex: 0 0 px2rem(60)
          text-align: center
          i
            font-size 18px
         
        &.menu-go 
          width: px2rem(60)
          flex: 0 0 px2rem(60)
          text-align: center
          i
            font-size 16px
    .mine-line 
      height: px2rem(20)

</style>
