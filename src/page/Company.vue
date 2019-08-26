<template>
    <div>
        <div class="header">
            <div class="back"  @click="$router.go(-1)">
                <i class="iconfont icon-fanhui2"></i>
            </div>
          
            <div class="back-go"  @click="$router.push({path: '/company'})"> <i class="iconfont icon-zhuye"></i> </div>
        </div>
        <div class="carousel" >
            <div class="img-wrap">
                    <mt-swipe :auto="0">
                    <mt-swipe-item>1</mt-swipe-item>
                    <mt-swipe-item>2</mt-swipe-item>
                    <mt-swipe-item>3</mt-swipe-item>
                </mt-swipe>
            </div>
           
        </div>
        <div class="company-info">
             <p class="row">
                    <span class="name">店铺名称：</span>
                    <span class="text bold">某某某某某某店铺某某某店铺某某某店铺某某某店铺某某某店铺某某某店铺某某某店铺店铺</span>
                </p>
                <p class="row">
                    <span class="name">营业执照：</span>
                    <span class="text line" @click="show('https://gcpt.hnxjksm.com/hnxjkSvn/Uploads/Supplier/1566025516443.jpg')">查看</span>
                </p>
                <p class="row">
                    <span class="name">经营资质：</span>
                    <span class="text line" @click="show('https://gcpt.hnxjksm.com/hnxjkSvn/Uploads/Supplier/1566383715880.jpg')">查看</span>
                </p>

                
        </div>
        <goodsList
            :goodsList="goodsList"
            :loading="end"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
        
        ></goodsList>
    </div>
    
</template>
<script>
import goodsList from "@/components/Index/GoodsListComponent.vue";
    // import Swiper from 'components/common/Swiper'
    export default {
        data() {
            return {
                goodsList: [1,2,3,4,5,6,7,8,9,10],
                loading: false,
                end: false,
             
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
            loadMore(){
                this.loading = true;
                setTimeout(() => {

                    
                    let last = this.goodsList[this.goodsList.length - 1];
                    if(last>=50){
                        this.loading = true;
                        this.end = true;
                        return;
                    }
                    for (let i = 1; i <= 10; i++) {
                    
                        this.goodsList.push(last + i);

                    }
                    
                    this.loading = false;
                }, 300);
            },
      
           
        },
      
        components: {
            // Swiper
             goodsList,
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
    .title 
        position absolute
        top 0
        left 0
        right 0
        height px2rem(120)          
        line-height px2rem(120)       

    .back-go
        position absolute
        right 0
        top 0
        padding  px2rem(40)
        cursor pointer
        i   
            color #919191
            font-size px2rem(40)

.carousel
   
    width px2rem(750)
    position relative
    background #fff
    // overflow-y scroll
    height auto
   
       
    .img-wrap
        width  px2rem(750)
        height  px2rem(750)
        background green
        img 
            width 100%
            height 100%
.company-info
    padding px2rem(45) px2rem(30) 0 px2rem(30) 
    .row
        display flex
        width 100%
        padding-bottom px2rem(45)
        color #474747   
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
            &.bold
                color #474747   
                font-weight 700 
                font-size 18px 
.company-title
    width px2rem(750)
    text-align center
    height px2rem(80)
    line-height px2rem(80)
    font-weight 700
    color #000
    no-wrap()
  
</style>
