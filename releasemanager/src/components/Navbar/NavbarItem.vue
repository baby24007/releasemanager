<template>
  <li class="navbar-item" ><router-link
    :to="to.url" :class="to.className">{{to.label}}</router-link></li>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      to: {
        url: String,
        label: String,
        className: String
      }
    },
    name: 'NavbarItem'
  }
</script>
<style lang="less" scoped>
  @import "../../assets/font/iconfont.css";
  @import "../../assets/variables.less";
  .navbar-item{
    a{
     color: @LinkColorDefault;
     vertical-align: middle;
     font: normal normal normal 14px/1 "iconfont";
     font-size: inherit;
     text-rendering: auto;
     -webkit-font-smoothing: antialiased;
      display: inline-block;
      width: 100%;
      &:before{
         display: block;
         font-size: 1.8rem;
         margin-bottom: .2em;
         margin-top: .2em;
       }
      }
    .router-link-active{
     color: @LinkColorActive;
    }
  }
</style>
