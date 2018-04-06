<template>
  <div id="app">
    <h1>Hello User!</h1>
    <Navbar></Navbar>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {Navbar}
}
</script>

<style lang="less">
  @import "./assets/reset.less";

  #app {
    font-family: @FontDefault;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: @LinkColorDefault;
    margin-top: 6rem;
    background-color: @BgColorDefault;
  }
</style>
