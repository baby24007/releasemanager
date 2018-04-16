<template>
  <div>
    <h2><i class="icon-font icon-left" v-show="showGoback" @click="goback"></i>{{ title }}</h2>

  </div>
</template>
<script type="text/ecmascript-6">

export default {
  name: 'HeaderTitle',
  props: {
    back: {
      type: Boolean,
      default: true
    }
  },
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
<style lang="less" scoped>
  h2{
    margin: 0 auto;
    padding: .6rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    i{
      float: left;
      font-size: 1.5rem;
      margin-right: -100%;
    }
  }
</style>
