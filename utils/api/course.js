
import fly from './server'

export default {
  getCourseList: function (params) {
    return fly('/rest/store/listPagination', params, {
      method: 'POST'
    })
  },
  getCourseList2: function (params) {
    return fly('/rest/store/listPagination', params, {
      method: 'POST'
    })
  }
}