import fly from './server'

export default {
  // 登录
  login: function (params) {
    return fly('/oauth/token', params, {
      method: 'POST'
    })
  },
  // 注册
  register: function (params) {
    return fly('/api/v1/register', params, {
      method: 'POST'
    })
  }
}  
