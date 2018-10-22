<template>
  <div>
    <ul class="container log-list">
      <li v-for="(item, index) in articleList" @click="goArticleInfo(item)" :class="{ red: aa }" :key="index" class="item-item">
        {{index + 1}}. {{item.title}}
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
      articleList: []
    }
  },
  computed: {
    categoryId () {
      return this.$mp.query.id
    }
  },
  methods: {
    init () {
      this._getVipList({page_size: 10, page: 1})
    },
    // 获取文章列表
    _getVipList (data) {
      this.$http.vip.getVipList(data).then(res => {
        this.articleList = res.data
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
