<template>
  <i class="icon-font icon-left" @click="back"></i>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'LeftArrow',
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>
<style lang="less">
.header-left{
  float: left;
  font-size: 1.5rem;
  margin-right: -100%;
  padding: .6rem;
  cursor: pointer;
  font-weight: 800;
}
</style>
