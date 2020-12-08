import request from '../util/request'

export const login = data => request({
  method: 'post',
  url: '/login',
  data
})
