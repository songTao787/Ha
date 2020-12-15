/*
入口js
*/ 
import Vue from 'vue'
import App from './App'
import store from './store'

new Vue({
    el:'#app',
    components:{App},
    template:'<App/>' ,
    store//指定需要的渲染到的模板
})