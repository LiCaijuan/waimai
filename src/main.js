/*
  入口JS
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import VueLazyLoad from 'vue-lazyload'

import './mock/mockServer'//加载mockServer即可
import loading from 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=50535629,284896479&fm=26&gp=0.jpg'

//注册全局组件标签
Vue.component(Button.name,Button)//<mt-button>
Vue.use(VueLazyLoad,{//内部自定义一个指令lazy
  loading
})
new Vue({

  el:'#app',
  render: h => h(App),
  router, //使用上vue-router
  store,   //使用上vuex
})
