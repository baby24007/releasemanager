// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import router from './router'
import App from './App'
import Loading from './components/Loading'

let rm = new Vue({
  store,
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
    rm.$root.$emit('updateTitle', to.meta.title)
  }
  next()
})
Vue.component('Loading', Loading)
Vue.use({rm})
