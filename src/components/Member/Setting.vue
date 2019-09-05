<template>
    <div class="collect">
      <mt-header  title="账号管理">
        <router-link to="" slot="left">
          <mt-button icon="back" @click="goBack">返回</mt-button>
        </router-link>
       
      </mt-header>
      <section class="mine-main">
        <div class="my-collect menu-list" @click=" showSheet">
          <span class="menu-icon member-menu-icon1" >
            头像
          </span>
          <span class="menu-name member-menu-text">
            <img src="../../assets/images/account.png" alt="">
          </span>
          <span class="menu-go member-menu-icon">
            <i class="iconfont icon-qianjin"></i>
          </span>
        </div>
        <div class="my-collect menu-list"  @click="updateName">
          <span class="menu-icon member-menu-icon1">
            昵称
          </span>
          <span class="menu-name member-menu-text">我们好像在哪见过</span>
          <span class="menu-go member-menu-icon">
            <i class="iconfont icon-qianjin"></i>
          </span>
        </div>
        <mt-button type="primary" size="large" class="login-btn" >退出</mt-button>
      </section>
      <!-- <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet> -->
    <mt-popup
  v-model="popupVisible"
  position="bottom">
    <div class="uploadImg">
      选择图片
      <input type="file" name="file" >
    </div>
</mt-popup>
     
    </div>
</template>
<script>

 
export default {
    data() {
        return {
         actions: [
           {
              name:"选择图片",
              method:this.getLibrary

           }
         ],
         popupVisible: false
        }
    },
     created(){
                
       
    },
    mounted(){

      this.$nextTick(() => {
     
      })
    },
    
 
    methods: {
      
        goBack(){
           this.$router.back()
        },
        updateName(){
          this.$messagebox.prompt(' ','请输入昵称').then(({ value, action }) => {
            
          });
          
        },
        showSheet(){
          this.popupVisible = !this.popupVisible  ;
        },
        getLibrary(){

        }
    },
    
}
</script>
<style lang="stylus" scoped>
  .collect
    position absolute 
    width px2rem(750)
    top 0
    bottom 0
    background #fff
    .mint-header
      background #fd4926
    .mine-main 
      .menu-list 
        display: flex
        padding: px2rem(25) 0
        overflow: hidden
        align-items: center
        background: #fff
        font-size 14px
        border-bottom 1px solid #ccc
        span 
          flex: 1
          color: #555
          img 
            width px2rem(80)
            height px2rem(80)
        
          &.menu-icon 
            width: px2rem(120)
            flex: 0 0 px2rem(120)
            text-align: center
          &.menu-name  
            text-align right 
          
          &.menu-go 
            width: px2rem(60)
            flex: 0 0 px2rem(60)
            text-align: center
            i
              font-size 16px  
       .login-btn

        width 90%
        display block
        margin  30px auto
        background #fd4926
      
  .uploadImg
    width px2rem(750)    
    height 60px  
    font-size 16px
    color #555
    text-align center
    line-height 60px
    position relative
    input 
      position absolute
      top 0
      bottom 0
      width px2rem(750)
      left 0
      opacity 0
    
                  
</style>

