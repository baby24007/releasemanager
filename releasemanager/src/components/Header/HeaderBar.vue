<template>
  <header class="header-bar">
    <div class="header-bar-row-1">
      <slot name="header-left"></slot>
      <HeaderTitle v-if="getTitle"/>
      <h2 v-else>{{ title }}</h2>
      <slot name="header-right"></slot>
    </div>
    <slot class="header-bar-row-2" name="header-content"></slot>
  </header>
</template>
<script type="text/ecmascript-6">
import HeaderTitle from './HeaderTitle.vue'
export default {
  name: 'HeaderBar',
  props: {
    title: {
      type: String,
      default: 'ReleaseManager'
    },
    // true：直接获取document.title
    // false：使用props里的title
    getTitle: {
      type: Boolean,
      default: false
    }
  },
  components: {HeaderTitle}
}
</script>
<style lang="less">
  @import "../../assets/variables.less";
  .header-bar{
    background-color: @ColorPrimary;
  }
  .header-bar h2{
    margin: 0 auto;
    padding: .6rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
