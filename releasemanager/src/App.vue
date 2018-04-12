<template>
  <div id="app">
    <HeaderBar />
    <Navbar/>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue'
import HeaderBar from './components/Header/HeaderBar.vue'
export default {
  name: 'App',
  components: {Navbar, HeaderBar}
}
</script>
<style lang="less">
  @import "./assets/reset.less";

  #app {
    font-family: @FontDefault;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 4rem;
  }
</style>
