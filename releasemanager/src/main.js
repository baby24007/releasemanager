// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
import Loading from './components/Loading'
let rm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  // 这里一定是components，之前写成component，一直就报错了
  components: {App}
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
    rm.$root.$emit('updateTitle', to.meta.title)
  }
  next()
})
Vue.component('Loading', Loading)
Vue.use({rm})
