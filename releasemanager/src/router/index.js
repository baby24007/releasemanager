import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Tools from '@/components/Tools'
import User from '@/components/User'
import List from '@/components/List'
import Login from '@/components/Login'
// 將VueRouter注入Vue
Vue.use(Router)
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
let bus = window.eventBus = new Vue()
let router = new Router({
  routes: [
    // 动态路径参数 以冒号开头
    {
      path: '/',
      component: Home,
      meta: {
        title: '首页', icon: 'icon-home'
      },
      children: [
        // 当 /user/:id 匹配成功，
        // UserHome 会被渲染在 User 的 <router-view> 中
        {path: '/home/list/:project', component: List, props: true}

        // ...其他子路由
      ]},
    {path: '/tools', component: Tools, meta: {title: '工具', icon: 'icon-app'}},
    {
      path: '/user',
      component: User,
      meta: {
        title: '我的', icon: 'icon-my'
      },
      children: [
        // 当 /user/:id 匹配成功，
        // UserHome 会被渲染在 User 的 <router-view> 中
        {path: '/user/login', component: Login}

        // ...其他子路由
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
    bus.$emit('updateTitle', to.meta.title)
  }
  next()
})
export default router
