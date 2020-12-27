import request from '../util/request'

export const upload = data => request({
  method: 'post',
  url: '/upload',
  data
})
