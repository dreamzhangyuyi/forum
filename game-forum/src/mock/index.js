import Mock from 'mockjs'
import {
  mkGetUserInfo
} from './user'
import {
  mkGetEpidemicInfo
} from './chartsData'

// Mock.setup({
//   timeout: '2000-5000'
// })

Mock.mock(/\/uar\/getInfo/, 'post', mkGetUserInfo)
Mock.mock(/\/uar\/getEpidemicInfo/, 'post', mkGetEpidemicInfo)
