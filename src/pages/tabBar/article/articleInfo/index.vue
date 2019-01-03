<template>
  <div class="article-info">
    <p class="article-info_title">{{article.title || '标题'}}</p>
    <p class="article-info_content" v-html="articleInfo.content || 'markdown text'"></p>
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
      articleInfo: '',
      categoryList: []
    }
  },
  computed: {
    articleId () {
      return this.$mp.query.id
    }
  },
  methods: {
    init () {
      this._getArticleInfo({page_size: 10, page: 1}, this.articleId)
    },
    // 获取文章列表
    _getArticleInfo (data, id) {
      this.$http.article.getArticleInfo(data, id).then(res => {
        this.articleInfo = res.data
      })
      this.articleInfo = this.articleInfo ? this.articleInfo : '文章test'
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
.article-info{
  display: flex;
  flex-direction: column;
  padding: 40rpx;
  &_title {
    font-size: 32rpx;
    color: #1A1A1A;
  }
  &_content{
    font-size: 28rpx;
    color: #777;
  }
}

</style>
