/**
 * Created by admin on 2018/4/21.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import rm from './modules/rm'
import user from './modules/user'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    rm,
    user
  }
})
