/**
 *
 * http配置
 *
 */

import axios from 'axios'

// 超时时间
axios.defaults.timeout = 30000
// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true

axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(data => {
  return data
}, error => {
  const errMsg = error.toString()
  const code = errMsg.substr(errMsg.indexOf('code') + 5)
  Message({
    message: errorCode[code] || errorCode['default'],
    type: 'error'
  })
  return Promise.reject(new Error(error))
})

export default axios