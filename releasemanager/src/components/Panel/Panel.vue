<template>
  <div class="panel">
    <h4>{{label}}</h4>
    <div class="panel-item-container">
      <PanelItem v-for="item in items" :key="item.label"
                 v-bind="item"
      />
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  import PanelItem from './PanelItem.vue'
  export default {
    name: "Panel",
    props: ['label','items'],
    components: {PanelItem}
  }
</script>
<style lang="less" scoped>
  @import "../../assets/variables.less";
  .panel{
    color: @TextColorTips;
    background-color: @BgColorDefault;
    h4{
      text-align: left;
      font-weight: normal;
      padding: .8rem;
    }
  }
  .panel-item-container{
    background-color: #FFFFFF;
    display: flex;
    flex-wrap: wrap;
  }
</style>
