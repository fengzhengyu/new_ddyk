<template>
    <div>
        <div class="header">
            <div class="back"  @click="$router.go(-1)">
                <i class="iconfont icon-shangyiye"></i>
            </div>
            <div class="back-go"  @click="$router.push({path: '/'})"> <i class="iconfont icon-zhuye"></i> </div>
        </div>
        <div class="detail" >
            <div class="img-wrap">
                    <mt-swipe :auto="0">
                    <mt-swipe-item>1</mt-swipe-item>
                    <mt-swipe-item>2</mt-swipe-item>
                    <mt-swipe-item>3</mt-swipe-item>
                </mt-swipe>
            </div>
            <div class="text-info">
            
                <h1 class="detail-title">第三个第三个是规范的观点电饭锅第三个第三个是规范的观点电饭锅</h1>
            
                <p  class="detail-text">
                    <span class="name">批准文号：</span>
                    <span class="text">国药准字Z20033093</span>
                </p>
                <p class="detail-text">
                    <span class="name">招商热度：</span>
                    <span class="text">1233333</span>
                </p>
                <p class="detail-text">
                    <span class="name">洽谈次数：</span>
                    <span class="text">999</span>
                </p>
                <p class="detail-text">
                    <span class="name">生产企业：</span>
                    <span class="text">黑龙江省济仁药业有限公司黑龙江省济仁药业有限公司</span>
                </p>
                <p class="detail-text">
                    <span class="name">店铺：</span>
                    <span class="text">某某某店铺</span>
                </p>
                <p class="detail-text">
                    <span class="name">营业执照：</span>
                    <span class="text line" @click="show('https://gcpt.hnxjksm.com/hnxjkSvn/Uploads/Supplier/1566025516443.jpg')">查看</span>
                </p>
                <p class="detail-text">
                    <span class="name">经营资质：</span>
                    <span class="text line" @click="show('https://gcpt.hnxjksm.com/hnxjkSvn/Uploads/Supplier/1566383715880.jpg')">查看</span>
                </p>

            
                <div class="desc" ></div>
            </div>
        </div>
        <div class="footer">
            <div class="item" @click="$router.push({name:'company'})">
                <i slot="icon" class="iconfont icon-dianpu footer-icon"></i>
                <span class="footer-text ">厂家</span>
            </div>
            <div class="item"   @click="goCollect">
                <i slot="icon" class="iconfont icon-shoucang footer-icon"></i>
                <span class="footer-text "> 收藏</span>
            </div>
        
            <div class="item talk" @click="goTalk">
                <i slot="icon" class="iconfont icon-bohao footer-icon"></i>
                <span class="footer-text ">我要洽谈</span>
            </div>
        </div>
        <div class="imagePopup" v-if="isShow" @click="isShow =!isShow">
            <img :src="showImage" alt="">
           
            
        </div>
    </div>
    
</template>
<script>

    // import Swiper from 'components/common/Swiper'
    export default {
        data() {
            return {
                goods: {},
                showImage: '',
                isShow:false
             
            }
        },
        created(){
          
        
        },
        computed: {
         
        },

        mounted(){
             this.$nextTick(() => {
             
              })      
        },
        methods: {
            
      
            //去收藏
            async goCollect(){
                // if(!this.userCode){
                //     this.$toast({
                //         message: '请登录',
                //         position: 'middle',
                //         duration: 2000
                //     });
                //     setTimeout(()=>{
                //         this.$router.push({
                //             name: 'login'
                //         });
                //     },500)
                //     return;
                //  }
                // let {data:res} = await getCollectData({goodsId: this.$route.params.goodsId,userCode: this.userCode});
                // this.$toast({
                //     message: res.info,
                //     position:'middle',
                //     duration: 2000
                // });
            },
            // 洽谈
            goTalk(){

            },
            show(url){
                this.isShow = true;
                
                this.showImage = url;
               
            }
        },
      
        components: {
            // Swiper
        },
        beforeRouteLeave (to, from, next) {  
            if (to.name == 'goods') {
            to.meta.isUseCache = true; 
            }  
            next();
        },
      
    }
</script>
<style lang="stylus" scoped>


.header
    width px2rem(750)
    position fixed
    top 0
    z-index 100
   
    .back
        width px2rem(40)
        height px2rem(40)
        padding px2rem(40)
        cursor pointer
        i 
            color #919191
            font-size px2rem(40)
    .back-go
        position absolute
        right 0
        top 0
        padding  px2rem(40)
        cursor pointer
        i   
            color #919191
            font-size px2rem(40)

.detail
   
    width px2rem(750)
    position relative
    padding-bottom  px2rem(120)
    background #fff
    // overflow-y scroll
    height auto
   
       
    .img-wrap
        width  px2rem(750)
        height  px2rem(750)
        background green
    .text-info
        padding px2rem(30)
        width px2rem(690)
        h1
            width px2rem(690)
            padding px2rem(45) 0
            color #474747
            font-size 24px
          
            no-wrap()    
        p 
            display flex
            width px2rem(690)
            padding-bottom px2rem(45)
            color #939393
            font-size 16px
            .name
                flex  0 0 px2rem(190)
            .text
                flex 1    
                width 100%
                no-wrap()
                &.line
                    text-decoration underline
                    color #fd4926
        .desc 
            width 100%
            img 
                width 100%
            
.footer
    height px2rem(120)
    position fixed
    width px2rem(750)
    bottom 0
   
    width  px2rem(750)
    display flex
    justify-content center
    align-items center  
    border-top 1px solid #cccccc
       
    .item
        flex 1
        text-align center
        height 100%
        color #737373
        display flex
        justify-content center
        flex-flow column
        align-items center  
        background #fff
        
        .footer-icon
            color #c4c4c4
            position relative
            display block
            font-size 22px
        
        .footer-text 
            display block
            // font-weight 700
            padding-top px2rem(5)
            font-size 12px
        &.talk
            background #1db833
            color #fff
            .footer-icon
                color #fff
.imagePopup
    position fixed
    top 0
    left 0
    right 0
    bottom  0
    background rgba(0,0,0,0.9)
    z-index 99999
    img 
        width px2rem(750)
        height px2rem(750)
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
        background #fff
</style>
