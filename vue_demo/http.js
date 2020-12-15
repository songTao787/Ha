import axios from 'axios'
import Vue from 'vue'
import router from './src/router'
const http = axios.create({
    baseURL:'http://112.74.99.5:3000/web/api'  //自定义创建一个新的请求
})


// 添加请求拦截器
http.interceptors.request.use(function (config) {
    if(localStorage.getItem('token') && localStorage.getItem('id')){
        config.headers.Authorization = 'Bearer ' +localStorage.getItem('token')
    }
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
http.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
      if(error.response.status ==401 || error.response.status == 402){
          router.push('./login')
          Vue.prototype.$msg.fail(error.response.data.message)
      }
    // 对响应错误做点什么
    return Promise.reject(error);
  });
export default http