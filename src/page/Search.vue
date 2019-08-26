<template>
    <div class="search-page">
        <div class="header">
            <div class="search-back" @click="goBack">
                <i class="iconfont icon-fanhui "></i>
            </div>
            <div class="search-search">
                <i class="iconfont icon-sousuo icon" @click="goSearch" @keyup.enter = "goSearch"></i>
                    <form action="javascript:void(0)">
                        <input type="search" placeholder="搜索商品" v-model="keyword"  @keyup.enter="goSearch" v-focus>
                    </form>
                
            </div>
            <div class="text search-search-text" @click="goSearch"  @keyup.enter = "goSearch">搜索</div>
        </div>
       
        <!-- <div class="search-list">
          <div class="wrap">
            <h2 class="search-search-title">历史记录</h2>
            <i class="iconfont icon-shanchu search-search-delete"></i>
          </div>
          <div class="wrap">
            <p class="search-search-list">胜多负少</p>
            <i class="iconfont icon-guanbi-copy search-search-delete"></i>
          </div>
            
        </div> -->
       
   
       
    </div>
</template>
<script>

 
export default {
    data() {
        return {
            keyword:'',
            goodsList: [],
            isLoad: false,
            page:1,
            loading:true,//
            end:false,//
             
        }
    },
     created(){
           
            //  this.userCode = this.$store.state.userCode;
                
       
    },
     watch:{
      keyword(val){
        if(val == ''){
          this.isLoad= false;
          this.goodsList = [];
        }
      }

    },
    methods: {
        async goSearch(){
         
            if(this.keyword == ''){
                this.$toast({
                    message: '您搜索的内容不能为空',
                    position: 'middle',
                    duration: 3000
                    });
                return;
            }

              this.$router.push({
                    name: 'searchName',
                    params:{name: this.keyword}
                })    


           
             
             
        },
       
        show(){
           this.$toast({
                    message: '请登陆后查看！',
                    position:'middle',
                    duration: 2000
                });
                setTimeout(()=>{
                    this.$router.push({
                        name: 'login'
                    });
                },500)
        },
        goBack(){
           this.$router.back()
        }
    },
    
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
               
            .search-search
                background #fff
                flex 1
                width px2rem(550)
                height px2rem(60)
                border-radius px2rem(20)
                overflow hidden
                position relative
                .icon    
                        color #999
                       
                        display block
                        position absolute
                        top 50%
                        left px2rem(15)
                        font-size 16
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
                color #999
                text-align center
                font-size 12px
      
        .search-list
            margin-top px2rem(102)
            margin px2rem(102) px2rem(0) 0 px2rem(20)
            .wrap
              display flex
              align-items center
              padding px2rem(20) 0  
              line-height normal
              border-bottom 1px solid #ccc
              &:first-child
                border-bottom none
              .search-search-title
                flex 1
                color #474747
              .search-search-list  
                flex 1
                color #474747
              .search-search-delete  
                width  px2rem(80)
                text-align center
                color #999
              
                  
</style>

