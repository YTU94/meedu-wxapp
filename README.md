<p align="center"><img src="extra/xc.png" width="100%" height="auto"/></p>
<p align="center">
<a href="https://travis-ci.org/Qsnh/meedu"><img src="https://travis-ci.org/Qsnh/meedu.svg?branch=master" alt="Build Status"></a>
<a href="https://travis-ci.org/Qsnh/meedu"><img src="https://img.shields.io/badge/status-up-green.svg?branch=master" alt="Build Status"></a>
<a href="https://packagist.org/packages/Qsnh/meedu"><img src="https://poser.pugx.org/qsnh/meedu/license" alt="License"></a>
</p>

> A Mpvue wxApp for meEdu
-------------
 [meEdu](https://github.com/Qsnh/meedu):基于Laravel开发的在线点播系统
 
 **注：** 此分支文章部分属于我个人的博客部分，使用需注意

## 简介
在在校教育火热的年代，meedu在线点播教育系统横空出世，随后为了市场的推动，meEdu同套微信小程序跟风而至，meEdu提供了了在线观看课程视频，提交评论，以及文章的观看，同步meEdu的课程信息和个人信息。

## 功能
- [x] 视频点播板块
- [x] 文章观看(master已删除feature/ytu保留个人版本)
- [x] 个人信息模块
- [x] vip模块
- [x] 课程评论互动
- [x] 视屏评论互动
- [X] 课程搜索功能
- [X] 登录，登出功能
- [X] 分享功能（微信关闭了分享回调就以转发实现）
- [X] 赞赏功能（借助给赞小程序）
- [X] 升级了Mpvue2.0理论支持支付宝，百度，头条小程序
- [X] 添加公众号关注组件 （配置：[官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/official-account.html)）

## 规划
- [ ] 评论优化
- [ ] 项目优化配置化
 
## 结构
- api
  * core
    + server.js // http封装
  * article.js // 文章接口
  * course.js // 课程接口
- assets
  * img // 图片
  * style // 样式
- components // 组件部分
  * card/vue
  * courseCard.vue
  * swiper-banner.vue
- pages
  * comment // 评论详情
  * login // 登录
  * register // 注册
  * searchCourse // 课程搜索
  * tabBar
    - article // 课程
    - course // 文章
    - person // 个人
  * video // 视屏播放
  * videoList // 视屏列表
  * vipList // vip列表
- utils
  * index.js // 工具类函数
- app.json
- App.vue
- main.js

## API
- API接口: https://github.com/Qsnh/meedu/tree/master/docs/api/v1 (php:优先)
- [后端API](https://github.com/YTU94/back-end)：由nodejs使用express框架和mysql的提供的后端服务（开发中）


## 配置

([meEdu](https://github.com/Qsnh/meedu)需要配置client_id, client_secret)

| 参数          | 值          | 位置                            | 介绍                                                                              |
| ------------- | ----------- | ------------------------------- | --------------------------------------------------------------------------------- |
| API           | 接口地址url | /config/dev.dnv.js&&prod.env.js | 接口地址                                                                          |
| zan_path      | ***         | /config/dev.dnv.js&&prod.env.js | 给赞小程序的路径[给赞关联文档](https://mp.weixin.qq.com/s/3sTlnkHNUoAyDTmOHZ8emQ) |
| client_id     | ***         | /config/dev.dnv.js&&prod.env.js | meedue专用,[参考](https://github.com/Qsnh/meedu/blob/master/docs/%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B.md)                                                                        |
| client_secret | ***         | /config/dev.dnv.js&&prod.env.js | meedue专用,[参考](https://github.com/Qsnh/meedu/blob/master/docs/%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B.md)                                                                       |

## 使用

>推荐使用yarn (请先申请你的小程序账号[注册地址](https://mp.weixin.qq.com/cgi-bin/wx?token=&lang=zh_CN)，安装好[node](https://nodejs.org/zh-cn/), [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html))

``` bash
git clone https://github.com/YTU94/meedu-wxapp

# 1.微信开发者工具打开meedu-wxapp，填入你自己的小程序appId, 然后 `npm run build` 或者 `yarn build`, 
    更目录会生成`dist`目录
# 2.然后直接点击微信开发者工具的上传按钮，上传小程序源码（dist文件夹）
# 3.登陆微信公众平台的小程序后台提交审核，然后发布
```

> 二开请先熟悉mpvue框架和小程序开发
``` bash
# install dependencies
yarn
/* npm install */

# serve with hot reload at localhost:8080
yarn start:wx
/* npm run dev:wx */

# build for production with minification
yarn build:xw
/* npm run build:wx */

# build for production and view the bundle analyzer report
yarn build --report
/* npm run build --report */
```


## License
[MIT](http://opensource.org/licenses/MIT)

## 交流群
<img src="https://camo.githubusercontent.com/5741c3484e319b694f54d09816a485fb08c848c0/68747470733a2f2f73312e617831782e636f6d2f323031382f30392f32392f696c725776742e6a7067" width="275" height="auto" alt='' />
