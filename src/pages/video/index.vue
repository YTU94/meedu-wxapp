<template>
  <div class="video">
    <div class="video-box">
      <video v-if="videoInfo.url" :src="videoInfo.url"  controls ></video>
    </div>
    <p>详情</p>
    <div>{{videoInfo}}</div>
    <p>评论</p>
    <ul class="container log-list">
      <li v-for="(log, index) in videosComments" :class="{ red: aa }" :key="index" class="log-item">
        <card :text="(index + 1) + ' . ' + log"></card>
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
      src: '',
      videosComments: [],
      videoInfo: {
        url: ''
      }
    }
  },
  computed: {
    videoId () {
      return this.$mp.query.id
    }
  },
  methods: {
    init () {
      this._getVideosInfo({}, this.videoId)
      this._getVideosUrl({}, this.videoId)
      this._getVideosComments({}, this.videoId)
    },
    // 视频详情
    _getVideosInfo (data, id) {
      this.$http.video.getVideosInfo(data, id).then(res => {
        console.log(res)
        this.videoInfo = res.data
      })
    },
    // 视频播放地址
    _getVideosUrl (data, id) {
      this.$http.video.getVideosUrl(data, id).then(res => {
        console.log(res)
        this.videoInfo.url = res.data
      })
    },
    // 视频评论提交
    _getVideosComments (data, id) {
      this.$http.video.getVideosComments(data, id).then(res => {
        console.log(res)
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
.video{
  position: relative;
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
