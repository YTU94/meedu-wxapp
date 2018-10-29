<template>
  <div>
    <!-- <ul class="container log-list" v-if="orderList && orderList.length > 0">
      <li   :class="{ red: aa }"  class="item-item">
        {{index + 1}}. {{item.title}}
      </li>
    </ul> -->
    <div class="" v-if="courseList && courseList.length > 0">
      <course-card  v-for="(item, index) in courseList" :key="index" :course="item"></course-card>
    </div>
    <div v-else class="none">~暂无课程~</div>
  </div>
</template>

<script>
// import { formatTime } from '@/utils/index'
import courseCard from '@/components/card'

export default {
  components: {
    courseCard
  },

  data () {
    return {
      logs: [],
      courseList: []
    }
  },
  computed: {
    categoryId () {
      return this.$mp.query.id
    }
  },
  methods: {
    init () {
      this._getUserCourseList({page_size: 10, page: 1}, this.categoryId)
    },

    // 获取order列表
    _getUserCourseList (data) {
      this.$http.user.getUserCourseList(data).then(res => {
        this.courseList = res.data
      })
    }
  },

  created () {},
  mounted () {
    this.init()
  }

}
</script>

<style lang="less">
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
.none {
  text-align: center;
}
</style>
