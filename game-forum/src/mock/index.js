import Mock from 'mockjs'
import {
  mkGetUserInfo
} from './user'

Mock.setup({
  timeout: '200-500'
})

Mock.mock(/\/uar\/getInfo/, 'post', mkGetUserInfo)
