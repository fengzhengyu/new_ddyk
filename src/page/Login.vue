<template>
  <div class="member-login">
   
    <mt-header  title="会员登录">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="goBack">返回</mt-button>
      </router-link>
      <!--<mt-button icon="more" slot="left"></mt-button>-->
    </mt-header>
  <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone" :state="phoneNumState" :disableClear="aa"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-field label="验证码" v-model="captcha" placeholder="验证码">
      <span> 1568</span>
  </mt-field>
  <mt-button type="primary" size="large"  >注&nbsp;&nbsp;册</mt-button>
  </div>
</template>

<script type="text/ecmascript-6">
 
  export  default {
    data(){
      return {
     phone:'',
     password:'',
     captcha:'',
     phoneNumState: '',
     aa:true
      }
    },
    watch:{
      phone (newVal, oldVal) {
        if (tools.isPoneAvailable(newVal)) {
         this.phoneNumState = 'success'
        } else {
         this.phoneNumState = 'error'
        }
        if (newVal == '') { // 如果输入为空，取消状态显示
         this.phoneNumState = ''
        }
      },
    },
    methods: {

      goBack(){
        this.$router.go(-1);
      },
    },

  }

</script>

<style lang="stylus" scoped>


</style>
