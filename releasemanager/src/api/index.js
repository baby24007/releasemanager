/**
 * Created by admin on 2018/4/21.
 */
import axios from 'axios'
// 全局的 axios 默认值
// 先用自己的node服务
// axios.defaults.baseURL = 'http://api.libb.com/api/v1.0'
axios.defaults.baseURL = 'http://api.libb.com/api/'

export default {
  getEnvList (cb, errorCb) {
    return axios.get('env')
    // return axios.get('rm_env/rm_release_list')
      .then(response => cb(response))
      .catch(e => errorCb(e))
  },
  doLogin (cb, errorCb) {
    return axios.get('login')
      .then(cb)
      .catch(errorCb)
  }
}
