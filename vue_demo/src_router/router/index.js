import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import About from '../views/About'
import Home from '../views/Home'
import Messages from '../views/Message'
import News from '../views/News'
import Detailitem from '../views/Detailitem'
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'/home/news',
                    component:News
                },
                {
                    path:'/home/messages',
                    component:Messages,
                    children:[
                        {
                            path:'/home/messages/Detailitem/:id',
                            component:Detailitem,
                        }
                    ]
                },
            ]
        },
    ]
})
