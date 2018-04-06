import Vue from 'vue'
import Router from 'vue-router'
import Release from '@/components/Release'
import Tools from '@/components/Tools'
import User from '@/components/User'
import List from '@/components/List'
import Login from '@/components/Login'
// 將VueRouter注入Vue
Vue.use(Router)
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
export default new Router({
  routes: [
    // 动态路径参数 以冒号开头
    {path: '/release', component: Release},
    {path: '/tools', component: Tools},
    {path: '/user', component: User},
    {path: '/list/:project', component: List, props: true},
    {path: '/login', component: Login}
  ]
})
