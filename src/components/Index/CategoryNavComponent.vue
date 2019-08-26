<template>
  <div >
    <ul class="category-nav">
      <li class="nav-item" v-for="(item,index) in category" :key="index" @click="goCategory(item,index)">
       <img :src="images[index]" alt="">
       <span>{{item}}</span>
      </li>
      
     
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      category: ['中成药','中药材','中药饮片','大健康','医疗器械','加工设备','包装设备','医美药妆','母婴用品','成人用品'],
      images:[
        require('../../assets/images/category1.png'),
        require('../../assets/images/category2.png'),
        require('../../assets/images/category3.png'),
        require('../../assets/images/category4.png'),
        require('../../assets/images/category5.png'),
        require('../../assets/images/category6.png'),
        require('../../assets/images/category7.png'),
        require('../../assets/images/category8.png'),
        require('../../assets/images/category9.png'),
        require('../../assets/images/category10.png'),

      ]
    }
  },
  methods:{
    goCategory(item,i){
       this.$router.push({
        name: 'category',
        query:{id:i+1}
      })
    }
  }
};
</script>
<style scoped lang="stylus">
  .category-nav
    background #fff
    padding px2rem(40) 0 0  0 
    display flex
    flex-flow row wrap 
    justify-content space-between
    
    .nav-item
      width 20%

      margin-bottom px2rem(40)
      text-align center
      color #323232
      cursor pointer
      &:nth-child(5n)
        margin 0
      img 
        width px2rem(100)
        height px2rem(100)
      span 
        width 100%
        margin-top px2rem(15)  
        display block
        font-size 12px
        // font-weight 500
      
</style>
