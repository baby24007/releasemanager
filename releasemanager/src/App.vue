<template>
  <div id="app">
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <header class="header-bar">
      <HeaderTitle />
      <router-view name="header"></router-view>
    </header>
    <router-view></router-view>
    <router-view name="nav"></router-view>
  </div>
</template>

<script>
import HeaderTitle from './components/Header/HeaderTitle.vue'
export default {
  name: 'App',
  components: {HeaderTitle}
}
</script>
<style lang="less">
  @import "./assets/reset.less";
  @import "./assets/variables.less";
  @import "./assets/font/iconfont.less";
  #app {
    font-family: @FontDefault;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 4rem;
  }
  .header-bar{
    background-color: @ColorPrimary;
  }
</style>
