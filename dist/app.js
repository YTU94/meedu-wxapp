require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([1],{

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_index__ = __webpack_require__(47);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$http = __WEBPACK_IMPORTED_MODULE_2__api_index__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(46);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(45)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5926c95a", Component.options)
  } else {
    hotAPI.reload("data-v-5926c95a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 45:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    // 调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    console.log('app created and cache logs by setStorageSync');
  }
});

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__article__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__course__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__video__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vip__ = __webpack_require__(88);






/* harmony default export */ __webpack_exports__["a"] = ({
  article: __WEBPACK_IMPORTED_MODULE_0__article__["a" /* default */],
  course: __WEBPACK_IMPORTED_MODULE_1__course__["a" /* default */],
  user: __WEBPACK_IMPORTED_MODULE_2__user__["a" /* default */],
  video: __WEBPACK_IMPORTED_MODULE_3__video__["a" /* default */],
  vip: __WEBPACK_IMPORTED_MODULE_4__vip__["a" /* default */]
});

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_server__ = __webpack_require__(9);


/* harmony default export */ __webpack_exports__["a"] = ({
  // 分类列表
  getCategoryList: function getCategoryList(params) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__core_server__["a" /* default */])('/api/v1/faq/categories', params, {
      method: 'GET'
    });
  },
  // 分类详情
  getCategoryInfo: function getCategoryInfo(params, id) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__core_server__["a" /* default */])('/api/v1/faq/category/' + id, params, {
      method: 'GET'
    });
  },
  // 文章列表
  getArticleList: function getArticleList(params, categoryId) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__core_server__["a" /* default */])('/api/v1/faq/category/' + categoryId + '/articles', params, {
      method: 'GET'
    });
  },
  // 文章详情
  getArticleInfo: function getArticleInfo(params, articleId) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__core_server__["a" /* default */])('/api/v1/faq/article/' + articleId, params, {
      method: 'get'
    });
  },
  // 最近文章
  latestArticle: function latestArticle(params) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__core_server__["a" /* default */])('/api/v1/faq/article/latest', params, {
      method: 'GET'
    });
  }
});

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_server__ = __webpack_require__(9);



/* harmony default export */ __webpack_exports__["a"] = ({
  // 获取课程分页列表
  getCourseList: function getCourseList(params) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__core_server__["a" /* default */])('/api/v1/courses', params, {
      method: 'GET'
    });
  },
  // 课程详情
  getCourseInfo: function getCourseInfo(params, id) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__core_server__["a" /* default */])('/api/v1/course/' + id, params, {
      method: 'GET'
    });
  },
  // 课程下的视频列表
  getVideosList: function getVideosList(params, id) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__core_server__["a" /* default */])('/api/v1/course/' + id + '/videos', params, {
      method: 'GET'
    });
  },
  // 课程评论
  getCourseComments: function getCourseComments(params, id) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__core_server__["a" /* default */])('/api/v1/course/' + id + '/comments', params, {
      method: 'GET'
    });
  },
  // 课程评论提交
  submitComments: function submitComments(params, id) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__core_server__["a" /* default */])('/api/v1/course/' + id + '/comment', params, {
      method: 'POST'
    });
  }
});

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_server__ = __webpack_require__(9);


/* harmony default export */ __webpack_exports__["a"] = ({
  // 登录
  login: function login(params) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__core_server__["a" /* default */])('/oauth/token', params, {
      method: 'POST'
    });
  },
  // 注册
  register: function register(params) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__core_server__["a" /* default */])('/api/v1/register', params, {
      method: 'POST'
    });
  },
  // 获取我的资料
  getUserInfo: function getUserInfo(params) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__core_server__["a" /* default */])('/api/v1/member/profile', params, {
      method: 'GET'
    });
  },
  // 获取我的课程列表
  getUserCourseList: function getUserCourseList(params) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__core_server__["a" /* default */])('/api/v1/member/courses', params, {
      method: 'GET'
    });
  },
  // 获取我的订单
  getUserOrder: function getUserOrder(params) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__core_server__["a" /* default */])('/api/v1/member/orders', params, {
      method: 'GET'
    });
  }
});

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_server__ = __webpack_require__(9);


/* harmony default export */ __webpack_exports__["a"] = ({
  // 视频详情
  getVideosInfo: function getVideosInfo(params, id) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__core_server__["a" /* default */])('/api/v1/video/' + id, params, {
      method: 'GET'
    });
  },
  // 视频播放地址
  getVideosUrl: function getVideosUrl(params, id) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__core_server__["a" /* default */])('/api/v1/video/' + id + '/play_url', params, {
      method: 'GET'
    });
  },
  // 视频评论列表
  getVideosComments: function getVideosComments(params, id) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__core_server__["a" /* default */])('/api/v1/video/' + id + '/comments', params, {
      method: 'GET'
    });
  },
  // 视频评论提交
  submitComments: function submitComments(params, id) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__core_server__["a" /* default */])('/api/v1/video/' + id + '/comment', params, {
      method: 'POST'
    });
  }
});

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_server__ = __webpack_require__(9);


/* harmony default export */ __webpack_exports__["a"] = ({
  // VIP列表
  getVipList: function getVipList(params) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__core_server__["a" /* default */])('/api/v1/roles', params, {
      method: 'GET'
    });
  },
  // 购买VIP
  buyVip: function buyVip(params, id) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__core_server__["a" /* default */])('/api/v1/role/' + id + '/buy', params, {
      method: 'POST'
    });
  }
});

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = flyio;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);


var Fly = __webpack_require__(84);
var fly = new Fly();
// const HOST_DEV = 'https://1o1.cc' // eslint-disable-line
// const HOST_PROD = 'https://xthapi-prod.isagr.com' // eslint-disable-line
fly.config.baseURL = "https://58hualong.com";
// fly.config.header['content-type'] = 'application/json'
// 添加请求拦截器
fly.interceptors.request.use(function (request) {
  // 给所有请求添加自定义header
  request.headers['content-type'] = 'application/json';
  request.headers['Authorization'] = 'Bearer ' + wx.getStorageSync('access_token');
  request.headers['third-session'] = wx.getStorageSync('thirdSession') || '';
  // 打印出请求体
  console.log(request.body);
  // 终止请求
  // var err=new Error("xxx")
  // err.request=request
  // return Promise.reject(new Error(""))
  // 可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return request;
});

// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(function (response) {
  console.log('response', response);
  // 只将请求结果的data字段返回
  if (response.status === 200 || response.status === 201) {
    return response.data;
  } else if (response.status === 302) {
    wx.redirectTo({
      url: '/pages/login/main'
    });
  } else {
    wx.hideLoading();
    wx.showToast({
      title: typeof response.message === 'string' ? response.message : '系统出错',
      icon: 'none',
      duration: 1000
    });
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(response);
  }
}, function (error) {
  console.log('error', error);
  wx.hideLoading();
  wx.showToast({
    title: '未知错误',
    icon: 'none',
    mask: true
  });
  console.log(error);
  // 发生网络错误后会走到这里
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(error);
});

function flyio(url, params, config) {
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.showLoading({
      title: '加载中',
      mask: true
    });
    fly.request(url, params, config).then(function (response) {
      wx.hideLoading();
      if (response) {
        resolve(response);
      } else if (response.access_token) {
        // for login
        resolve(response);
      } else {
        wx.showToast({
          title: typeof response.messages === 'string' ? response.messages : '系统出错',
          icon: 'none',
          duration: 1000
        });
      }
    }, function (err) {
      console.log(err, 'err');
      reject(err.response);
    });
  });
}

/***/ })

},[42]);
//# sourceMappingURL=app.js.map