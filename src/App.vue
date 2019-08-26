<template>
  <div id="app">
   
    <keep-alive>
        <router-view class="view"
                  transition
                  transition-mode="out-in"
                   v-if="$route.meta.keepAlive"
                   
                  >
        </router-view>
    </keep-alive>
    <router-view class="view"
                  transition
                  transition-mode="out-in"
                   v-if="!$route.meta.keepAlive"
                  >
    </router-view>
 
  </div>
</template>


<script>
// import Header from "@/components/common/Header.vue";
// import project from "@/components/Index/Project.vue";
// import Footer from "@/components/common/Footer.vue";
export default {
  name: 'App',
  components: {
  //   Header,
  // Footer  
  }
}
</script>
<style scoped lang="stylus">
  #app{
  
    background #f2f2f2
   
  }
</style>

