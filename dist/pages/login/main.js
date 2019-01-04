require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([14],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(103);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fed37b0c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(106);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(104)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fed37b0c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\login\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fed37b0c", Component.options)
  } else {
    hotAPI.reload("data-v-fed37b0c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 104:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 105:
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




/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    card: __WEBPACK_IMPORTED_MODULE_1__components_card__["a" /* default */]
  },
  data: function data() {
    return {
      isHidden: false,
      isPassword: true,
      logs: [],
      form: {
        account: '',
        password: ''
      }
    };
  },

  methods: {
    toIndex: function toIndex() {
      wx.switchTab({
        url: '../tabBar/course/main'
      });
    },
    goRegister: function goRegister() {
      wx.navigateTo({
        url: '../register/main'
      });
    },
    ckeckLogin: function ckeckLogin() {},
    login: function login() {
      console.log(Object({"NODE_ENV":"development","API":"https://58hualong.com","zan_path":"pages/apps/largess/detail?accountId=5686224","client_id":"4","client_secret":"ySVIM8phjzVO5XdEZWNXyMHwjo5n23MmpVfi2Xs9"}));
      var data = {
        scope: '',
        grant_type: 'password',
        client_id: "4",
        client_secret: "ySVIM8phjzVO5XdEZWNXyMHwjo5n23MmpVfi2Xs9",
        username: this.form.account || '',
        password: this.form.password || ''
      };
      if (!this.form.account) {
        wx.showToast({
          title: '账号不能为空',
          icon: 'none',
          mask: true
        });
        return false;
      }
      if (!this.form.password) {
        wx.showToast({
          title: '密码不能为空',
          icon: 'none',
          mask: true
        });
        return false;
      }
      this.$http.user.login(data).then(function (res) {
        if (res.expires_in) {
          console.log(new Date());
        }
        if (res.access_token) wx.setStorageSync('access_token', res.access_token);
        wx.switchTab({
          url: '../tabBar/course/main'
        });
      }).catch(function (err) {
        console.log('catch err', err);
        wx.switchTab({
          url: '../tabBar/course/main'
        });
      });
    }
  },
  created: function created() {
    var logs = wx.getStorageSync('logs') || [];
    this.logs = logs.map(function (log) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* formatTime */])(new Date(log));
    });
  },
  onShow: function onShow() {
    console.log('------>login show');
    if (wx.getStorageSync('access_token')) {
      wx.switchTab({
        url: '../tabBar/course/main'
      });
    } else {
      this.isHidden = true;
    }
  },
  onReady: function onReady() {
    console.log('------>login ready');
  },
  OnHide: function OnHide() {
    this.isHidden = false;
  },
  onUnload: function onUnload() {
    this.isHidden = false;
  },

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

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isHidden),
      expression: "isHidden"
    }],
    staticClass: "login"
  }, [_c('p', {
    staticClass: "login-title"
  }, [_vm._v("MeEdu Login")]), _vm._v(" "), _c('view', {
    staticClass: "section"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.account),
      expression: "form.account"
    }],
    attrs: {
      "placeholder-class": "input-holder",
      "placeholder": "请输入您的账号",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.form.account)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.account = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('view', {
    staticClass: "section"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.password),
      expression: "form.password"
    }],
    attrs: {
      "type": "password",
      "placeholder-class": "input-holder",
      "password": _vm.isPassword,
      "placeholder": "请输入您的密码",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.form.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.password = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.login
    }
  }, [_vm._v("登录")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.toIndex
    }
  }, [_vm._v("游客登录")]), _vm._v(" "), _c('p', {
    staticClass: "login-text"
  }, [_vm._v("登陆/注册即视为同意"), _c('span', {
    staticStyle: {
      "color": "#8ECEF4"
    }
  }, [_vm._v("meEdu协议")])])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fed37b0c", esExports)
  }
}

/***/ })

},[102]);
//# sourceMappingURL=main.js.map