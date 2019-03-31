<template>
  <div class="course-list">
    <div class v-if="courseList && courseList.length > 0">
      <course-card
        v-for="(item, index) in courseList"
        :key="index"
        @goVideoList="goVideoList"
        :course="item"
      ></course-card>
    </div>
    <div v-else class="none">~暂无课程~</div>
  </div>
</template>

<script>
// import { formatTime } from '@/utils/index'
import courseCard from "@/components/courseCard.vue";

export default {
  components: {
    courseCard
  },

  data() {
    return {
      logs: [],
      courseList: []
    };
  },

  methods: {
    init() {
      this._getUserCourseList(
        { page_size: 10, page: 1 },
        this.$mp.query.id || ""
      );
    },
    // 跳转至课程详情
    goVideoList(obj) {
      wx.navigateTo({
        url: `./../../../videoList/main?id=${obj.id}`
      });
    },
    // 获取order列表
    _getUserCourseList(data) {
      this.$http.user.getUserCourseList(data).then(res => {
        this.courseList = res.data;
      });
    }
  },

  created() {},
  mounted() {
    this.init();
  }
};
</script>

<style lang="less">
.course-list {
  display: flex;
  flex-direction: column;
  padding: 20rpx;
  .none {
    text-align: center;
  }
}
</style>
