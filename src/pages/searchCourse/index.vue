<template>
  <div class="search-course">
    <!-- 搜索框 -->
    <div class="serach-box">
      <input type="text" class="search-input" v-model="keywords" @confirm="inputConfirm" placeholder="请输入搜索内容">
      <span class="search-cancel" @click="cancel">取消</span>
    </div>
    <!-- 热门搜索 -->
    <div class="hot-search">
      <p class="title">热门搜索</p>
      <span class="search-hot-tag" @click="search(item)" v-for="(item, index) in hots" :key="index">{{item}}</span>
    </div>
    <!-- 课程列表 -->
    <div class="course-list" v-if="courseList && courseList.length > 0">
      <p class="title">相关课程</p>
      <course-card  v-for="(item, index) in courseList" :key="index" @goVideoList="goVideoList" :course="item"></course-card>
    </div>
  </div>
</template>

<script>
// import { formatTime } from '@/utils/index'
import courseCard from '@/components/courseCard.vue'

export default {
  components: {
    courseCard
  },

  data () {
    return {
      keywords: '',
      hots: ['react.js', 'go', '小程序', 'php', 'vue.js', 'python', '人工智能', '区块链'],
      courseList: []
    }
  },
  computed: {
    categoryId () {
      return this.$mp.query.id
    }
  },
  methods: {
    inputConfirm () {
      this.search(this.keywords)
    },
    search (v) {
      if (!v) {
        return (wx.showToast({
          title: '请输入搜索内容',
          icon: 'none',
          mask: true
        }))
      }
      this._getCourseList({page_size: 10, page: 1, keywords: v})
    },
    cancel () {
      wx.navigateBack({ delta: 1 })
    },
    // 跳转至课程详情
    goVideoList (obj) {
      wx.navigateTo({
        url: `./../videoList/main?id=${obj.id}`
      })
    },
    // 获取order列表
    _getCourseList (data) {
      this.$http.course.getCourseList(data).then(res => {
        this.courseList = res.data
      })
    }
  },
  created () {},
  mounted () {},
  onHide () {
    this.courseList = []
    this.keywords = ''
  },
  onUnload () {
    this.courseList = []
    this.keywords = ''
  }
}
</script>

<style lang="less">
.search-course {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 0 40rpx;
  box-sizing: border-box;
  .serach-box{
    position: relative;
    top: 0;
    left: 0;
    .search-input{
      position: relative;
      top: 0;
      left: 0;
      width: auto;
      height: 60rpx;
      margin-right: 100rpx;
      border: 1px solid #ccc;
      border-radius: 30px;
      color: #808080;
      font-size: 28rpx;
      text-align: center;
    }
    .search-cancel{
      position: absolute;
      top: 0;
      right: 0;
      width: auto;
      height: 60rpx;
      line-height: 60rpx;
      color: #808080;
      font-size: 28rpx;
    }
  }
  /*
  * 热门搜索
  */
  .hot-search{
    position: relative;
    top: 40rpx;
    left: 0;
    .title {
      font-size: 32rpx;
      color: #333333;
    }
    .search-hot-tag{
      display: inline-block;
      float: left;
      padding: 10rpx 20rpx;
      margin: 30rpx 30rpx 0 0;
      border: 1px solid #ccc;
      border-radius: 5rpx;
      color: #808080;
      white-space: wrap;
      font-size: 24rpx;
    }
  }
  /*
  * 课程列表
  */
  .course-list{
    position: relative;
    top: 80rpx;
    left: 0;
    .title{
      font-size: 32rpx;
      color: #333333;
      margin-bottom: 30rpx;
    }
  }
  .none{
    text-align: center;
  }
}
</style>
