
import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register'
import Login from '../views/Login'
import Userinfo from '../views/Userinfo'
import edit from '../views/Edit'
import Home from '../views/Home'
import Article from '../views/Article'
import EditCategory from '../views/EditCategory'
Vue.use(VueRouter)


     const routes = [
        {
            path:'/',
            component:Home,
            meta:{
                keepalive:true //指定模块的是否保持活力
            }  
        },
        {
            path:'/article/register',
            component:Register,
        },
        {
            path:'/article/login',
            component:Login,
        },
        {
            path:'/article/userinfo',
            component:Userinfo,
        },
        {
            path:'/home',
            redirect:Home,
            meta:{
                isToken :true
            }
        },
        {
           path:'/edit',
           component:edit,
           meta:{
            isToken :true
            }
        },
        {
            path:'/article/:id', //接受id
            component:Article,
        },
        {
            path:'/editcategory',
            component:EditCategory,
        }
       
        
    ]
    

const router = new VueRouter({
    routes,
    mode:'history'
})
router.beforeEach((to,from,next) => {  //设置路由拦截   
        if(!localStorage.getItem('token')&& !localStorage.getItem('id') && to.meta.isToken == true){
            this.$router.push('/login')
            Vue.prototype.$msg.fail('请重新登录')
            return
        }
        next()  
    })
export default router