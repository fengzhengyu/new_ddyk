// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'



import 'assets/css/index.styl'
import 'assets/js/base'
import 'assets/css/font.styl'
Vue.config.productionTip = false

//引入 MintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use( MintUI)

// 自定义事件

Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  },
})  


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
