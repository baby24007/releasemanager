<template>
  <nav id="navbar" class="navbar navbar-fixed-bottom">
    <ul>
      <NavbarItem v-for="link in links"
                  :to="link"
                  :key="link.label"
      ></NavbarItem>
    </ul>
  </nav>
</template>
<script type="text/ecmascript-6">
import NavbarItem from './NavbarItem.vue'
export default {
  name: 'Navbar',
  components: {NavbarItem},
  data () {
    let links = []
    this.$router.options.routes.forEach((item) => {
      if (typeof item.meta !== 'undefined' && item.meta.title) {
        links.push({
          url: item.path,
          label: item.meta.title,
          className: item.meta.icon
        })
      }
    })
    return {
      links: links
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../assets/variables.less";
  .navbar {
    background-color: #FFFFFF;
    position: relative;
    width: 100%;
    color: @LineColorDark;
    border-top: 1px solid @LineColorDark;
    z-index: 1;
    ul{
      display: flex;
      align-items: center;
      min-height: 4rem;
    }
    ul>li{
      flex: 1;
    }
  }
  .navbar-fixed-bottom{
    position: fixed;
    bottom: 0;
  }
  .navbar-fixed-top{
    position: fixed;
    top: 0;
  }
</style>
