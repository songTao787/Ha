import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import http from '../http'
import { Toast } from 'vant';
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Toast);
Vue.use(Vant)
Vue.prototype.$http  = http //为vue添加一个$http属性 值为http.js的http 
Vue.prototype.$msg  =  Toast   //vant组件的轻提示

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render : h => h(App),
  router 
})