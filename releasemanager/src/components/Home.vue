<template>
  <div class="panel">
    <Panel v-for="panel in panels" :key="panel.name"
          v-bind="panel"
    />
  </div>
</template>
<script type="text/ecmascript-6">
import Panel from './Panel/Panel.vue'
export default {
  name: 'Release',
  data () {
    return {
      panels: [
        {
          label: '发布管理',
          items: [
            {name: '集成环境', link: '/list', icon: 'icon-deliver'},
            {name: '开发环境', link: '/list', icon: 'icon-deliver'},
            {name: '预发布环境', link: '/list', icon: 'icon-deliver'},
            {name: '生产环境', link: '/list', icon: 'icon-deliver'}
          ]
        },
        {
          label: '日志中心',
          items: [
            {name: 'ES-index', link: '/list', icon: 'icon-deliver'},
            {name: 'ES-index', link: '/list', icon: 'icon-deliver'},
            {name: 'ES-index', link: '/list', icon: 'icon-deliver'}
          ]
        },
        {
          label: '业务分析',
          items: [
            {name: 'PC', link: '/list', icon: 'icon-deliver'},
            {name: 'Mobile', link: '/list', icon: 'icon-deliver'}
          ]
        }

      ]
    }
  },
  components: {Panel}
}
</script>
<style lang="less" scoped></style>
