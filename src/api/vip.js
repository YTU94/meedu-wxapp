import fly from './core/server'

export default {
  // VIP列表
  getVipList: function (params) {
    return fly(`/api/v1/roles`, params, {
      method: 'GET'
    })
  },
  // 购买VIP
  buyVip: function (params, id) {
    return fly(`/api/v1/role/${id}/buy`, params, {
      method: 'POST'
    })
  }
}
