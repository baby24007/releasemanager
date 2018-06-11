<template>
  <section>
    <header>
      <HeaderBar :getTitle="true"></HeaderBar>
    </header>
    <main>
      <div class="panel">
        <Panel :label="envLabel" :items="envList"/>
        <!--<Panel v-for="panel in panels" :key="panel.name"
               v-bind="panel"
        />-->
      </div>
    </main>
  </section>
</template>
<script type="text/ecmascript-6">
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from 'vuex'
import LeftArrow from './Common/LeftArrow'
import HeaderBar from './Header/HeaderBar'
import HeaderStateBar from './Header/HeaderStateBar'
import Panel from './Panel/Panel.vue'
export default {
  name: 'Release',
  data () {
    return {
      back: true
    }
  },
  computed: mapState({
    envLabel () {
      return this.$store.state.rm.env.label
    },
    envList () {
      return this.$store.state.rm.env.items
    }
  }),
  created () {
    console.log(this.$store.dispatch('getEnvList'))
  },
  components: {Panel, HeaderBar, HeaderStateBar, LeftArrow}
}
</script>
<style lang="less" scoped></style>
