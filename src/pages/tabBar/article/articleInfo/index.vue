<template>
  <div class="article-info">
    <p>内容：</p>
    <p class="article-info-p" v-html="articleInfo.content"></p>
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
  p{
    font-size: 16px;
  }
  .article-info-p{
    font-size: 14px;
    color: #777;
  }
}

</style>
