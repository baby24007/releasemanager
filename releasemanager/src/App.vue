<template>
  <div id="app">
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
    <router-view name="nav"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {}
}
</script>
<style lang="less">
  @import "./assets/reset.less";
  @import "./assets/font/iconfont.less";
  #app {
    font-family: @FontDefault;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 4rem;
  }
</style>
