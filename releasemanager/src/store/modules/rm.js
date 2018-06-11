/**
 * Created by admin on 2018/4/21.
 */
import api from '../../api/index'
const state = {
  env: {
    label: '发布管理',
    items: []
  },
  logcenter: {
    label: '日志中心',
    items: [
      {name: 'ES-index', link: '/list', icon: 'icon-deliver'},
      {name: 'ES-index', link: '/list', icon: 'icon-deliver'},
      {name: 'ES-index', link: '/list', icon: 'icon-deliver'}
    ]
  },
  analysis: {
    label: '业务分析',
    items: [
      {name: 'PC', link: '/list', icon: 'icon-deliver'},
      {name: 'Mobile', link: '/list', icon: 'icon-deliver'}
    ]
  }
}

const getters = {
  getFormatEnvList () {

  }
}
const actions = {
  getEnvList ({ commit }) {
    api.getEnvList(response => {
      commit('setEnvList', response.data)
    }, e => console.error(e))
  }
}

const mutations = {
  setEnvList (state, list) {
    let icons = ['deliver', 'fold', 'message', 'natice']
    state.env.items = list.data.map((item, index) => {
      return {
        id: item.id,
        name: item.name_cn,
        link: item.name,
        icon: 'icon-' + icons[index % 4],
        addition: '一般没有的附加说明'
      }
    })
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
