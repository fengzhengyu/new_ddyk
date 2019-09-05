<template>
    <div class="collect">
        <mt-header  title="收藏列表">
        <router-link to="" slot="left">
          <mt-button icon="back" @click="goBack">返回</mt-button>
        </router-link>
        <mt-button icon="" slot="right" @click="edit">{{showText}}</mt-button>
      </mt-header>

      <div class="list-wrap" id="listWrap"
        v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10"
      > 
         <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore" class="outer">
            <div slot="top" class="mint-loadmore-top" >
            <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓下拉加载</span>
            <span v-show="topStatus === 'loading'">加载中...</span>
          </div>
          <div class="list " :class="{'active':isShow}" v-for="(item,index) in goodsList" :key="index">
            <div class="icon" v-show="isShow">

              <i class="iconfont icon-icon-test"></i>
            </div>
            <div class="goods">
              <div class="img"></div>
              <div class="text">
                <h3>sds的方式时代风格第三方公司对广东省单方事故大概反倒是 大幅度 士大夫fsd</h3>
                <p>洽谈次数：999 </p>
                <div class="btn">我要洽谈</div>{{item}}
              </div>
            </div>
          
          </div>

          <div v-if="goodsList.length>0" class="load-wrap">
                <div class="loading" v-if="!end">
                  <img :src="loadingImg" alt=""> &nbsp;加载中...
                </div>
                <div class="loading" v-else>
                    您已经到底了
                </div>
            </div>
          </mt-loadmore>
        <div class="no-data" v-if="goodsList<=0">暂无收藏</div>
        <div class="line" v-show="isShow"></div>
      </div>
      <div class="del-wrap" v-show="isShow">
        <div class="selectAll">
            全选  <i class="iconfont icon-icon-test"></i>
        </div>
        <div class="delete" >
            <span>删除</span>
        </div>
      </div>
    </div>
</template>
<script>

 
export default {
    data() {
        return {
          isShow: false,
          showText: '编辑',
          goodsList: [1,2,3,4,5,6,7,8,9,10],
          loadingImg: require('../../assets/images/loading-svg/loading-spinning-bubbles.svg'),
          topStatus: '',
          loading: false,
          end: false,
        }
    },
     created(){
                
       
    },
    mounted(){

      this.$nextTick(() => {
        let height = document.documentElement.clientHeight || document.body.clientHeight;
        document.getElementById("listWrap").style.height=  height - 40 +'px';
      })
    },
    
 
    methods: {
        edit(){
           this.isShow = !this.isShow;
           this.isShow ? this.showText = '完成': this.showText = '编辑'
        },
        goBack(){
           this.$router.back()
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
    .list-wrap
      overflow-y scroll   
      .list 
        padding px2rem(20 ) 0
        display flex
        align-items center
        width px2rem(750)
        border-bottom 1px solid #ccc
        background #fff
        .icon 
          width px2rem(90)
          text-align center
          i 
            font-size 18px
            color #939393
            &.active 
              color #939393
        .goods
          flex  1  
          display flex
          padding 0 px2rem(20)
          .img
            width px2rem(200)
            height px2rem(150)
            background pink
            img 
              width 100%
              height 100%
          .text
            flex 1
            padding-left  px2rem(20)
            width px2rem(490)
            h3 
              width 100%
              no-wrap()
              // line-height normal
              padding px2rem(10) 0
              font-size 14px
            p 
              width 100%
              font-size 12px
              color #939393
              no-wrap()
            .btn 
              display inline-block
              padding px2rem(6) px2rem(20)
              line-height:normal
              color #ffffff
              background #fd4926
              cursor pointer
              border-radius px2rem(3)
              font-size 12px  
              margin-top px2rem(10)
        
        &.active 
          .goods
            padding 0 
            .text
                width px2rem(460)
      .line
        height 66px 
      .no-data
        line-height 66px 
        text-align center
        font-size 16px
        color #939393
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

    .del-wrap   
      position fixed   
      bottom 0
      width px2rem(750)
      display flex
      align-items center
      background #fff
      padding 15px 0
      
      .selectAll
        width px2rem(150)
        text-align center
        font-size 16px

        i 
          font-size 18px
          color #939393
          vertical-align middle
      .delete
        flex 1
       
        span 
          float right 
          padding 10px 20px
          background #fd4926
          font-size 16px
          margin-right 30px
          color #ffffff
          border-radius 2px

       
                  
</style>

