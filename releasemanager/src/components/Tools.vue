<template>
  <section>
    <header>
      <HeaderBar :getTitle="true"></HeaderBar>
    </header>
    <main>
      <div>There is tools page</div>
    </main>
  </section>

</template>
<script type="text/ecmascript-6">
import HeaderBar from './Header/HeaderBar'
export default {
  name: 'Tools',
  components: {HeaderBar}
}
</script>
<style lang="less" scoped></style>
