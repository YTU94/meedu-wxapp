require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(160);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_628ab90c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(163);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(161)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_628ab90c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\video\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-628ab90c", Component.options)
  } else {
    hotAPI.reload("data-v-628ab90c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 161:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 162:
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
      src: '',
      activeIndex: 0,
      courseVideoList: [],
      tabBarList: [{ name: '详情', index: 0, value: 'name' }, { name: '列表', index: 0, value: 'name' }, { name: '评价', index: 0, value: 'name' }],
      playUrl: [{ url: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400' }, { url: '' }],
      // video
      videoId: '',
      videosComments: [],
      videoInfo: {},
      swiperHeight: wx.getSystemInfoSync().windowHeight - 265
    };
  },

  computed: {
    viewNum: function viewNum() {
      return parseInt(Math.random(1) * 1000);
    }
  },
  onReady: function onReady() {
    // const that = this
    // this.swiperHeight = wx.getSystemInfoSync().windowHeight - 265
    // wx.downloadFile({
    //   url: 'https://img.ccsc.work/test%2F3176f36b9cee7cbdef_10.mp4?OSSAccessKeyId=LTAIfNCN3kQQlBHl&Expires=1630107264&Signature=MpMLkHgtRZ5jzmye4ACSt%2BALejo%3D', // 仅为示例，并非真实的资源
    //   success (res) {
    //     that.playUrl[1].url = res.tempFilePath
    //     // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
    //     if (res.statusCode === 200) {
    //       wx.playVoice({
    //         filePath: res.tempFilePath
    //       })
    //     }
    //   }
    // })
  },

  methods: {
    init: function init() {
      console.log('courseVideoList', this.$mp.query, this.courseVideoList);
      this.courseVideoList = JSON.parse(this.$mp.query.courseVideoList);
      var videoId = this.$mp.query.id;
      this._getVideosInfo({}, videoId);
      this._getVideosUrl({}, videoId);
      this._getVideosComments({}, videoId);
    },
    swiperChange: function swiperChange(e) {
      console.log('e ----- >', e);
      this.activeIndex = e.mp.detail.current;
    },

    // 切换视屏
    goVideo: function goVideo() {
      // TODO: 视屏切换
    },

    // 跳去评论
    goComment: function goComment(item, retirect) {
      // TODO: 后续改动mixins
      if (item) wx.setStorageSync('curCourseComent', item);
      wx.navigateTo({
        url: '../comment/main?id=' + this.courseId + '&type=video'
      });
    },

    // 视频详情
    _getVideosInfo: function _getVideosInfo(data, id) {
      var _this = this;

      this.$http.video.getVideosInfo(data, id).then(function (res) {
        _this.videoInfo = res.data;
      });
    },

    // 视频播放地址
    _getVideosUrl: function _getVideosUrl(data, id) {
      var _this2 = this;

      this.$http.video.getVideosUrl(data, id).then(function (res) {
        console.log('_getVideosUrl', res);
        _this2.playUrl = res;
      }).catch(function (err) {
        console.log(err);
        wx.showToast({
          title: '未知错误',
          icon: 'node',
          mask: true
        });
      });
    },

    // 视频评论提交
    _getVideosComments: function _getVideosComments(data, id, merge) {
      var _this3 = this;

      this.$http.video.getVideosComments(data, id).then(function (res) {
        res.data.forEach(function (e) {
          e.created_format = Object(__WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* formatTime */])(e.created_at);
        });
        if (merge) {
          _this3.videosComments = _this3.videosComments.concat(res.data);
        } else {
          _this3.videosComments = res.data;
        }
      });
    }
  },
  created: function created() {
    var logs = wx.getStorageSync('logs') || [];
    this.logs = logs.map(function (log) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* formatTime */])(new Date(log));
    });
  },
  mounted: function mounted() {
    this.videoId = this.$mp.query.id;
    this.init();
  }
});

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "video-info"
  }, [_c('div', {
    staticClass: "video-box"
  }, [(_vm.playUrl && _vm.playUrl.length > 0) ? _c('video', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "src": _vm.playUrl[0].url,
      "controls": "",
      "objectFit": "contain"
    }
  }) : _c('div', {}, [_c('h3', [_vm._v("当前视频无法观看")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "tabBar"
  }, _vm._l((_vm.tabBarList), function(item, index) {
    return _c('span', {
      key: index,
      staticClass: "tabBar-item",
      class: {
        'tabBar-item-active': _vm.activeIndex === index
      },
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.activeIndex = index
        }
      }
    }, [_vm._v(_vm._s(item.name))])
  })), _vm._v(" "), _c('swiper', {
    staticClass: "info-content",
    style: ({
      'height': _vm.swiperHeight * 2 + 'rpx'
    }),
    attrs: {
      "current": _vm.activeIndex,
      "eventid": '4'
    },
    on: {
      "change": _vm.swiperChange
    }
  }, [_c('swiper-item', {
    attrs: {
      "mpcomid": '0'
    }
  }, [_c('scroll-view', {
    style: ({
      'height': _vm.swiperHeight * 2 + 'rpx'
    }),
    attrs: {
      "scroll-y": ""
    }
  }, [_c('div', {
    staticClass: "introduction"
  }, [_c('p', {
    staticClass: "introduction-title"
  }, [_c('span', {
    staticClass: "introduction-title__name"
  }, [_vm._v(_vm._s(_vm.videoInfo.title))]), _vm._v(" "), _c('span', {
    staticClass: "introduction-title__num"
  }, [_vm._v("播放次数：" + _vm._s(_vm.videoInfo.view_num || _vm.viewNum))])]), _vm._v(" "), _c('p', {
    staticClass: "introduction-lable c-red"
  }, [_vm._v("简介")]), _vm._v(" "), _c('p', {
    staticClass: "introduction-description",
    domProps: {
      "innerHTML": _vm._s(_vm.videoInfo.short_description)
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "introduction-lable c-red"
  }, [_vm._v("详细介绍")]), _vm._v(" "), _c('p', {
    staticClass: "introduction-description",
    domProps: {
      "innerHTML": _vm._s(_vm.videoInfo.description)
    }
  })], 1)])], 1), _vm._v(" "), _c('swiper-item', {
    attrs: {
      "mpcomid": '1'
    }
  }, [_c('scroll-view', {
    style: ({
      'height': _vm.swiperHeight * 2 + 'rpx'
    }),
    attrs: {
      "scroll-y": ""
    }
  }, [_c('ul', {
    staticClass: "list-container"
  }, _vm._l((_vm.courseVideoList), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "list-item",
      class: {
        red: _vm.aa
      },
      attrs: {
        "eventid": '1-' + index
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
  }))], 1)], 1), _vm._v(" "), _c('swiper-item', {
    attrs: {
      "mpcomid": '2'
    }
  }, [_c('scroll-view', {
    style: ({
      'height': _vm.swiperHeight * 2 + 'rpx'
    }),
    attrs: {
      "scroll-y": ""
    }
  }, [(_vm.videosComments && _vm.videosComments.length > 0) ? _c('ul', {
    staticClass: "comments-list"
  }, _vm._l((_vm.videosComments), function(item, index) {
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
    })])])
  })) : _c('p', {
    staticStyle: {
      "text-align": "center",
      "padding": "25px 0"
    }
  }, [_vm._v("~暂无评价~")])], 1), _vm._v(" "), _c('div', {
    staticClass: "btn-submit",
    attrs: {
      "for": "",
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.goComment('', true)
      }
    }
  }, [_vm._v("留言")])], 1)], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-628ab90c", esExports)
  }
}

/***/ })

},[159]);
//# sourceMappingURL=main.js.map