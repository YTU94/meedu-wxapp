<template>
  <div>
    <h1>{{courseInfo.title}}</h1>
    <card :src="courseInfo.thumb"></card>
    <p v-html="courseInfo.short_description"></p>
    <p>上线时间： {{courseInfo.published_at}}</p>
    <!-- video list -->
    <ul class="container log-list">
      <li v-for="(item, index) in courseVideoList" :class="{ red: aa }" :key="index" @click="goVideo(item)" class="log-item">
        <!-- <card :text="(index + 1) + ' . ' + item.title"></card> -->
        {{(index + 1) + ' . ' + item.title}}
      </li>
    </ul>
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
      courseInfo: '',
      courseVideoList: []
    }
  },
  computed: {
    courseId () {
      return this.$mp.query.id
    }
  },
  methods: {
    init () {
      this._getCourseInfo({}, this.courseId)
      this._getVideosList({}, this.courseId)
    },
    goVideo (video) {
      wx.navigateTo({
        url: `../video/main?id=${video.id}`
      })
    },
    // 课程详情
    _getCourseInfo (data, id) {
      this.$http.course.getCourseInfo(data, id).then(res => {
        console.log(res)
        this.courseInfo = res.data
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
        if (merge) {
          this.courseVideoList = this.courseVideoList.concat(res.data)
        } else {
          this.courseVideoList = res.data
        }
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

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
