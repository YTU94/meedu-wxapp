<template>
  <div class="video-info">
    <!-- video -->
    <div class="video-box">
      <video style="width: 100%;" v-if="playUrl && playUrl.length > 0" :src="playUrl[1].url"  controls objectFit="contain"></video>
      <div v-else class="">
        <h3>当前视频无法观看</h3>
      </div>
    </div>
    <!-- tabBar -->
    <div class="tabBar">
      <span class="tabBar-item" :class="{'tabBar-item-active': activeIndex === index}" v-for="(item, index) in tabBarList" :key="index" @click="activeIndex = index">{{item.name}}</span>
    </div>
    <!-- content -->
    <swiper :current="activeIndex" class="info-content" @change="swiperChange">
        <swiper-item >
          <div v-show="activeIndex === 0" class="introduction">
            <p class="introduction-title">{{videoInfo.title}}</p>
            <p class="introduction-description" v-html="videoInfo.description"></p>
            <p class="introduction-viewNum">播放次数：{{videoInfo.view_num}}</p>
          </div>
        </swiper-item>
        <swiper-item>
          <p>列表</p>
          <ul class="video-List">
            <li v-for="(item, index) in courseVideoList" :class="{ red: aa }" :key="index" class="list-item">
              <img class="video-icon" src="../../assets/img/triangle-icon.png" alt="" mode="widthFix">
              <div class="video-title">{{(index + 1) + ' . ' + item.title}}</div>
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
      courseVideoList: [],
      tabBarList: [
        {name: '详情', index: 0, value: 'name'},
        {name: '列表', index: 0, value: 'name'},
        {name: '评价', index: 0, value: 'name'}
      ],
      playUrl: [{url: '1'}, {url: '1'}],
      // video
      videosComments: [],
      videoInfo: {}
    }
  },
  computed: {
    videoId () {
      return this.$mp.query.id
    }
  },
  methods: {
    init () {
      this.courseVideoList = this.$mp.query.courseVideoList
      const videoId = this.$mp.query.id
      this._getVideosInfo({}, videoId)
      this._getVideosUrl({}, videoId)
      this._getVideosComments({}, videoId)
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
    this.init()
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
    height: auto;
  }
  .tabBar{
    display: flex;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    // border-bottom: 1px solid #999;
    box-shadow: 0 2rpx 8rpx 0 rgba(0, 0, 0, 0.1);
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
      border-bottom: 3px solid red;
      color: red;
    }
  }
  .info-content{
    position: relative;
    .introduction{
      position: relative;
      padding: 20px;
      box-sizing: border-box;
      &-title{
        font-size: 16px;
        color: #1A1A1A;
      }
      &-description{
        font-size: 13px;
        color: #777777;
      }
      &-viewNum{
        font-size: 10px;
        color: @font-color-gray;
      }
    }
    .video-list{
      position: relative;
      padding: 0 0 0 10px;
      box-sizing: border-box;
      .list-item{
        display: flex;
        align-items: center;
        .video-icon{
          display: flex;
          flex: 0 0 auto;
          width: 16px;
          height: auto;
          padding-right: 10px;
        }
        .video-title{
          display: flex;
          flex: 1;
          font-size: 13px;
          line-height: 2.6;
          border-bottom: 1px solid @border-color;
        }
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
