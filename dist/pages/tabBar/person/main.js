require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([7],{

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(150);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_845571d2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(153);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(151)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_845571d2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\tabBar\\person\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-845571d2", Component.options)
  } else {
    hotAPI.reload("data-v-845571d2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 151:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 152:
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

// import { formatTime } from '@/utils/index'

/* harmony default export */ __webpack_exports__["a"] = ({
  components: {},
  data: function data() {
    return {
      userInfo: '',
      userInformation: {
        name: '',
        idno: '',
        phone: ''
      },
      couponList: [],
      couponListTotal: 0,
      rebateOrderList: [],
      rebateOrderTotal: 0,
      showCouponModel: false
    };
  },
  onShow: function onShow() {
    this.init();
    console.log('Onshow---------->');
    // this._getClientCouponList()
    // this._getUserRebateOrderList()
  },

  methods: {
    init: function init() {
      this._getUserInfo();
    },

    // 我的课程
    toMyCourse: function toMyCourse() {
      // const type = 'my'
      wx.navigateTo({
        url: './courseList/main'
      });
    },

    // 去购买会员
    bugVip: function bugVip() {
      wx.navigateTo({
        url: '../../vipList/main'
      });
    },

    // 我的订单
    goOrderList: function goOrderList() {
      wx.navigateTo({
        url: './orderList/main'
      });
    },

    // 退出登录
    lagout: function lagout() {
      try {
        wx.clearStorageSync();
      } catch (e) {
        // Do something when catch error
        console.log(e);
      }
      wx.reLaunch({
        url: '../../login/main'
      });
    },

    // 打开给赞小程序
    appreciate: function appreciate() {
      wx.navigateToMiniProgram({
        appId: 'wx18a2ac992306a5a4',
        path: "pages/apps/largess/detail?accountId=5686224",
        envVersion: 'release',
        success: function success(res) {
          // 打开成功
        }
      });
    },
    _getUserInfo: function _getUserInfo(data) {
      var _this = this;

      this.$http.user.getUserInfo().then(function (res) {
        _this.userInfo = res.data;
      });
    }
  }
});

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "person"
  }, [_c('div', {
    staticClass: "header"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "user-msg-card"
  }, [_c('div', {
    staticClass: "top"
  }, [_c('div', {
    staticClass: "organ-name"
  }, [(_vm.userInfo) ? _c('div', [_vm._v(_vm._s(_vm.userInfo.nick_name))]) : _c('open-data', {
    attrs: {
      "type": "userNickName",
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "avatar"
  }, [(_vm.userInfo) ? _c('img', {
    staticClass: "avavtao-img",
    attrs: {
      "src": _vm.userInfo.avatar,
      "alt": "",
      "mode": "widthFix"
    }
  }) : _c('open-data', {
    staticClass: "avavtao-img",
    attrs: {
      "type": "userAvatarUrl",
      "mpcomid": '1'
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "user"
  }, [_c('ul', {
    staticClass: "info"
  }, [_c('li', {
    staticClass: "info-item"
  }, [_vm._v("\n        我的会员\n        "), (_vm.usrInfo && _vm.userInfo.role && _vm.userInfo.role.length > 0) ? _c('span', {
    staticClass: "info-item-content"
  }, [_vm._v(_vm._s(_vm.userInfo.role || '普通会员'))]) : _vm._e()]), _vm._v(" "), _c('li', {
    staticClass: "info-item"
  }, [_vm._v("余额"), _c('span', {
    staticClass: "info-item-content"
  }, [_vm._v(_vm._s(_vm.userInformation.name || 0) + "币")])]), _vm._v(" "), (_vm.userInfo) ? _c('li', {
    staticClass: "info-item"
  }, [_vm._v("手机号"), _c('span', {
    staticClass: "info-item-content"
  }, [_vm._v(_vm._s(_vm.userInfo.mobile || ' '))])]) : _vm._e(), _vm._v(" "), _c('li', {
    staticClass: "info-item",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.toMyCourse
    }
  }, [_vm._v("\n        我的课程"), _c('span', {
    staticClass: "info-item-content"
  }, [_c('img', {
    staticClass: "turn-right-icon",
    attrs: {
      "src": "../../../assets/img/turn-right-d.png",
      "alt": "",
      "mode": "widthFix"
    }
  })])]), _vm._v(" "), _c('li', {
    staticClass: "info-item",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.goOrderList
    }
  }, [_vm._v("\n        我的订单"), _c('span', {
    staticClass: "info-item-content"
  }, [_c('img', {
    staticClass: "turn-right-icon",
    attrs: {
      "src": "../../../assets/img/turn-right-d.png",
      "alt": "",
      "mode": "widthFix"
    }
  })])]), _vm._v(" "), _c('li', {
    staticClass: "info-item",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.appreciate
    }
  }, [_vm._v("赞赏"), _c('span', {
    staticClass: "info-item-content"
  }, [_c('img', {
    staticClass: "turn-right-icon",
    attrs: {
      "src": "../../../assets/img/turn-right-d.png",
      "alt": "",
      "mode": "widthFix"
    }
  })])])], 1)], 1), _vm._v(" "), _c('button', {
    staticClass: "lagout-btn",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.lagout
    }
  }, [_vm._v("退出登陆")])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bg-img"
  }, [_c('img', {
    attrs: {
      "src": "../../../assets/img/person-bg.png",
      "alt": "",
      "mode": "center"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-845571d2", esExports)
  }
}

/***/ })

},[149]);
//# sourceMappingURL=main.js.map