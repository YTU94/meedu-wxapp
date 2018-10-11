import fly from './server'

export default {
  // 视频详情
  getVideosInfo: function (params, id) {
    return fly(`/api/v1/video/${id}`, params, {
      method: 'GET'
    })
  },
  // 视频播放地址
  getVideosUrl: function (params, id) {
    return fly(`/api/v1/video/${id}/play_url`, params, {
      method: 'GET'
    })
  },
  // 视频评论列表
  getVideosComments: function (params, id) {
    return fly(`/api/v1/video/${id}/comments`, params, {
      method: 'GET'
    })
  },
  // 视频评论提交
  submitComments: function (params, id) {
    return fly(`/api/v1/video/${id}/comment`, params, {
      method: 'POST'
    })
  }
} 