<template>
  <input v-model="currentNum">
  <BottonList />
</template>
<script type="text/ecmascript-6">
    export default {
        name: "calculator",
        data() {
          return {
            preNum:0,
            currentNum:0,
            preOpration:''
          }
        },
      methods: {
        calculate(opration){
          if(this.preOpration == '+'){
            this.currentNum = Number(this.currentNum) + Number(this.preNum);
          }
          if(this.preOpration == '-'){
            this.currentNum = Number(this.preNum) - Number(this.currentNum);
          }
          this.preOpration = opration;
        }
      }
    }
</script>
<style lang="less" scoped></style>
