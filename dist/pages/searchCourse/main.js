require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([13],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(120);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_08e99170_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(126);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(121)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_08e99170_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\searchCourse\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-08e99170", Component.options)
  } else {
    hotAPI.reload("data-v-08e99170", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 121:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_courseCard_vue__ = __webpack_require__(27);
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

// import { formatTime } from '@/utils/index'


/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    courseCard: __WEBPACK_IMPORTED_MODULE_0__components_courseCard_vue__["a" /* default */]
  },

  data: function data() {
    return {
      keywords: '',
      hots: ['react.js', 'go', '小程序', 'php', 'vue.js', 'python', '人工智能', '区块链'],
      courseList: []
    };
  },

  computed: {
    categoryId: function categoryId() {
      return this.$mp.query.id;
    }
  },
  methods: {
    inputConfirm: function inputConfirm() {
      this.search(this.keywords);
    },
    search: function search(v) {
      if (!v) {
        return wx.showToast({
          title: '请输入搜索内容',
          icon: 'none',
          mask: true
        });
      }
      this._getCourseList({ page_size: 10, page: 1, keywords: this.keywords });
    },
    cancel: function cancel() {
      wx.navigateBack({ delta: 1 });
    },

    // 跳转至课程详情
    goVideoList: function goVideoList(obj) {
      wx.navigateTo({
        url: './../videoList/main?id=' + obj.id
      });
    },

    // 获取order列表
    _getCourseList: function _getCourseList(data) {
      var _this = this;

      this.$http.course.getCourseList(data).then(function (res) {
        _this.courseList = res.data;
      });
    }
  },
  created: function created() {},
  mounted: function mounted() {},
  onHide: function onHide() {
    this.courseList = [];
    this.keywords = '';
  },
  onUnload: function onUnload() {
    this.courseList = [];
    this.keywords = '';
  }
});

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "search-course"
  }, [_c('div', {
    staticClass: "serach-box"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.keywords),
      expression: "keywords"
    }],
    staticClass: "search-input",
    attrs: {
      "type": "text",
      "placeholder": "请输入搜索内容",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.keywords)
    },
    on: {
      "confirm": _vm.inputConfirm,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.keywords = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "search-cancel",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v("取消")])]), _vm._v(" "), _c('div', {
    staticClass: "hot-search"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("热门搜索")]), _vm._v(" "), _vm._l((_vm.hots), function(item, index) {
    return _c('span', {
      key: index,
      staticClass: "search-hot-tag",
      attrs: {
        "eventid": '2-' + index
      },
      on: {
        "click": function($event) {
          _vm.search(item)
        }
      }
    }, [_vm._v(_vm._s(item))])
  })], 2), _vm._v(" "), (_vm.courseList && _vm.courseList.length > 0) ? _c('div', {
    staticClass: "course-list"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("相关课程")]), _vm._v(" "), _vm._l((_vm.courseList), function(item, index) {
    return _c('course-card', {
      key: index,
      attrs: {
        "course": item,
        "eventid": '3-' + index,
        "mpcomid": '0-' + index
      },
      on: {
        "goVideoList": _vm.goVideoList
      }
    })
  })], 2) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-08e99170", esExports)
  }
}

/***/ })

},[119]);
//# sourceMappingURL=main.js.map