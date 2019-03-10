import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use( VueRouter)

//导入组件

import login from '../login.vue'

//规则
let routes =[
    {
        path:'/login',
        component:login
    }
]

//路由对象
let router =new VueRouter({
    routes
})
export default router;