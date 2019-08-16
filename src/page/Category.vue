<template>
  <div class="category">
   <v-header class="header"></v-header>
   <div class="content">
     <div class="menu-wrap"  id="menu-wrap">
       <ul >
          <li class="menu-item">
          <i class=" iconfont icon-search icon" ></i>中成药
         </li>
         <li class="menu-item">
          <i class=" iconfont icon-search icon" ></i> 中药材
         </li>
         <li class="menu-item">
          <i class=" iconfont icon-search icon" ></i> 中药饮片
         </li>
         <li class="menu-item">
            <i class=" iconfont icon-search icon" ></i>大健康
         </li>
       
         <li class="menu-item">
          <i class=" iconfont icon-search icon" ></i>医疗器械
         </li>
         <li class="menu-item">
          <i class=" iconfont icon-search icon" ></i>加工设备
         </li>
          <li class="menu-item">
            <i class=" iconfont icon-search icon" ></i>包装设备
         </li>
         <li class="menu-item">
          <i class=" iconfont icon-search icon" ></i>医美药妆
         </li>
         <li class="menu-item">
          <i class=" iconfont icon-search icon" ></i>母婴用品
          
         </li>
          <li class="menu-item">
          <i class=" iconfont icon-search icon" ></i>成人用品
         
         </li>
      
         
       </ul>
     </div>
     <div class="goods-wrap">
       <div class="nav-div category-nav-text">
         <div class="active">综合<i class="iconfont icon-xiaosanjiaodown"></i></div>
         <div>热度<i class="iconfont icon-xiaosanjiaodown"></i></div>
         <div>洽谈<i class="iconfont icon-xiaosanjiaodown"></i></div>
         <div>收藏<i class="iconfont icon-xiaosanjiaodown"></i></div>
       </div>
        <ul class="goods-box">
          <li class="goods-item" @click="goDetail()">
            <div class="img"></div>
            <div class="info">
              <h3 class="category-goods-title">小儿清热止咳颗粒</h3>
              <p class="category-goods-text">黑龙江省济仁药业有限公司123</p>
              <p class="category-goods-text">招商热度：</p>
              <p class="category-goods-text">洽谈次数：999</p>
              <div class="btn-wrap">
                <div class="category-goods-btn">我要洽谈</div>
              </div>
            </div>
          </li>
           <li class="goods-item" @click="goDetail()">
            <div class="img"></div>
            <div class="info">
              <h3 class="category-goods-title">小儿清热止咳颗粒</h3>
              <p class="category-goods-text">黑龙江省济仁药业有限公司123</p>
              <p class="category-goods-text">招商热度：</p>
              <p class="category-goods-text">洽谈次数：999</p>
              <div class="btn-wrap">
                <div class="category-goods-btn">我要洽谈</div>
              </div>
            </div>
          </li>
           <li class="goods-item" @click="goDetail()">
            <div class="img"></div>
            <div class="info">
              <h3 class="category-goods-title">小儿清热止咳颗粒</h3>
              <p class="category-goods-text">黑龙江省济仁药业有限公司123</p>
              <p class="category-goods-text">招商热度：</p>
              <p class="category-goods-text">洽谈次数：999</p>
              <div class="btn-wrap">
                <div class="category-goods-btn">我要洽谈</div>
              </div>
            </div>
          </li>
           <li class="goods-item" @click="goDetail()">
            <div class="img"></div>
            <div class="info">
              <h3 class="category-goods-title">小儿清热止咳颗粒</h3>
              <p class="category-goods-text">黑龙江省济仁药业有限公司123</p>
              <p class="category-goods-text">招商热度：</p>
              <p class="category-goods-text">洽谈次数：999</p>
              <div class="btn-wrap">
                <div class="category-goods-btn">我要洽谈</div>
              </div>
            </div>
          </li>
        </ul>
        <div>暂无数据</div>
     </div>
   </div>
   <v-footer  class="footer"></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">

import header from '@/components/Category/Header.vue';
import footer from '@/components/common/Footer.vue';


export default {
  data() {
    return {
      changeIndex: 0,
      
    };
  },
  computed: {
   
  },
  methods: {
    goDetail(){
      this.$router.push({
        name:'product'
      })
    }
  },
  
  components: {

    'v-header':  header ,
    'v-footer':  footer 
  }
};
</script>

<style scoped lang="stylus">
  .category
    .content
      position fixed
      top px2rem(120)
      bottom  px2rem(120)
      display flex
      width px2rem(750)
      background #fff
      .menu-wrap
        flex 0 0 px2rem(200)
        overflow-y: scroll;
        ul
         
          .menu-item
            height px2rem(100)
            line-height px2rem(100)
            border-right  1px solid #ccc
            border-bottom  1px solid #ccc
           
            // font-weight 700
            color #666666
            i 
              color #b2b2b2
              vertical-align middle
              padding 0 px2rem(15)
              
            
            
      .goods-wrap
        flex 1
        margin-left px2rem(20)
        overflow-y: scroll;
       
        .nav-div
          padding  px2rem(30) px2rem(30) px2rem(10) 0
          display flex
          justify-content space-between
          box-sizing border-box
          position fixed
          background #ffffff
          width px2rem(530)
          div 
            width px2rem(105)
            height px2rem(40)
            line-height px2rem(40)
            background #e7e7e7
            border-radius px2rem(20)
            text-align center
         
            i 
              
              color #666666
              vertical-align top
         
            &.active
              color #fd4926
              i 
                color #fd4926
        .goods-box
          width 100%
          padding-top px2rem(80)
          .goods-item
            border-bottom 1px solid #ddd
            padding px2rem(20)  px2rem(30) px2rem(20)   0
            display flex

            .img
              width px2rem(225)
              height px2rem(225)
              background #999
              margin-right px2rem(20)

              img 
                width 100%
                height 100%
            .info
              flex 1
              width px2rem(245)
              .category-goods-title 
                line-height normal
                width 100%
                // font-weight 700
                no-wrap()    
              .category-goods-text
                width 100%
                no-wrap()   
                color #939393
                padding-top  px2rem(15)
                // font-weight 700
              .btn-wrap
                display flex
                flex-flow row
                justify-content space-between
                padding-top px2rem(15)
                .category-goods-btn
                  padding px2rem(6) px2rem(20)
                  line-height:normal
                  color #ffffff
                  background #fd4926
                  cursor pointer
                  border-radius px2rem(3)


  



</style>
