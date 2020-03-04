import request from '@/axios'
import {baseUrl} from '@/config/env'

export function reqTest() {
  return request({
    url: baseUrl+'/api/uar/getInfo',
    method: 'post',
  })
}

export function getEpidemicInfo() {
  return request({
    url: baseUrl + '/api/uar/getEpidemicInfo',
    method: 'post'
  })
}

export function getDailyInfo() {
  return request({
    url: baseUrl + '/api/uar/getDailyInfo',
    method: 'post'
  })
}