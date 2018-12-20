require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([5],{

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(165);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_368227ca_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(170);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(166)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_368227ca_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\videoList\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-368227ca", Component.options)
  } else {
    hotAPI.reload("data-v-368227ca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 166:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_card__ = __webpack_require__(3);

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
    card: __WEBPACK_IMPORTED_MODULE_2__components_card__["a" /* default */]
  },

  data: function data() {
    return {
      logs: [],
      courseId: '',
      courseInfo: '',
      courseVideoList: [],
      courseCommentsList: []
    };
  },

  computed: {
    viewNum: function viewNum() {
      return parseInt(Math.random(1) * 1000);
    }
  },
  methods: {
    init: function init() {
      console.log('init this.courseId', this.courseId);
      this._getCourseInfo({}, this.courseId);
      this._getVideosList({}, this.courseId);
      this._getCourseComments({}, this.courseId);
    },
    goVideo: function goVideo(video) {
      wx.navigateTo({
        url: '../video/main?id=' + video.id + '&courseVideoList=' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.courseVideoList)
      });
      console.log('参数', video.id);
    },
    goComment: function goComment(item, redirect) {
      // TODO: 后续改动mixins
      // const comment = JSON.stringify(item)
      // console.log('参数 comment', item, comment)
      if (item) wx.setStorageSync('curCourseComent', item);
      wx.navigateTo({
        url: '../comment/main?id=' + this.courseId
      });
    },

    // 课程详情
    _getCourseInfo: function _getCourseInfo(data, id) {
      var _this = this;

      this.$http.course.getCourseInfo(data, id).then(function (res) {
        _this.courseInfo = res.data;
        _this.courseInfo.published_format = Object(__WEBPACK_IMPORTED_MODULE_1__utils_index__["a" /* formatTime */])(res.data.published_at, true);
        console.log('this.courseInfo', _this.courseInfo);
      });
    },

    // 课程下的视频列表
    _getVideosList: function _getVideosList(data, id, merge) {
      var _this2 = this;

      this.$http.course.getVideosList(data, id).then(function (res) {
        if (merge) {
          _this2.courseVideoList = _this2.courseVideoList.concat(res.data);
        } else {
          _this2.courseVideoList = res.data;
        }
      });
    },

    // 课程评论
    _getCourseComments: function _getCourseComments(data, id, merge) {
      var _this3 = this;

      this.$http.course.getCourseComments(data, id).then(function (res) {
        res.data.forEach(function (e) {
          e.created_format = Object(__WEBPACK_IMPORTED_MODULE_1__utils_index__["a" /* formatTime */])(e.created_at, true);
        });
        if (merge) {
          _this3.courseCommentsList = _this3.courseCommentsList.concat(res.data);
        } else {
          _this3.courseCommentsList = res.data;
        }
      });
    }
  },
  created: function created() {
    var logs = wx.getStorageSync('logs') || [];
    this.logs = logs.map(function (log) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils_index__["a" /* formatTime */])(new Date(log));
    });
  },
  mounted: function mounted() {
    this.courseId = this.$mp.query.id;
    this.init();
  },
  onHide: function onHide() {}
});

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "course-info"
  }, [_c('div', {
    staticClass: "info section"
  }, [(_vm.courseInfo.charge) ? _c('span', {
    staticClass: "info-tag"
  }, [_vm._v("收费课程")]) : _c('span', {
    staticClass: "info-tag"
  }, [_vm._v("免费课程")]), _vm._v(" "), _c('h1', {
    staticClass: "info-title"
  }, [_vm._v(_vm._s(_vm.courseInfo.title))]), _vm._v(" "), _c('img', {
    staticClass: "info-img",
    attrs: {
      "src": _vm.courseInfo.thumb,
      "alt": "",
      "mode": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "info-time"
  }, [_vm._v("上线时间： " + _vm._s(_vm.courseInfo.published_format) + " · 观看：" + _vm._s(_vm.courseInfo.view_num || _vm.viewNum))])], 1), _vm._v(" "), _c('section', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "introduction section "
  }, [_c('label', {
    staticClass: "section-label"
  }, [_vm._v("简介")]), _vm._v(" "), _c('p', {
    staticClass: "introduction-text",
    domProps: {
      "innerHTML": _vm._s(_vm.courseInfo.description)
    }
  })], 1), _vm._v(" "), _c('section', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "video-list section"
  }, [_c('label', {
    staticClass: "section-label"
  }, [_vm._v("视屏")]), _vm._v(" "), _c('ul', {
    staticClass: "list-container"
  }, _vm._l((_vm.courseVideoList), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "list-item",
      class: {
        red: _vm.aa
      },
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.goVideo(item)
        }
      }
    }, [_c('div', {
      staticClass: "video-icon"
    }, [_c('img', {
      staticClass: "video-icon__img",
      attrs: {
        "src": "../../assets/img/triangle-icon.png",
        "alt": "",
        "mode": "widthFix"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "video-title"
    }, [_vm._v(_vm._s((index + 1) + ' . ' + item.title))])])
  }))], 1), _vm._v(" "), _c('section', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "comments-list section"
  }, [_c('label', {
    staticClass: "section-label"
  }, [_vm._v("评论")]), _vm._v(" "), _c('label', {
    staticClass: "section-submit",
    attrs: {
      "for": "",
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.goComment('', true)
      }
    }
  }, [_vm._v("留言")]), _vm._v(" "), _c('ul', {
    staticClass: "list-container"
  }, _vm._l((_vm.courseCommentsList), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "list-item",
      class: {
        red: _vm.aa
      },
      attrs: {
        "eventid": '2-' + index
      },
      on: {
        "click": function($event) {
          _vm.goComment(item)
        }
      }
    }, [_c('img', {
      staticClass: "item-avatar",
      attrs: {
        "src": item.user.avatar,
        "alt": "",
        "mode": "widthFix"
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "item-content"
    }, [_c('div', {
      staticClass: "item-content__name"
    }, [_vm._v(_vm._s(item.user.nick_name))]), _vm._v(" "), _c('div', {
      staticClass: "item-content__time"
    }, [_vm._v(_vm._s(item.created_format))]), _vm._v(" "), _c('div', {
      staticClass: "item-content__content",
      domProps: {
        "innerHTML": _vm._s(item.content)
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "item-content__footer"
    })])])
  }))], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-368227ca", esExports)
  }
}

/***/ })

},[164]);
//# sourceMappingURL=main.js.map