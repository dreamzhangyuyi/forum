import request from '@/axios'
import {baseUrl} from '@/config/env'

export function reqTest() {
  return request({
    url: baseUrl+'/uar/getInfo',
    method: 'get',
  })
}