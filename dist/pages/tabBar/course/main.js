require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([2],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(136);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_65d1cc5d_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(143);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(137)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_65d1cc5d_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\tabBar\\course\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-65d1cc5d", Component.options)
  } else {
    hotAPI.reload("data-v-65d1cc5d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 137:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_courseCard_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_swiper_banner__ = __webpack_require__(139);
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
    card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */],
    courseCard: __WEBPACK_IMPORTED_MODULE_1__components_courseCard_vue__["a" /* default */],
    swiperBanner: __WEBPACK_IMPORTED_MODULE_2__components_swiper_banner__["a" /* default */]
  },
  data: function data() {
    return {
      imgKey: 'thumb',
      userInfo: {},
      courseList: [],
      pageSize: 10,
      hasMounted: false
    };
  },


  computed: {
    courseType: function courseType() {
      return this.$mp.query.type;
    }
  },
  methods: {
    init: function init() {
      this._getCourseList({ page: 1, pageSize: 10 });
    },
    goSearchCoure: function goSearchCoure() {
      wx.navigateTo({ url: '../../searchCourse/main' });
    },
    goVideoList: function goVideoList(course) {
      console.log('query--------->course.id', course.id);
      wx.navigateTo({
        url: '../../videoList/main?id=' + course.id
      });
    },
    getUserInfo: function getUserInfo() {
      var _this = this;

      // 调用登录接口
      wx.login({
        success: function success() {
          wx.getUserInfo({
            success: function success(res) {
              _this.userInfo = res.userInfo;
            }
          });
        }
      });
    },
    clickHandle: function clickHandle(msg, ev) {
      console.log('clickHandle:', msg, ev);
    },
    _getCourseList: function _getCourseList(data, merge) {
      var _this2 = this;

      this.$http.course.getCourseList(data).then(function (res) {
        _this2.hasMounted = true;
        if (res.data.length > 0) {
          _this2.courseList = merge ? _this2.courseList.concat(res.data) : res.data;
        } else {
          _this2.noCourse = true;
        }
      });
    }
  },

  created: function created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  },
  beforeMount: function beforeMount() {},
  onShow: function onShow() {
    this.init();
  },
  mounted: function mounted() {},

  onShareAppMessage: function onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target);
    }
    return {
      title: 'meedu',
      path: 'pages/login/main'
    };
  }
});

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_swiper_banner_vue__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3d0e36df_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_swiper_banner_vue__ = __webpack_require__(142);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(140)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_swiper_banner_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3d0e36df_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_swiper_banner_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\swiper-banner.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] swiper-banner.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d0e36df", Component.options)
  } else {
    hotAPI.reload("data-v-3d0e36df", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 140:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    swiperList: {
      type: Array
    },
    key: String
  },
  data: function data() {
    return {
      activeIndex: 0,
      // imgUrls: [
      //   'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      //   'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      //   'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      // ],
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000
    };
  },

  methods: {
    change: function change(e) {
      console.log(e.mp.detail.current);
      this.activeIndex = e.mp.detail.current;
    },
    goToInfo: function goToInfo(id) {
      this.$emit('navigateTo', id);
    }
  }
});

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.swiperList && _vm.swiperList.length > 0) ? _c('swiper', {
    staticClass: "swiper-comp",
    attrs: {
      "indicator-dots": _vm.indicatorDots,
      "indicator-active-color": "#fff",
      "autoplay": _vm.autoplay,
      "interval": _vm.interval,
      "duration": _vm.duration,
      "circular": true,
      "previous-margin": "15px",
      "next-margin": "15px",
      "eventid": '1'
    },
    on: {
      "change": _vm.change
    }
  }, _vm._l((_vm.swiperList), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0-' + index
      }
    }, [_c('div', {
      staticClass: "for-padding",
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.goToInfo(item.id)
        }
      }
    }, [(item.thumb) ? _c('img', {
      staticClass: "slide-image",
      class: {
        'active': _vm.activeIndex === index
      },
      attrs: {
        "src": item.thumb
      }
    }) : _vm._e()])])], 1)
  })) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3d0e36df", esExports)
  }
}

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "course",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.clickHandle('test click', $event)
      }
    }
  }, [_c('div', {
    staticClass: "search-input",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.goSearchCoure
    }
  }, [_vm._v("请输入课程名称")]), _vm._v(" "), _c('swiper-banner', {
    key: _vm.imgKey,
    attrs: {
      "swiperList": _vm.courseList,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('h1', {
    staticClass: "couse-title"
  }, [_vm._v("课程推荐")]), _vm._v(" "), (_vm.hasMounted) ? _c('div', {
    staticClass: "card-list"
  }, [(_vm.courseList && _vm.courseList.length > 0) ? _c('div', {}, _vm._l((_vm.courseList), function(item, index) {
    return _c('course-card', {
      key: index,
      attrs: {
        "course": item,
        "eventid": '1-' + index,
        "mpcomid": '1-' + index
      },
      on: {
        "goVideoList": _vm.goVideoList
      }
    })
  })) : _c('div', {
    staticClass: "none"
  }, [_vm._v(" — 暂无课程 — ")])]) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-65d1cc5d", esExports)
  }
}

/***/ })

},[135]);
//# sourceMappingURL=main.js.map