<template>
  <div class="header-state-item">
    <strong>{{state.count}}</strong>
    <div>{{state.label}}</div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'HeaderStateItem',
  props: ['state']
}
</script>
<style lang="less" scoped>
  .header-state-item{
    flex: 1;
    strong{
      font-size: 2rem;
    }
  }
</style>
