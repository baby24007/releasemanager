<template>
  <router-link to="/list/dev">发布{{project}}</router-link>
</template>
<script type="text/ecmascript-6">
  export default {
    name:'List',
    props:['project'],
    watch :{
      //原来的组件实例会被复用,意味着组件的生命周期钩子不会再被调用
      '$route'(to, from){
      //对路由变化作出响应...
      console.log('对路由变化作出响应...')
      }
    }
  }
</script>
<style></style>
