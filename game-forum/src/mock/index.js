import Mock from 'mockjs'
import {
  mkGetUserInfo
} from './user'
import {
  mkGetEpidemicInfo,
  mkGetDailyInfo
} from './chartsData'

// Mock.setup({
//   timeout: '2000-5000'
// })

Mock.mock(/\/api\/uar\/getInfo/, 'post', mkGetUserInfo)
Mock.mock(/\/api\/uar\/getEpidemicInfo/, 'post', mkGetEpidemicInfo)
Mock.mock(/\/api\/uar\/getDailyInfo/, 'post', mkGetDailyInfo)
