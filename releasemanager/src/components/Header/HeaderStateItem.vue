<template>
  <div class="header-state-item">
    <strong>{{state.count}}</strong>
    <p>{{state.label}}</p>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'HeaderStateItem',
  props: ['state']
}
</script>
<style lang="less">
  .header-state-item{
    flex: 1;
    strong{
      font-size: 2rem;
    }
  }
</style>
