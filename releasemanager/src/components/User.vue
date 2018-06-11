<template>
  <section>
    <HeaderBar :getTitle="true"></HeaderBar>
    <main class="user-container">
      <form action="#login" id="loginForm">
        <div>
          <label>用户名 ：
            <BaseInputText
              placeholder="your account..."
              v-model="account"/>
          </label>
        </div>
        <div>
          <label>密码 ：
            <BaseInputText
              placeholder="your password..."
              v-model="password"
              @keydown.enter="readAccount"
              @blur="validateAccount"/>
          </label>
        </div>
      </form>
      <div class="user-welcome" v-show="isLoggon"></div>
    </main>
  </section>
</template>
<script type="text/ecmascript-6">
import { mapState } from 'vuex'
import {cookie} from '../common/utils.js'
import BaseInputText from './BaseInputText'
import HeaderBar from './Header/HeaderBar'
export default {
  name: 'User',
  computed: mapState({
    
  }),
  components: {BaseInputText, HeaderBar},
  created () {
    console.log('created')
    console.log(this.$root)
  },
  mounted () {
    console.log('mounted')
  },
  methods: {
    checkLogin () {
      if(cookie.get('rm_account')){

      }
      console.log('checkLogin')
    },
    doLogin () {

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
    },
    submit () {
      console.log('submit data: ', this.$data)
    }
  }
}
</script>
<style lang="less">
@import url('../assets/variables.less');
.user-container{
  color: @TextColorGray;
  text-align: left;
  padding: 1rem;
}
</style>
