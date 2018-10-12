import fly from './core/server'

export default {
  // 分类列表
  getCategoryList: function (params) {
    return fly(`/api/v1/faq/categories`, params, {
      method: 'GET'
    })
  },
  // 分类详情
  getCategoryInfo: function (params, id) {
    return fly(`/api/v1/faq/category/${id}`, params, {
      method: 'GET'
    })
  },
  // 文章列表
  getArticleList: function (params, categoryId) {
    return fly(`/api/v1/faq/category/${categoryId}/articles`, params, {
      method: 'GET'
    })
  },
  // 文章详情
  getArticleInfo: function (params, articleId) {
    return fly(`/api/v1/faq/article/${articleId}`, params, {
      method: 'get'
    })
  },
  // 最近文章
  latestArticle: function (params) {
    return fly(`/api/v1/faq/article/latest`, params, {
      method: 'GET'
    })
  }
}
