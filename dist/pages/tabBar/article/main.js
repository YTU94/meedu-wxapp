require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([9],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(131);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_427caa8a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(134);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(132)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_427caa8a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\tabBar\\article\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-427caa8a", Component.options)
  } else {
    hotAPI.reload("data-v-427caa8a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 132:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_index__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_card__ = __webpack_require__(4);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    card: __WEBPACK_IMPORTED_MODULE_1__components_card__["a" /* default */]
  },

  data: function data() {
    return {
      logs: [],
      blogList: null,
      colorList: ['red', 'blue', 'yellow', 'pink'],
      categoryList: []
    };
  },

  computed: {
    r: function r() {
      return parseInt(Math.random() * 10);
    }
  },
  methods: {
    init: function init() {
      this._getCategoryList({ page_size: 10, page: 1 });
    },
    goArticleList: function goArticleList(e) {
      console.log('query-------->', e);
      wx.navigateTo({
        url: './articleList/main?id=' + e.id
      });
    },

    // 获取文章分类
    _getCategoryList: function _getCategoryList(data) {
      var _this = this;

      this.$http.article.getCategoryList(data).then(function (res) {
        if (res.data && res.data.length > 0) {
          _this.categoryList = res.data;
        }
        _this.categoryList = [{ name: '分类one', avatar: 'https://pic3.zhimg.com/v2-783e841e0c5290281b6aaf86e055d543_xl.jpg', info: '分类简介-------', num: '56' }];
      });
    },

    // 获取文章列表
    _getArticleList: function _getArticleList(data, id) {
      var _this2 = this;

      this.$http.article.getArticleList(data, id).then(function (res) {
        _this2.categoryList = res.data;
      });
    }
  },
  onShow: function onShow() {
    var that = this;
    wx.request({
      url: 'http://localhost:3000/all',
      method: 'GET',
      success: function success(res) {
        console.log('------<', res);
        that.blogList = res.data.data;
      }
    });
  },
  created: function created() {
    var logs = wx.getStorageSync('logs') || [];
    this.logs = logs.map(function (log) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* formatTime */])(new Date(log));
    });
  },
  mounted: function mounted() {
    this.init();
  }
});

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "article"
  }, [_c('h1', [_vm._v("所有分类")]), _vm._v(" "), _c('ul', {
    staticClass: "container"
  }, _vm._l((_vm.categoryList), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "list-item",
      class: {
        red: _vm.aa
      },
      style: ({
        'background': _vm.colorList[parseInt(Math.random() * 10)]
      }),
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.goArticleList(item)
        }
      }
    }, [_c('img', {
      staticClass: "cate_avatar",
      attrs: {
        "src": item.avatar,
        "alt": "",
        "mode": "widthFix"
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "cate_content"
    }, [_c('div', {
      staticClass: "cate_content_name"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticClass: "cate_content_info"
    }, [_vm._v(_vm._s(item.info))]), _vm._v(" "), _c('div', {
      staticClass: "cate_content_other"
    }, [_vm._v("共" + _vm._s(item.num) + "篇文章")])])])
  })), _vm._v(" "), _c('ul', {
    staticClass: "container"
  }, _vm._l((_vm.blogList), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "list-item"
    }, [_vm._v("\n      " + _vm._s(index + 1) + ". " + _vm._s(item.post_title) + "\n    ")])
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-427caa8a", esExports)
  }
}

/***/ })

},[130]);
//# sourceMappingURL=main.js.map