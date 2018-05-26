<template>
  <h2>{{ title }}</h2>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'HeaderTitle',
  data () {
    return {
      title: document.title
    }
  },
  created () {
    this.$root.$on('updateTitle', this.updateTitle)
  },
  methods: {
    updateTitle () {
      this.title = document.title
    },
    goback () {
      window.history.go(-1)
    }
  }
}
</script>
