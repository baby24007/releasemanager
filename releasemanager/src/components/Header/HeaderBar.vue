<template>
  <header class="header-bar">
    <HeaderTitle title="发布" />
    <HeaderStateBar />
  </header>
</template>
<script type="text/ecmascript-6">
import HeaderTitle from './HeaderTitle.vue'
import HeaderStateBar from './HeaderStateBar.vue'
export default {
  name: 'HeaderBar',
  components: {HeaderStateBar, HeaderTitle}
}
</script>
<style lang="less" scoped>
  @import "../../assets/variables.less";
  .header-bar{
    background-color: @ColorPrimary;
  }
</style>
