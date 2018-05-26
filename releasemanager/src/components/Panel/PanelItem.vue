<template>
  <router-link :to="link" class="panel-item" tag="div">
    <div class="panel-item-wrapper">
        <i class="icon-font icon-font-big"
           :class="icon"></i>
        <span>{{name}}</span>
        <p v-show="addition">{{addition}}</p>
    </div>
  </router-link>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'PanelItem',
  props: ['name', 'link', 'icon', 'addition']
}
</script>
<style lang="less" scoped>
  @import "../../assets/variables.less";
  .panel-item{
    flex: 0 0 33.3%;
    position:relative;
    border-right:1px solid @BgColorDefault;
    border-bottom:1px solid @BgColorDefault;
    cursor:default;
    .panel-item-wrapper{
      position: absolute;
      width: 100%;
      margin: auto;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      height: 50%;
    }
    i{
      display: block;
    }
    i,span{
      color: @LinkColorDefault;
    }
    &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }

     &:nth-child(3){
       border-right:none;
     }
  }
</style>
