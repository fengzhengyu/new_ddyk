import Vue from 'vue'
import Router from 'vue-router'
import Home from 'page/Index';   //主页
import Category from 'page/Category';   //分类页
import ProductDetail from 'page/ProductDetail';   //产品详情页
import Search from 'page/Search';   //产品详情页
import SearchResult from 'page/SearchResult';   //产品详情页


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home,
     
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/product',
      name: 'product',
      component: ProductDetail
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/search/:name',
      name: 'searchName',
      component: SearchResult
    }
  ],
  scrollBehavior (to, from, savedPosition) {

    if (savedPosition) {
    
      return savedPosition
    } else {
      if (from.meta.keepAlive) {  
        from.meta.savedPosition = document.body.scrollTop;  
       }  
       return { x: 0, y: to.meta.savedPosition || 0 } 
     
    }
  }
})
