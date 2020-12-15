import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HeadText from '../views/HeadText'
import FootText from '../views/FootText'


export default new VueRouter({
    routes:[
       {
           path:'/headtext',
           component:HeadText
       },
       {
        path:'/foottext',
        component:FootText
    },
    ]
})
