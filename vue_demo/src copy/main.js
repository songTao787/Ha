import Vue from 'vue'
import App from './App'
import store from './store/index'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>',
  render : h => h(App),
  store


})