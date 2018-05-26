<template>
  <section>
    <header>
      <HeaderBar title="发布">
        <LeftArrow slot="header-left" class="header-left"></LeftArrow>
      </HeaderBar>
    </header>
    <router-link to="/list/dev">发布{{this.$route.params.env}}</router-link>
  </section>
</template>
<script type="text/ecmascript-6">
import HeaderBar from '../Header/HeaderBar'
import LeftArrow from '../Common/LeftArrow'
export default {
  name: 'List',
  components: {HeaderBar, LeftArrow},
  created () {
    console.log(this.$store)
  }
}
</script>
<style></style>
