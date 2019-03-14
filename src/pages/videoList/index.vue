<template>
  <div class="course-info">
    <!-- course-info -->
    <div class="info section">
      <span class="info-tag" v-if="courseInfo.charge">实战课程</span>
      <span class="info-tag" v-else>免费课程</span>
      <h1 class="info-title">{{courseInfo.title}}</h1>
      <!-- <card :src="courseInfo.thumb"></card> -->
      <img class="info-img" :src="courseInfo.thumb" alt="" mode="">
      <p class="info-time">上线时间： {{courseInfo.published_format}} · 观看：{{courseInfo.view_num || 0}}</p>
    </div>

    <section class="line"></section>
    
    <!-- introduction -->
    <div class="introduction section ">
      <label class="section-label">简介</label>
      <div class="introduction-text">
        <wxParse className="introduction-text" :content="courseInfo.description" :imageProp="imageProp" />
      </div>
    </div>
    
    <section class="line"></section>

    <!-- video list -->
    <div class="video-list section">
      <label class="section-label">视屏</label>
      <ul class="list-container">
        <video-list 
          v-for="(item, index) in courseVideoList" 
          :key="index" 
          :index="index" 
          :item="item" 
          @goVideo="goVideo"></video-list>
        <!-- <li class="list-item" v-for="(item, index) in courseVideoList" :class="{ red: aa }" :key="index" @click="goVideo(item)" >
          <div class="video-icon">
            <img class="video-icon__img" src="../../assets/img/triangle-icon.png" alt="" mode="widthFix">
          </div>
          <div class="video-title">
            <span>{{(index + 1) + ' . ' + item.title}}</span>
            <span>
              <img class="video-icon__img" src="../../assets/img/turn-right-d.png" alt="" mode="widthFix">
            </span>
          </div>
        </li> -->
      </ul>
    </div>

    <section class="line"></section>
    
    <!-- comments list -->
    <div class="comments-list section">
      <label class="section-label">评论</label>
      <label class="section-submit" for="" @click="goComment('', true)">留言</label>
      <ul class="list-container">
        <li class="list-item" v-for="(item, index) in courseCommentsList" :class="{ red: aa }" :key="index" @click="goComment(item)" >
          <img class="item-avatar" :src="item.user.avatar" alt="" mode="widthFix">
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
import wxParse from 'mpvue-wxparse'
import videoList from '@/components/video-list'

export default {
  components: {
    card,
    wxParse,
    videoList
  },

  data () {
    return {
      logs: [],
      courseId: '',
      courseInfo: '',
      courseVideoList: [],
      courseCommentsList: [],
      imageProp: {
        mode: 'widthFix'
      }
    }
  },

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
    goComment (item, redirect) {
      // TODO: 后续改动mixins
      // const comment = JSON.stringify(item)
      // console.log('参数 comment', item, comment)
      if (item) wx.setStorageSync('curCourseComent', item)
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
  onShow () {
    this.courseId = this.$mp.query.id
    this.init()
  },
  onHide () {}
}
</script>

<style lang="less">
@import '../../assets/style/variable.less';
@import url("~mpvue-wxparse/src/wxParse.css");
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
      height: 360rpx;
      border-radius: 10rpx;
      box-shadow: 0rpx 4rpx 10rpx rgba(0, 0, 0, 0.1);
      margin: 10rpx 0;
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
    }
  }
  /*
  * comments list 
  */
  .comments-list{
    .section-submit{
      float: right;
      // font-size: 13px;
      // color: #fff;
      // background: rgb(234, 124, 62);
      // border-radius: 20px;
      // padding: 5px 10px;
      background-color:#e54d42;
      color:#fff;
      transform:translate(1rpx, 1rpx);
      border-radius: 5000rpx;
      position:relative;
      display:inline-flex;
      align-items:center;
      justify-content:center;
      box-sizing:border-box;
      padding:0 30rpx;
      font-size:28rpx;
      height:64rpx;
      line-height:1;
      text-align:center;
      text-decoration:none;
      overflow:visible;
      margin-left:initial;
      transform:translate(0rpx, 0rpx);
      margin-right:initial;

    }
    .list-container{
      margin-top: 10px;
      .list-item{
        display: flex;
        .item-avatar{
          display: flex;
          flex: 0 0 auto;
          width: 96rpx;
          height: 96rpx;
          border-radius: 20px;
          padding-right: 5px;
          box-sizing: border-box;
          border-radius: 100rpx;
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
