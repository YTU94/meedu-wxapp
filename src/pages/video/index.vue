<template>
  <div class="video-info">
    <!-- video -->
    <div class="video-box">
      <video style="width: 100%;" v-if="playUrl && playUrl.length > 0" :src="playUrl[1].url"  controls objectFit="contain"></video>
    </div>
    <!-- tabBar -->
    <div class="tabBar">
      <span class="tabBar-item" :class="{'tabBar-item-active': activeIndex === index}" v-for="(item, index) in tabBarList" :key="index" @click="activeIndex = index">{{item.name}}</span>
    </div>
    <!-- content -->
    <swiper :current="activeIndex" class="info-content" @change="swiperChange" :style="{'height': swiperHeight * 2 + 'rpx'}">
        <swiper-item :style="{'hieght': swiperHieght * 2 + 'rpx'}" style="overflow: auto;">
          <scroll-view scroll-y :style="{'hieght': swiperHieght * 2 + 'rpx'}">
            <div v-show="activeIndex === 0" class="introduction">
              <p class="introduction-title">
                <span class="introduction-title__name">{{videoInfo.title}}</span>
                <span class="introduction-title__num">播放次数：{{videoInfo.view_num}}</span>
              </p>
              <p class="introduction-lable">简介</p>
              <p class="introduction-description" v-html="videoInfo.short_description"></p>            
              <p class="introduction-lable">详细介绍</p>
              <p class="introduction-description" v-html="videoInfo.description"></p>
            </div>
          </scroll-view>
        </swiper-item>
        <swiper-item>
          <p>李彪</p>
          <ul class="comments log-list">
            <li v-for="(item, index) in videosComments" :class="{ red: aa }" :key="index" class="log-item">
              {{item}}
            </li>
          </ul>
        </swiper-item>
        <swiper-item>
          <ul class="comments-list">
            <li class="list-item" v-for="(item, index) in videosComments" :class="{ red: aa }" :key="index" >
              <img class="item-avatar" v-if="item.user" :src="item.user.avatar" alt="" mode="widthFix">
              <div class="item-content">
                <div class="item-content__name" v-if="item.user">{{item.user.nick_name}}</div>
                <div class="item-content__time">{{item.created_at}}</div>
                <div class="item-content__content" v-html="item.content"></div>
              </div>
            </li>
          </ul>
        </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import card from '@/components/card'

export default {
  components: {
    card
  },

  data () {
    return {
      src: '',
      activeIndex: 0,
      tabBarList: [
        {name: '详情', index: 0, value: 'name'},
        {name: '列表', index: 0, value: 'name'},
        {name: '评价', index: 0, value: 'name'}
      ],
      playUrl: [{url: '1'}, {url: '1'}],
      // video
      videosComments: [],
      videoInfo: {},
      swiperHeight: ''
    }
  },
  computed: {
    videoId () {
      return this.$mp.query.id
    }
    // swiperHieght () {
    //   const height = wx.getSystemInfoSync().windowHeight
    //   return height - 225
    // }
  },
  onReady () {
    this.swiperHeight = wx.getSystemInfoSync().windowHeight - 265
  },
  methods: {
    init () {
      this._getVideosInfo({}, this.videoId)
      this._getVideosUrl({}, this.videoId)
      this._getVideosComments({}, this.videoId)
    },
    swiperChange (e) {
      this.activeIndex = e.mp.detail.current
    },
    // 视频详情
    _getVideosInfo (data, id) {
      this.$http.video.getVideosInfo(data, id).then(res => {
        this.videoInfo = res.data
      })
    },
    // 视频播放地址
    _getVideosUrl (data, id) {
      this.$http.video.getVideosUrl(data, id).then(res => {
        console.log('_getVideosUrl', res)
        this.playUrl = res
      })
    },
    // 视频评论提交
    _getVideosComments (data, id) {
      this.$http.video.getVideosComments(data, id).then(res => {
        this.videosComments = res.data
      })
    }
  },
  created () {
    const logs = (wx.getStorageSync('logs') || [])
    this.logs = logs.map(log => formatTime(new Date(log)))
  },
  mounted () {
    // this.init()
  }
}
</script>

<style lang="less">
@import '../../assets/style/variable.less';

.video-info{
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  .video-box{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 450rpx;
  }
  .tabBar{
    display: flex;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    // border-bottom: 1px solid #999;
    box-shadow: 0px 2px 4px rgba(1, 1, 1, .3);
    justify-content: center;
    &-item{
      display: flex;
      flex: 1;
      line-height: 2;
      font-size: 14px;
      color: #777777;
      justify-content: center;
    }
    &-item-active{
      border-bottom: 2px solid red;
      color: red;
    }
  }
  .info-content{
    position: relative;
    .introduction{
      position: relative;
      width: 100%;
      height: auto;
      padding: 20px;
      box-sizing: border-box;
      &-title{
        display: flex;
        padding: 0 0 20px;
        border-bottom: 1px solid @border-color;
        &__name{
          flex: 1;
          font-size: 16px;
          color: #1A1A1A;
        }
        &__num{
          flex: 0 0 auto;
          font-size: 10px;
          color: @font-color-gray;
        }
      }
      &-lable{
        font-size: 16px;
        color: #1A1A1A;
        padding: 10px 0;
      }
      &-description, &-short_description{
        font-size: 13px;
        color: #777777;
        padding-left: 20px;
        box-sizing: border-box;
      }
    }
    .comments-list{
      padding: 20px;
      box-sizing: border-box;
      .list-item{
        display: flex;
        padding: 10px 0;
        border-bottom: 1px solid @border-color;
        .item-avatar{
          display: flex;
          flex: 0 0 auto;
          width: 30px;
          height: auto;
          border-radius: 20px;
          padding-right: 5px;
          box-sizing: border-box;
        }
        .item-content{
          display: flex;
          flex: 1;
          position: relative;
          flex-direction: column;
          &__name{
            position: relative;
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
            font-size: 14px;
            color: darkslateblue;
          }
          &__time{
            position: relative;
            top: 0;
            right: 0;
            font-size: 10px;
            color: @font-color-gray;
          }
          &__content{
            position: relative;
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
            padding: 5px 0;
            font-size: 12px;
            color: #1A1A1A;
          }
        }
      }
    }
  }

}
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
