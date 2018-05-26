/**
 * Created by admin on 2018/4/21.
 */
import api from '../../api/index'
const state = {
  title: '发布管理',
  env: [
    {name: '开发环境', key: 'dev', icon: 'icon-deliver', addition: '159个dev环境'},
    {name: '集成环境', key: 'test', icon: 'icon-deliver', addition: ''},
    {name: '预发布环境', key: 'staging', icon: 'icon-deliver', addition: ''},
    {name: '生产环境', key: 'prod', icon: 'icon-deliver', addition: ''}
  ]

}
const actions = {
  getEnvList ({ commit }) {
    api.getEnvList(response => {
      commit('setEnvList', response.data)
    })
  }
}

const mutations = {
  setEnvList (state, list) {
    console.log(list)
    state.env = list
  }
}
export default {
  state,
  actions,
  mutations
}
