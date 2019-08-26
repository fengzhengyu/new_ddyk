<template>
  <div class="category">
   <v-header class="header"></v-header>
   <div class="content">
     <div class="menu-wrap"  id="menu-wrap">
       <ul >
          <li class="menu-item" :class="{'active':changeIndex == (index+1)}" v-for="(item,index) in category" :key="index" @click="tabCategory(index)">
          <i class=" iconfont icon-search icon" ></i>{{item}}
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
       <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
          <div slot="top" class="mint-loadmore-top" >
            <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓下拉加载</span>
            <span v-show="topStatus === 'loading'">加载中...</span>
          </div>
          <ul class="goods-box"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
          >
            <li class="goods-item" @click="goDetail()" v-for="(item,index) in goodsList" :key="index">
              <div class="img"></div>
              <div class="info">
                <h3 class="category-goods-title">小儿清热止咳颗粒</h3>
                <p class="category-goods-text">黑龙江省济仁药业有限公司123</p>
                <p class="category-goods-text">招商热度：</p>
                <p class="category-goods-text">洽谈次数：999</p>
                <div class="btn-wrap">
                  <div class="category-goods-btn"  @click.stop="goTalk(item)">我要洽谈</div>{{item}}
                </div>
              </div>
            </li>
            
          </ul>
          <div v-if="goodsList.length>0" class="load-wrap">
              <div class="loading" v-if="!end">
                <img :src="loadingImg" alt=""> &nbsp;加载中...
              </div>
              <div class="loading" v-else>
                  您已经到底了
              </div>
          </div>
        </mt-loadmore>
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
      filterIndex: 0,
      category: ['中成药','中药材','中药饮片','大健康','医疗器械','加工设备','包装设备','医美药妆','母婴用品','成人用品'],
      goodsList: [1,2,3,4,5,6,7,8,9,10],
      loading: false,
      end: false,
      loadingImg: require('../assets/images/loading-svg/loading-spinning-bubbles.svg'),
      topStatus: '',

    };
  },
  created(){
      this.changeIndex = this.$route.query.id || 1;
  },
  computed: {
   
  },
  methods: {
    goDetail(){
      this.$router.push({
        name:'product'
      })
    },
    tabCategory(index){
      this.changeIndex = index+1;
    },
    tabFilter(index){

    },
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
    loadTop(){
       this.handleTopChange("loading");
        setTimeout(() => {
           this.goodsList = [1,2,3,4,5,6,7,8,9,10];    
            this.handleTopChange("loadingEnd")//数据加载完毕 修改状态码
            this.$refs.loadmore.onTopLoaded();
        }, 1500);


    },
    handleTopChange(status) {
      this.topStatus = status;
    },
    goTalk(item){
      console.log(item)
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
    .header
      position static
    .content
      // position fixed
      // top px2rem(120)
      // bottom  px2rem(120)
      display flex
      width px2rem(750)
      background #fff
      .menu-wrap
        flex 0 0 px2rem(200)
        overflow-y scroll 
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
            &.active  
              color #fd4926
              i 
                color #fd4926
              
            
            
      .goods-wrap
        flex 1
        margin-left px2rem(20)
        overflow-y scroll
        padding-top px2rem(80)
       
        .nav-div
          padding  px2rem(30) px2rem(30) px2rem(10) 0
          display flex
          justify-content space-between
          box-sizing border-box
          position fixed
          background #ffffff
          width px2rem(530)
          top  px2rem(120)
          z-index 999
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
        .load-wrap
          width  100%

          .loading
            text-align center
            line-height px2rem(70)
            color #333
            img
              display inline-block
              vertical-align middle
              width px2rem(40)
              height px2rem(40)

  



</style>
