<template>
  <li class="navbar-item" ><router-link
    :to="to.url" :class="to.className" class="icon-font icon-font-big">{{to.label}}</router-link></li>
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
  @import "../../assets/variables.less";
  .navbar-item{
    a{
     color: @TextColorGray;
    }
    .router-link-exact-active{
     color: @LinkColorActive;
    }
  }
</style>
