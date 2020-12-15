/*
入口js
*/ 
import Vue from 'vue'
import App from './App'
import router from './router'

new Vue({
    el:'#app',
    components:{App},
    template:'<App/>' ,//指定需要的渲染到的模板
    router //注册路由
    
})