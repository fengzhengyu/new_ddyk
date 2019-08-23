<template>
  <div class="home">
    <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
       <div slot="top" class="mint-loadmore-top" >
        <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓下拉加载</span>
        <span v-show="topStatus === 'loading'">加载中...</span>
      </div>
      <div class="header">
      <!-- 搜索组件 -->
      <headerSearch></headerSearch>
      <!-- 头部导航组件 -->
      <!-- <headerNav></headerNav> -->
      <!-- 轮播图组件 -->
      <carousel class="header-carousel"></carousel>
    
        <div class="header-bg"></div>
      </div>
      <!-- 分类导航组件 -->
      <categoryNav></categoryNav>
      <!-- 活动区域组件 -->
      <activity></activity>  
      <!-- 商品列表组件 -->
     
      <goodsList
        :goodsList="goodsList"
        :loading="end"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
      
      ></goodsList>
    </mt-loadmore>
    <v-footer></v-footer>
     <GoTop></GoTop>
  
  </div>

</template>

<script type="text/ecmascript-6">

import headerSearch from "@/components/Index/SearchComponent.vue";
import headerNav from "@/components/Index/NavComponent.vue";
import carousel from "@/components/Index/CarouselComponent.vue";
import categoryNav from "@/components/Index/CategoryNavComponent.vue";
import activity from "@/components/Index/ActivityComponent.vue";
import goodsList from "@/components/Index/GoodsListComponent.vue";
import footer from "@/components/common/Footer.vue";
import GoTop from '@/components/common/GoTop'

export default {
  data() {
    return {
      changeIndex: 0,
      goodsList: [1,2,3,4,5,6,7,8,9,10],
      loading: false,
      end: false,
      topStatus: '',
    };
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
  },
  components: {
 
    headerSearch,
    headerNav,
    carousel,
    categoryNav,
    activity,
    goodsList,
    'v-footer': footer,
     GoTop,

  }
};
</script>

<style scoped lang="stylus">
.home
  padding-bottom px2rem(120)
  
.header
  width:  px2rem(750)
  // height: px2rem(490)
  font-size: $font-info
  position relative

  background: linear-gradient(to right, #fd4926 , #fea024)
  .header-bg
    position absolute
    bottom -1px
    width  px2rem(750)
    height px2rem(134)
    background-image  url('../assets/images/header-bg.png') 
    background-size  px2rem(750) px2rem(134)
    z-index 5
 

   
  .header-carousel
    width px2rem(690px)
    height px2rem(300)
    background #fdd1e8 
    margin 0 auto 
    position relative
    z-index 6
    border-radius px2rem(10)

</style>
