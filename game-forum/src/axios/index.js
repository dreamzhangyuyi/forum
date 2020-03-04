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
  console.log("data:"+ data)
  return data
}, error => {
  return Promise.reject(error.response.status+","+error.toString()) 
})

export default axios