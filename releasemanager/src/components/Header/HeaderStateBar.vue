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
  name: 'HeaderStateBar',
  components: {HeaderStateItem},
  data () {
    return {
      states: [
        {label: '今日部署', count: 0},
        {label: '全部部署', count: 4},
        {label: '组件', count: 3},
        {label: '中间件', count: 3}
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
