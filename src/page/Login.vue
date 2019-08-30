<template>
  <div class="login">
  
    <mt-header  title="会员登录">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="goBack">返回</mt-button>
      </router-link>
      <!--<mt-button icon="more" slot="left"></mt-button>-->
    </mt-header>

    <div class="member-main">
   
      <div class="warpper">
          <div class="title">
            <span>手机号</span>
          </div>
          <div class="value">
            <input type="tel" placeholder="请输入您的手机号" maxlength="11" v-model="phone" id="phone">
            <div class="icon" v-show="phoneState" @click="deltext('phone')"> <i class="iconfont icon-tishicuowu"></i></div>
          </div>
      </div>
      <div class="warpper">
          <div class="title">
            <span>密码</span>
          </div>
          <div class="value">
            <input type="password" placeholder="密码不能小于6位" v-model="password" id="password">
            <div class="icon"  v-show="pwdState" @click="deltext('password')"><i class="iconfont icon-tishicuowu"></i></div>
          </div>
      </div>

      <mt-button type="primary" :disabled="passState"  size="large" class="login-btn" >登录</mt-button>
      <mt-button type="default"  size="large" class="login-btn reg" @click="$router.push({name:'register'})">注册新账号</mt-button>
      
     
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  
  export  default {
    data(){
      return {
        phone: '',
        password: '',
      
        phonePass: false,
        pwdPass: false,

      }
    },
    watch: {
      // 手机号判断
     phone(newvalue,oldvalue){
       if(isNaN(newvalue) || newvalue == ' '){
          this.phone = ''
       }
     
       if(newvalue.length>=11){
          let reg=/^1[3456789]{1}\d{9}$/;
            reg.test(newvalue) ?this.phonePass =true: this.phonePass =false;
            console.log( this.phonePass)
       }else{
         this.phonePass =false
       }
     },
    //  密码判断
     password(newvalue,oldvalue){
       newvalue.length>=6? this.pwdPass = true: this.pwdPass = false;
     }
    },
    computed: {
      // 手机号删除显示
      phoneState(){

        return this.phone.length>0?true:false
      },
       // 密码删除显示
      pwdState(){
         return this.password.length>0?true:false
      },
      // 登录通过
       passState(){
         return this.phonePass && this.pwdPass?false:true;
       }
    },
    methods: {
      deltext(type){
     
        if(type == 'phone'){
            this.phone = '';
            document.getElementById('phone').focus();
            return;
        }
         if(type == 'password'){
            this.password = '';
            document.getElementById('password').focus();
            return;
        }
      
      },
     
      goLogin(){
        this.$http.post('http://47.94.249.58/ddyk/index.php/Api/sign/sign',qs.stringify({phone:this.phone,password:this.password})).then(response=>{
          let res = response.data;
        //  console.log(res)
          if(res.flag == 'success'){
            var name = res.data.memberName;
            var phone = res.data.phone;
            var token = res.data.userToken;
            var time = res.data.addTime;
            var photo = res.data.headPhoto;
            var email = res.data.email;
            var goldTotal = res.data.goldTotal;
            this.setCookie('userName',name,1);
            this.setCookie('userPhone',phone,1);
            this.setCookie('userToken',token,1);
            this.setCookie('userPhoto',photo,1);
            this.setCookie('goldTotal',goldTotal,1);
            //this.setCookie('userTime',time,{expires:1,path:'/'});
            // this.setCookie('userEmail',email,{expires:1,path:'/'});
            this.$toast({
              message: res.info,
              position: 'middle',
              duration: 2000
            });
            setTimeout(()=>{
              this.$router.push({
                name:'member'
              });
            },2000);
          }else{
            this.$toast({
              message: res.info,
              position: 'middle',
              duration: 2000
            });
          }

        }).catch(err=>console.log(err));

      },
      goBack(){
        this.$router.go(-1);
      },
    },

  }

</script>

<style lang="stylus" scoped>
.login
  background #fff
  position absolute
  width px2rem(750)
  top 0
  bottom 0
  .mint-header
    background #fd4926
  
  .member-main
    padding px2rem(50)
    background #fff
    .warpper
      display flex
      width 100%
      font-size 14px
      border-bottom 1px solid #d9d9d9
      align-items center
   
      
      padding px2rem(15) 0
      .title
        width px2rem(120)
        span 
            vertical-align middle
      .value 
        flex 1   
        border 0
        outline 0
        align-items center
       
        width: 100%
        display flex
      
        input 
          flex 1
          padding 10px 0
          // background pink
          height 16px
          line-height normal 
          vertical-align middle
          font-size 14px
          
        .icon
          width 30px
          text-align center
          i 
            font-size 16px
            color #999
    .login-btn
    
      display block
      margin  30px auto
      background #fd4926
      &.reg 
         background #ffffff
        //  color  #fd4926



</style>
