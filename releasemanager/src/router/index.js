import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Tools from '@/components/Tools'
import User from '@/components/User'
import Navbar from '@/components/Navbar/Navbar'
// import HeaderStateBar from '@/components/Header/HeaderStateBar'
// import HeaderUserInfo from '@/components/Header/HeaderUserInfo'
import List from '@/components/List/List'
import ListDetail from '@/components/List/ListDetail'
import Login from '@/components/Login'
// TODO为什么有个@
// TODO 还不知道怎么用呢
import NotFoundComponent from '@/components/NotFoundComponent'

// 將VueRouter注入Vue
Vue.use(Router)
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
// let bus = window.eventBus = new Vue()
let router = new Router({
  // 路由的 history 模式, URL 就像正常的 ur
  mode: 'history',
  routes: [
    // 应该在 Vue 应用里面覆盖所有的路由情况，然后在给出一个 404 页面
    { path: '*', component: NotFoundComponent },
    // 动态路径参数 以冒号开头
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        nav: Navbar
      },
      meta: {
        title: '首页', icon: 'icon-home'
      }
    },
    {
      path: '/tools',
      components: {
        default: Tools,
        nav: Navbar
      },
      name: 'tools',
      meta: {
        title: '工具',
        icon: 'icon-app'
      }
    },
    {
      path: '/user',
      components: {
        default: User,
        nav: Navbar
      },
      name: 'user',
      meta: {
        title: '我的', icon: 'icon-my', keepAlive: true
      },
      children: [
        // 当 /user/:id 匹配成功，
        // UserHome 会被渲染在 User 的 <router-view> 中
        {
          path: 'login',
          component: Login
        }

        // ...其他子路由
      ]
    },
    {
      path: '/list/:env',
      component: List,
      children: [
        {
          path: '/list/:env/:id', component: ListDetail}

        // ...其他子路由
      ]
    }
  ]
})

export default router
