import request from '@/axios'
import {baseUrl} from '@/config/env'

export function reqTest() {
  return request({
    url: baseUrl+'/uar/getInfo',
    method: 'post',
  })
}

export function getEpidemicInfo() {
  return request({
    url: baseUrl + '/uar/getEpidemicInfo',
    method: 'post'
  })
}