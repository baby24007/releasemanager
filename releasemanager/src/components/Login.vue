<template>
  <div id="login">
    <input type="text" name="account">
    <input type="password" name="password">
    <input type="submit" id="loginBtn">
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'Login',
    data() {
      return {
        isLogined:false,
        account:'',
        password:''
      }
    },
    method: {
      login() {
        // 登录
      },
      logout() {
        // 登出
      }
    }
  }
</script>
<style></style>
