<template>
  <section>
    <header>
      <HeaderBar :getTitle="true"></HeaderBar>
    </header>
    <main>
      <div class="panel">
        <Panel v-for="panel in panels" :key="panel.name"
               v-bind="panel"
        />
      </div>
    </main>
  </section>
</template>
<script type="text/ecmascript-6">
import LeftArrow from './Common/LeftArrow'
import HeaderBar from './Header/HeaderBar'
import HeaderStateBar from './Header/HeaderStateBar'
import Panel from './Panel/Panel.vue'
export default {
  name: 'Release',
  data () {
    return {
      back: true,
      panels: [
        {
          label: '发布管理',
          items: [
            {name: '开发环境', link: '/list/dev', icon: 'icon-deliver', addition: '159个dev环境'},
            {name: '集成环境', link: '/list/test', icon: 'icon-deliver'},
            {name: '预发布环境', link: '/list/staging', icon: 'icon-deliver'},
            {name: '生产环境', link: '/list/prod', icon: 'icon-deliver'}
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
  mounted () {
    console.log(this.$store)
    console.log(this.$router)
  },
  components: {Panel, HeaderBar, HeaderStateBar, LeftArrow}
}
</script>
<style lang="less" scoped></style>
