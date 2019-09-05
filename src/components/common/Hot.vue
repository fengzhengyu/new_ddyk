<template>
  <div class="hot clearfix" :class="[type]">
      <div v-for="(item,index) in count" :key="index" :class="{'active':  index<hotIndex}"></div>
      
  </div>
</template>
<script>
export default {
  props:{
      num: {
      type: String,
      default:1
    },
    count: {
      type: Number,
       default:5
    },
    type: {
      type: String,
      default: 'middle'
    },
  },
  computed: {
    hotIndex(){
      let val = 0
      if(this.num>=0&&this.num<500){
        val = 1
      }else  if(this.num>499&&this.num<1000){
        val = 2
      }else if(this.num>999&&this.num<1500){
        val = 3
      }else if(this.num>1499&&this.num<2000){
        val = 4
      }else if(this.num>=2000){
        val = 5
      }else{
        val = 1
      }

      return val;
    }
  }
}
</script>
<style lang="stylus" scoped>
.hot
  display inline-block
  vertical-align baseline
  overflow hidden
  div 
    width px2rem(25)
    height px2rem(25)
    background #b3b3b3
    float left
    margin-right px2rem(6)
    border-radius 1px
   
    &:last-child
      margin-right 0
    &.active 
      background #ff8a01  
  &.small
    vertical-align baseline
    div
      width px2rem(20)
      height px2rem(20)
      margin-right px2rem(4)
  &.big
    vertical-align text-top
    div
      width px2rem(40)
      height px2rem(40)
      margin-right px2rem(12)
     
</style>
