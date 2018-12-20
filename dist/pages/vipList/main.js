require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],{

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(172);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_d34b2528_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(175);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(173)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_d34b2528_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\vipList\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d34b2528", Component.options)
  } else {
    hotAPI.reload("data-v-d34b2528", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 173:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 174:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  components: {},
  data: function data() {
    return {
      logs: [],
      articleList: []
    };
  },

  computed: {
    categoryId: function categoryId() {
      return this.$mp.query.id;
    }
  },
  methods: {
    init: function init() {
      this._getVipList({ page_size: 10, page: 1 });
    },

    // 订阅会员
    buy: function buy(item) {
      wx.showToast({
        title: '请先去PC端订阅',
        icon: 'none',
        mask: true
      });
    },

    // 获取vip列表
    _getVipList: function _getVipList(data) {
      var _this = this;

      this.$http.vip.getVipList(data).then(function (res) {
        _this.articleList = res.data;
      });
    }
  },

  created: function created() {},
  mounted: function mounted() {
    this.init();
  }
});

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vip-list"
  }, [_c('ul', {
    staticClass: "container"
  }, _vm._l((_vm.articleList), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "list-item",
      class: {
        red: _vm.aa
      }
    }, [_c('div', {
      staticClass: "item-name"
    }, [_vm._v(" " + _vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticClass: "item-content"
    }, [_c('span', {
      staticClass: "item-content__price"
    }, [_vm._v("\n          " + _vm._s(item.charge) + "币\n          "), _c('span', {
      staticClass: "item-content__date"
    }, [_vm._v("/ " + _vm._s(item.expire_days) + "天")])]), _vm._v(" "), _c('button', {
      staticClass: "item-content__btn",
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.buy(item)
        }
      }
    }, [_vm._v("订阅")])], 1), _vm._v(" "), _c('div', {
      staticClass: "item-description"
    }, [_vm._v(_vm._s(item.description[0]))])])
  })), _vm._v(" "), _c('p', {
    staticClass: "footer-msg"
  }, [_vm._v("— 据相关的规定，ios不支持购买 —")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d34b2528", esExports)
  }
}

/***/ })

},[171]);
//# sourceMappingURL=main.js.map