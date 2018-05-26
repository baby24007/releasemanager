/**
 * Created by admin on 2018/4/21.
 */
import axios from 'axios'
// 全局的 axios 默认值
axios.defaults.baseURL = 'http://192.168.1.105/api/v1.0'

export default {
  getEnvList (cb, errorCb) {
    return axios.get('rm_env/rm_release_list')
      .then(response => cb(response))
      .catch(e => errorCb(e))
  }
}
