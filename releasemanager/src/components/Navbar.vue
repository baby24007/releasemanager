<template>
  <nav id="navbar" class="navbar navbar-fixed-bottom">
    <ul>
      <NavbarItem v-for="link in links"
                  :to="link"
      ></NavbarItem>
      <!--<li><router-link to="/release">发布</router-link></li>
      <li><router-link to="/tools">工具</router-link></li>
      <li><router-link to="/user">我的</router-link></li>-->
    </ul>
  </nav>
</template>
<script type="text/ecmascript-6">
  import NavbarItem from './Navbar/NavbarItem.vue'
  export default {
    name: 'Navbar',
    components: {NavbarItem},
    data() {
      return {
        links: [
          { url: '/release', label: '部署', className: 'icon-home'},
          { url: '/tools', label: '工具', className: 'icon-app'},
          { url: '/user', label: '我的', className: 'icon-my'}
        ]
      }
    },
    methods: {
      setActive() {
        console.log('index')
//        this.links[index].className += 'active';
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../assets/variables.less";
  .navbar {
    background-color: #FFFFFF;
    position: relative;
    width: 100%;
    color: @ColorPrimary;
    border-top: 1px solid @LineColorDark;
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
