import fly from './server'

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
  getArticleList: function (params, category_id) {
    return fly(`/api/v1/faq/category/${category_id}/articles`, params, {
      method: 'GET'
    })
  },
  // 文章详情
  getArticleInfo: function (params, article_id) {
    return fly(`/api/v1/faq/article/${article_id}`, params, {
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