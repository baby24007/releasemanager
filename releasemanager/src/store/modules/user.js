/**
 * Created by admin on 2018/4/21.
 */
import {cookie} from '../../common/utils'
import api from '../../api/index'
const state = {
  account: '',
  password: '',
  isLogged: false
}
const actions = {
  doLogin ({commit}) {
    api.doLogin(response => {
      if (response.data.status === 0) {
        commit('setLogin')
        console.log(response.data.msg)
      }
    })
  }
}
const getters = {}
const mutations = {
  setLogin (state) {
    state.isLogged = true
  },
  setLogout (state) {
    state.isLogged = false
    cookie.del('rm_account')
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
