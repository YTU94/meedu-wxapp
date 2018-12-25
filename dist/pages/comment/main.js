require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([16],{

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(90);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_12aa9070_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(96);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(91)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_12aa9070_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\comment\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-12aa9070", Component.options)
  } else {
    hotAPI.reload("data-v-12aa9070", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 91:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 92:
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
      type: '',
      courseId: '',
      articleList: [],
      inputFocus: false,
      commentContent: '',
      curCommentsList: [],
      callbackCommentsList: []
    };
  },

  methods: {
    init: function init() {},
    inputBlur: function inputBlur() {
      console.log('inputBlur请输入评论');
    },

    // 提交评论
    submit: function submit() {
      console.log('submit请输入评论');
      if (this.commentContent) {
        this._submitComments(this.commentContent, this.courseId, this.type);
      } else {
        wx.showToast({
          title: '请输入评论',
          icon: 'none',
          mask: true
        });
      }
    },
    _submitComments: function _submitComments(content, id, type) {
      var _this = this;

      this.$http[type].submitComments({ content: content }, id).then(function (res) {
        res.data.forEach(function (e) {
          e.created_format = Object(__WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* formatTime */])(e.created_at, true);
        });
        _this.callbackCommentsList = _this.callbackCommentsList.concat(res.data);
        console.log('callbackCommentsList', res.data, _this.callbackCommentsList);
      });
    }
  },

  created: function created() {},
  mounted: function mounted() {
    this.init();
    this.type = this.$mp.query.type || 'course';
    this.courseId = this.$mp.query.id;
    if (wx.getStorageSync('curCourseComent')) this.curCommentsList[0] = wx.getStorageSync('curCourseComent');
  },
  onHide: function onHide() {
    wx.removeStorageSync('curCourseComent');
  },
  onUnload: function onUnload() {
    wx.removeStorageSync('curCourseComent');
  }
});

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "comment"
  }, [_c('div', {
    staticClass: "comments-list section"
  }, [(_vm.curCommentsList && _vm.curCommentsList.length > 0) ? _c('ul', {
    staticClass: "list-container"
  }, _vm._l((_vm.curCommentsList), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "list-item",
      class: {
        red: _vm.aa
      }
    }, [(item.user) ? _c('img', {
      staticClass: "item-avatar",
      attrs: {
        "src": item.user.avatar,
        "alt": "",
        "mode": "widthFix"
      }
    }) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "item-content"
    }, [(item.user) ? _c('div', {
      staticClass: "item-content__name"
    }, [_vm._v(_vm._s(item.user.nick_name))]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "item-content__time"
    }, [_vm._v(_vm._s(item.created_format))]), _vm._v(" "), _c('div', {
      staticClass: "item-content__content",
      domProps: {
        "innerHTML": _vm._s(item.content)
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "item-content__footer"
    })])])
  })) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "section-label"
  }, [_vm._v("评论")]), _vm._v(" "), _c('div', {
    staticClass: "input-line"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.commentContent),
      expression: "commentContent"
    }],
    staticClass: "input-line__realInput",
    attrs: {
      "confirm-type": "done",
      "placeholder": "快来写下你的评论吧~",
      "type": "text",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.commentContent)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.commentContent = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "submit-btn",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("提交")]), _vm._v(" "), _c('div', {
    staticClass: "comments-list section"
  }, [(_vm.callbackCommentsList && _vm.callbackCommentsList.length > 0) ? _c('ul', {
    staticClass: "list-container"
  }, _vm._l((_vm.callbackCommentsList), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "list-item"
    }, [(item.user) ? _c('img', {
      staticClass: "item-avatar",
      attrs: {
        "src": item.user.avatar,
        "alt": "",
        "mode": "widthFix"
      }
    }) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "item-content"
    }, [(item.user) ? _c('div', {
      staticClass: "item-content__name"
    }, [_vm._v(_vm._s(item.user.nick_name))]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "item-content__time"
    }, [_vm._v(_vm._s(item.created_format))]), _vm._v(" "), _c('div', {
      staticClass: "item-content__content",
      domProps: {
        "innerHTML": _vm._s(item.content)
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "item-content__footer"
    })])])
  })) : _vm._e()], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-12aa9070", esExports)
  }
}

/***/ })

},[89]);
//# sourceMappingURL=main.js.map