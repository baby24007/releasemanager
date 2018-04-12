<template><h2>{{ title }}</h2></template>
<script type="text/ecmascript-6">
export default {
  name: 'HeaderTitle',
  data () {
    return {
      title: document.title
    }
  },
  created () {
    window.eventBus && window.eventBus.$on('updateTitle', () => this.updateTitle())
  },
  methods: {
    updateTitle () {
      this.title = document.title
    }
  }
}
</script>
<style lang="less" scoped>
  h2{
    margin: 0 auto;
    padding: .6rem;
  }
</style>
