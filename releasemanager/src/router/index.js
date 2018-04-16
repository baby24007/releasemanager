import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Tools from '@/components/Tools'
import User from '@/components/User'
import Navbar from '@/components/Navbar/Navbar'
import HeaderTitle from '@/components/Header/HeaderTitle'
import HeaderStateBar from '@/components/Header/HeaderStateBar'
import HeaderUserInfo from '@/components/Header/HeaderUserInfo'
import List from '@/components/List/List'
import ListDetail from '@/components/List/ListDetail'
import Login from '@/components/Login'

// 將VueRouter注入Vue
Vue.use(Router)
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
// let bus = window.eventBus = new Vue()
let router = new Router({
  routes: [
    // 动态路径参数 以冒号开头
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        nav: Navbar,
        title: HeaderTitle,
        header: HeaderStateBar
      },
      props: {
        currentView: 'HeaderStateBar'
      },
      meta: {
        title: '首页', icon: 'icon-home'
      }
    },
    {
      path: '/tools',
      components: {
        default: Tools,
        nav: Navbar,
        title: HeaderTitle
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
        nav: Navbar,
        title: HeaderTitle,
        header: HeaderUserInfo
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
