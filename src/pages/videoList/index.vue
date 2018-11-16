<template>
  <div class="course-info">
    <!-- course-info -->
    <div class="info section">
      <span class="info-tag" v-if="courseInfo.charge">收费课程</span>
      <span class="info-tag" v-else>免费课程</span>
      <h1 class="info-title">{{courseInfo.title}}</h1>
      <!-- <card :src="courseInfo.thumb"></card> -->
      <img class="info-img" :src="courseInfo.thumb" alt="" mode="widthFix">
      <p class="info-time">上线时间： {{courseInfo.published_format}} · 观看：{{courseInfo.view_num || 0}}</p>
    </div>

    <section class="line"></section>
    
    <!-- introduction -->
    <div class="introduction section ">
      <label class="section-label">简介</label>
      <p class="introduction-text" v-html="courseInfo.description"></p>
    </div>
    
    <section class="line"></section>

    <!-- video list -->
    <div class="video-list section">
      <label class="section-label">视屏</label>
      <ul class="list-container">
        <li class="list-item" v-for="(item, index) in courseVideoList" :class="{ red: aa }" :key="index" @click="goVideo(item)" >
          <div class="video-icon">
            <img class="video-icon__img" src="../../assets/img/triangle-icon.png" alt="" mode="widthFix">
          </div>
          <div class="video-title">{{(index + 1) + ' . ' + item.title}}</div>
        </li>
      </ul>
    </div>

    <section class="line"></section>
    
    <!-- comments list -->
    <div class="comments-list section">
      <label class="section-label">评论</label>
      <ul class="list-container">
        <li class="list-item" v-for="(item, index) in courseCommentsList" :class="{ red: aa }" :key="index" @click="goComment(item)" >
          <img class="item-avatar" :src="item.user.avatar" alt="" mode="widthFix">
          <!-- {{(index + 1) + ' . ' + item.user.nick_name}}: <span v-html="item.content"></span> -->
          <div class="item-content">
            <div class="item-content__name">{{item.user.nick_name}}</div>
            <div class="item-content__time">{{item.created_format}}</div>
            <div class="item-content__content" v-html="item.content"></div>
            <div class="item-content__footer"></div>

          </div>
        </li>
      </ul>
    </div>
    
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
      logs: [],
      courseId: '',
      courseInfo: '',
      courseVideoList: [],
      courseCommentsList: []
    }
  },
  // computed: {
  //   courseId () {
  //     return this.$mp.query.id
  //   }
  // },
  methods: {
    init () {
      console.log('init this.courseId', this.courseId)
      this._getCourseInfo({}, this.courseId)
      this._getVideosList({}, this.courseId)
      this._getCourseComments({}, this.courseId)
    },
    goVideo (video) {
      wx.navigateTo({
        url: `../video/main?id=${video.id}&courseVideoList=${JSON.stringify(this.courseVideoList)}`
      })
      console.log('参数', video.id)
    },
    goComment (item) {
      // TODO: 后续改动mixins
      const comment = JSON.stringify(item)
      console.log('参数 comment', item, comment)
      wx.setStorageSync('curCourseComent', item)
      wx.navigateTo({
        url: `../comment/main?id=${this.courseId}`
      })
    },
    // 课程详情
    _getCourseInfo (data, id) {
      this.$http.course.getCourseInfo(data, id).then(res => {
        this.courseInfo = res.data
        this.courseInfo.published_format = formatTime(res.data.published_at, true)
        console.log('this.courseInfo', this.courseInfo)
      })
    },
    // 课程下的视频列表
    _getVideosList (data, id, merge) {
      this.$http.course.getVideosList(data, id).then(res => {
        if (merge) {
          this.courseVideoList = this.courseVideoList.concat(res.data)
        } else {
          this.courseVideoList = res.data
        }
      })
    },
    // 课程评论
    _getCourseComments (data, id, merge) {
      this.$http.course.getCourseComments(data, id).then(res => {
        res.data.forEach(e => {
          e.created_format = formatTime(e.created_at, true)
        })
        if (merge) {
          this.courseCommentsList = this.courseCommentsList.concat(res.data)
        } else {
          this.courseCommentsList = res.data
        }
      })
    }
  },
  created () {
    const logs = (wx.getStorageSync('logs') || [])
    this.logs = logs.map(log => formatTime(new Date(log)))
  },
  mounted () {
    this.courseId = this.$mp.query.id
    this.init()
  },
  onHide () {}
}
</script>

<style lang="less">
@import '../../assets/style/variable.less';

.line{
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: @bg-color;
}
.course-info{
  width: 100%;
  height: auto;
  position: relative;
  top: 0;
  left: 0;
  background-color: #fff;
  .section{
    position: relative;
    padding: 20px;
    box-sizing: border-box;
    &-label{
      font-size: 16px;
      color: #1A1A1A;
      line-height: 2.0;
    }
  }
  .info{
    &-tag{
      position: relative;
      top: 0;
      left: 0;
      display: inline-block;
      font-size: 12px;
      color: #fff;
      background-color: red;
      border-radius: 50px;
      padding: 3px 10px;
      box-sizing: border-box;
    }
    &-title{
      font-size: 18px;
      padding: 10rpx 0;
    }
    &-img{
      width: 100%;
      height: auto;
      border-radius: 10rpx;
    }
    &-time{
      font-size: 12px;
      color: @font-color-gray;
    }
  }
  /*
  * introduction 简介
  */
  .introduction{
    &-text{
      font-size: 12px;
      color: @font-color-gray;
    }
  }
  /*
  * video list 
  */
  .video-list{
    .list-container{
      padding: 0 0 0 10px;
      position: relative;
      .list-item{
        display: flex;
        align-items: center;
        .video-icon{
          display: flex;
          flex: 0 0 auto;
          width: 32rpx;
          height: 32rpx;
          border: 1px solid #787878;
          align-items: center;
          justify-content: center;
          border-radius: 32rpx;
          margin-right: 10px;
          transform: rotate(-90deg);
          &__img{
            flex: 0 0 auto;
            width:20rpx;
            height: auto;
            position: relative;
            top: 3rpx;
          }
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
  }
  /*
  * comments list 
  */
  .comments-list{
    .list-container{
      .list-item{
        display: flex;
        .item-avatar{
          display: flex;
          flex: 0 0 auto;
          width: 40px;
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
            position: absolute;
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
          &__footer{
            position: relative;
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
            font-size: 12px;
            border-bottom: 1px solid @border-color;
            margin-bottom: 15px;
          }
        }
      }
    }
  }
}
</style>
