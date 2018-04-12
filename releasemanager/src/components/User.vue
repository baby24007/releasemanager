<template>
  <div>你好，用户,输入帐号：
    <BaseInputText
      v-model="account"
      placeholder="天哦"
      @keydown.enter="readAccount"
      @blur="validateAccount"
    ></BaseInputText>
  </div>

</template>
<script type="text/ecmascript-6">
import BaseInputText from './BaseInputText'

export default{
  name: 'User',
  data () {
    return {
      account: ''
    }
  },
  components: {BaseInputText},
  created () {
    console.log('created')
  },
  mounted () {
    console.log('mounted')
  },
  methods: {
    checkLogin () {
      console.log('checkLogin')
    },
    readAccount () {
      console.log(this.account)
    },
    validateAccount (event) {
      console.log('blur')
      if (this.account === '') {
        event.target.style.border = '1px solid red'
      } else {
        event.target.style.border = 'none'
      }
    }
  }
}
</script>
<style></style>
