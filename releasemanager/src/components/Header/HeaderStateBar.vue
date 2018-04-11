<template>
  <div class="header-state">
    <HeaderStateItem v-for="state in states" :key="state.label"
        :state="state"
    />
  </div>
</template>
<script type="text/ecmascript-6">
    import HeaderStateItem from './HeaderStateItem.vue'
    export default {
        name: "HeaderStateBar",
        components: {HeaderStateItem},
        data() {
          return {
            states: [
              {label: '监控警告', count: 0},
              {label: '待办工单', count: 4},
              {label: '待续费', count: 3},
            ]
          }
        }
    }
</script>
<style lang="less" scoped>
  .header-state{
    font-size: 1rem; /*保持最初值*/
    display: flex;
    padding: 1.8rem 0;
  }
</style>
