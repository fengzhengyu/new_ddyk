<template>
    <div class="search-page">
        <div class="header">
            <div class="search-back" @click="goBack">
                <i class="iconfont icon-shangyiye"></i>
            </div>
            <div class="search-search">
                <i class="iconfont icon-sousuo icon" @click="goSearch" @keyup.enter = "goSearch"></i>
                    <form action="javascript:void(0)">
                        <input type="search" placeholder="搜索商品" v-model="keyword"  @keyup.enter="goSearch" >
                    </form>
                
            </div>
            <div class="text search-search-text" @click="goSearch"  @keyup.enter = "goSearch">搜索</div>
        </div>
       
        <div class="search-list">
         <!-- 商品列表组件 -->
     
        <goodsList
            :goodsList="goodsList"
            :loading="end"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
        
        ></goodsList>
            
        </div>
       
   
       
    </div>
</template>
<script>
import goodsList from "@/components/Index/GoodsListComponent.vue";
 
export default {
    data() {
        return {
            keyword:'',
            goodsList: [],
            isLoad: false,
            page:1,
            loading:false,//
            end:false,//
            goodsList: [1,2,3,4,5,6,7,8,9,10],
            
             
        }
    },
     created(){
           
          this.keyword = this.$route.params.name;  
                
       
    },
     watch:{
      keyword(val){
        if(val == ''){
         this.$router.back()
        }
      }

    },
    methods: {
        async goSearch(){
         
             
        },
        loadMore(){
            this.loading = true;
            setTimeout(() => {

            
                let last = this.goodsList[this.goodsList.length - 1];
                if(last>=50){
                this.loading = false;
                this.end = true;
                return;
                }
                for (let i = 1; i <= 10; i++) {
                
                this.goodsList.push(last + i);

                }
                
                this.loading = false;
            }, 300);
        },
        goBack(){
           this.$router.back()
        }
    },
    components:{
        goodsList,
    }
    
}
</script>
<style lang="stylus" scoped>
    .search-page
        width px2rem(750)
        margin 0 auto  
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        background #f2f2f2
    
    
        .header  
            width px2rem(750)
            overflow hidden
            position fixed
            background #fff
            z-index 9999
            display  flex
            align-items center
            .search-back
                padding  px2rem(30)
                color #717171
            .search-search
                background #fff
                flex 1
                width px2rem(550)
                height px2rem(60)
                border-radius px2rem(20)
                overflow hidden
                position relative
                .icon    
                    color #717171
                    
                    display block
                    position absolute
                    top 50%
                    left px2rem(15)
                    font-size 16px
                    margin-top -8px

                        
                input 
                    background #ededed
                    color #000
                    width px2rem(550)
                    height px2rem(60)
                    border-radius 0.2rem 
                    padding-left px2rem(60)
                    box-sizing border-box
                    outline none
                    line-height px2rem(60)
                    font-size 12px
            .text
                width px2rem(100)
                color #717171
                text-align center
                font-size 12px
      
        .search-list
            margin-top px2rem(102)
           
              
                  
</style>

