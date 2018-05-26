/**
 * Created by admin on 2018/4/21.
 */
import Vue from 'Vue'
import Vuex from 'Vuex'
import rm from './modules/rm'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    rm
  }
})
