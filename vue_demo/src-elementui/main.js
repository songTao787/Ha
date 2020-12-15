/*
入口js
*/ 
import Vue from 'vue'
import App from './App'
//element-ui全局引用
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'


// import { TabContainer, TabContainerItem } from 'mint-ui';
// import { Navbar, TabItem } from 'mint-ui';
// import { Cell } from 'mint-ui';
// import 'mint-ui/lib/style.css'
// Vue.component(Cell.name, Cell);
// Vue.component(Navbar.name, Navbar);
// Vue.component(TabContainer.name, TabContainer);
// Vue.component(TabContainerItem.name, TabContainerItem);
// Vue.component(TabItem.name, TabItem);
//mint-ui全局引入
// import Mint from'mint-ui'
// import'mint-ui/lib/style.css'


// Vue.use(Mint);
Vue.use(ElementUI)
new Vue({
    el:'#app',
    components:{App},
    template:'<App/>' ,//指定需要的渲染到的模板
    
})