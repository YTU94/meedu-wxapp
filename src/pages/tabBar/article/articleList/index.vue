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
      this._getArticleList({page_size: 10, page: 1}, this.categoryId)
    },
    goArticleInfo (e) {
      wx.navigateTo({
        url: `../articleInfo/main?id=${e.id}`
      })
    },
    // 获取文章列表
    _getArticleList (data, id) {
      this.$http.article.getArticleList(data, id).then(res => {
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
