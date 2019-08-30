import Vue from 'vue'
import Router from 'vue-router'
import Home from 'page/Index';   //主页
import Category from 'page/Category';   //分类页
import Member from 'page/Member';   //会员页
import ProductDetail from 'page/ProductDetail';   //产品详情页
import Search from 'page/Search';   //搜索
import SearchResult from 'page/SearchResult';   //搜搜列表
import Company from 'page/Company';   //厂家列表
import Login from 'page/Login';   //厂家列表
import Register from 'page/Register';   //厂家列表



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

    // company
    {
      path: '/company',
      name: 'company',
      component: Company
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
    },
    // Member
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
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
