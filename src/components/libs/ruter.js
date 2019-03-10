import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use( VueRouter)

//导入组件

import login from '../login.vue'

//导入index
import index from '../index.vue'

//规则
let routes =[
     {
         path:'/',
         component:index
     }
    ,{
        path:'/login',
        component:login
    },
    {
        path:'/index',
        component:index
    }
]

//路由对象
let router =new VueRouter({
    routes
})
export default router;