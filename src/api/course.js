
import fly from './core/server'

export default {
  // 获取课程分页列表
  getCourseList: function (params) {
    return fly('/api/v1/courses', params, {
      method: 'GET'
    })
  },
  // 课程详情
  getCourseInfo: function (params, id) {
    return fly(`/api/v2/course/${id}`, params, {
      method: 'GET'
    })
  },
  // 课程下的视频列表
  getVideosList: function (params, id) {
    return fly(`/api/v1/course/${$id}/videos`, params, {
      method: 'GET'
    })
  },
  // 课程评论
  getCourseComments: function (params, id) {
    return fly(`/api/v2/course/${id}/comments`, params, {
      method: 'GET'
    })
  },
  // 课程评论提交
  submitComments: function (params, id) {
    return fly(`/api/v1/course/${id}/comment`, params, {
      method: 'POST'
    })
  }
}