<template>
  <div class="goods">
    <ul class="list-wrap" v-if="goodsList.length>0">
      <!-- <li class="list-item">
       <div class="img"></div>
       <div class="info">
         <h3 class="index-goods-title">小儿清热止咳颗粒</h3>
         <p  class="index-goods-text">
           <span>招商热度：</span>
           <span class="heat-wrap">123</span>
         </p>
         <p  class="index-goods-text">
            <span>洽谈次数：</span>
            <span>999</span>
         </p>
         <div class="btn-wap">
            <div class="btn index-goods-btn">我要洽谈</div>
         </div>
       </div>
      </li>-->
      <li class="list-item" v-for="item in goodsList" @click="goDetail(item)">
        <div class="img"></div>
        <div class="info">
          <h3 class="index-goods-title">小儿清热止咳颗粒</h3>
          <p class="index-goods-text">
            <span>招商热度：</span>
            <span class="heat-wrap">123</span>
          </p>
          <p class="index-goods-text">
            <span>洽谈次数：</span>
            <span>999</span>
          </p>
          <div class="btn-wap">
            <div class="btn index-goods-btn" @click.stop="goTalk(item)">我要洽谈</div>
            {{item}}
          </div>
        </div>
      </li>
        <div v-if="goodsList.length>0" class="load-wrap">
            <div class="loading" v-if="!loading">
               <img :src="loadingImg" alt=""> &nbsp;加载中...
            </div>
            <div class="loading" v-else>
                您已经到底了
            </div>
        </div>
    </ul>
    <div class="no-data" v-else>
      暂无数据
    </div>
  </div>
</template>

<script>
export default {
  props: ["goodsList","loading"],
  data(){
    return {
      loadingImg: require('../../assets/images/loading-svg/loading-spinning-bubbles.svg')
    }
  },
  methods: {
    goDetail(item){
      this.$router.push({
        name: 'product'
      })
    },
    goTalk(item){
      console.log(item)
    }
  }
};
</script>
<style scoped lang="stylus">
.goods 
  margin: px2rem(20) 0 0 0

  .list-wrap 
    width: 100%
    display: flex
    flex-flow: row wrap
    justify-content: space-between

    .list-item 
      width: px2rem(365);
      // height px2rem(370)
      background: #fff
      margin-bottom: px2rem(20)

      .img 
        width: 100%
        height: px2rem(365)
        background: #63c343

        img 
          width: 100%
          height: 100%
        
      

      .info 
        padding: 0 px2rem(20) px2rem(20) px2rem(20)
        h3 
          width: 100%
          padding: px2rem(20) 0
          // font-weight 700
          color: #000
          no-wrap()
        

        p 
          color: #939393
          padding-bottom: px2rem(20)
          // font-weight 700
        

        .btn-wap 
          display: flex
          width: 100%;
          flex-flow: row
          justify-content: space-between

          .btn 
            padding: px2rem(10) px2rem(30)
            line-height: normal
            color: #ffffff
            font-weight: 400
            background: #fd4926
            cursor: pointer
            border-radius: px2rem(3)
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
         
  .no-data 
    min-height: px2rem(400)
    line-height: px2rem(400)
    text-align: center
    color: #000000
    font-size: px2rem(24)
  

</style>
