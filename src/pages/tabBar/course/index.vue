<template>
  <div class="course" @click="clickHandle('test click', $event)">
    <h1 class="couse-title">全部课程</h1>
    <div class="card-list">
      <div class="card-item" v-for="(course, index) in courseList" :key="index" @click="goVideoList(course)">
        <card :src="course.thumb" :text="course.title" ></card>
      </div>
    </div>
    <!-- <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a> -->
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      courseList: [],
      pageSize: 10
    }
  },

  components: {
    card
  },
  computed: {
    courseType () {
      return this.$mp.query.type
    }
  },
  methods: {
    init () {
      console.log('query---------->', this.$mp.query)
      if (this.courseType === 'my') {
        this._getMyCourseList({page: 1, pageSize: 10})
      } else {
        this._getCourseList({page: 1, pageSize: 10})
      }
    },
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    goVideoList (course) {
      console.log('query--------->course.id', course.id)
      wx.navigateTo({
        url: `../../videoList/main?id=${course.id}`
      })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    },
    _getCourseList (data, merge) {
      this.$http.course.getCourseList(data).then(res => {
        console.log(res)
        if (merge) {
          this.courseList = this.courseList.concat(res.data)
        } else {
          this.courseList = res.data
        }
      })
    },
    _getMyCourseList (data, merge) {
      this.$http.user.getUserCourseList(data).then(res => {
        console.log(res)
        if (merge) {
          this.courseList = this.courseList.concat(res.data)
        } else {
          this.courseList = res.data
        }
      })
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  },
  onShow () {
    this.init()
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
.course{
  position: relative;
  .couse-title{
    text-align: center;
  }
  .card-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .card-item{
      // display: flex;
      flex: 0 0 50%;
    }
  }
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
