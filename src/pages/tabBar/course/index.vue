<template>
  <div class="course" @click="clickHandle('test click', $event)">
    <swiper-banner :swiperList="courseList" :key="imgKey"></swiper-banner>
    <h1 class="couse-title">课程推荐</h1>
    <div class="card-list">
      <div class="card-item" v-for="(course, index) in courseList" :key="index" @click="goVideoList(course)">
        <!-- <card :src="course.thumb" :text="course.title" ></card> -->
        <div class="card-img">
          <img :src="course.thumb" alt="" >

        </div>
        <div class="card-info">
          <div class="card-info__name">
            {{course.title}}
            <div class="card-info__desc" v-html="course.short_description"></div>
          </div>
          
          <div class="card-info__oth" v-if="course.charge">{{course.charge}}¥</div>
          <div class="card-info__oth" v-else>免费课程</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
import swiperBanner from '@/components/swiper-banner'
export default {
  components: {
    card,
    swiperBanner
  },
  data () {
    return {
      imgKey: 'thumb',
      motto: 'Hello World',
      userInfo: {},
      courseList: [],
      pageSize: 10
    }
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

<style lang="less" >
@import '../../../assets/style/variable';
.course{
  position: relative;
  .couse-title{
    // text-align: center;
    font-size: 17px;
    padding: 40rpx;
    box-sizing: border-box;
  }
  .card-list{
    display: flex;
    padding: 0 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    justify-content: center;
    .card-item{
      display: flex;
      width: 100%;
      margin-bottom: 20px;
      .card-img{
        flex: 0 0 auto;
        img{
          width: 240rpx;
          height: 80px;
          border-radius: 10rpx;
        }
      }
      .card-info{
        display: flex;
        flex:  1;
        padding-left: 20rpx;
        margin-bottom: -5px;
        flex-direction: column;
        justify-content: space-between;
        border-bottom: 1px solid @border-color;
        &__name{
          font-size: 16px;
        }
        &__desc{
          font-size: 12px;
          color: @font-color-gray;       
        }
        &__oth{
          font-size: 12px;
          color: rgb(255, 153, 0);
          margin-bottom: 10px;
        }
      }
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
