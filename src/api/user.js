import fly from './core/server'

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
  },
  // 获取我的资料
  getUserInfo: function (params) {
    return fly('/api/v1/member/profile', params, {
      method: 'GET'
    })
  },
  // 获取我的课程列表
  getUserCourseList: function (params) {
    return fly('/api/v1/member/courses', params, {
      method: 'GET'
    })
  },
  // 获取我的订单
  getUserOrder: function (params) {
    return fly('/api/v1/member/orders', params, {
      method: 'GET'
    })
  }
}
