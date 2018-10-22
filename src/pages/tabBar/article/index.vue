<template>
  <div class="article">
    <h1>所有分类</h1>
    <ul class="container">
      <li v-for="(item, index) in categoryList" @click="goArticleList(item)" :style="{'background': colorList[parseInt(Math.random() * 10)]}" :class="{ red: aa }" :key="index" class="list-item">
        {{index + 1}}. {{item.name}} {{r}}
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
      colorList: ['red', 'blue', 'yellow', 'pink'],
      categoryList: []
    }
  },
  computed: {
    r () {
      return parseInt(Math.random() * 10)
    }
  },
  methods: {
    init () {
      this._getCategoryList({page_size: 10, page: 1})
    },
    goArticleList (e) {
      console.log('query-------->', e)
      wx.navigateTo({
        url: `./articleList/main?id=${e.id}`
      })
    },
    // 获取文章分类
    _getCategoryList (data) {
      this.$http.article.getCategoryList(data).then(res => {
        this.categoryList = res.data
      })
    },
    // 获取文章列表
    _getArticleList (data, id) {
      this.$http.article.getArticleList(data, id).then(res => {
        this.categoryList = res.data
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
.article{
  padding: 0 20px;
  box-sizing: border-box;
  .container {
    display: flex;
    flex-direction: column;
    padding: 40rpx 40rpx 40rpx 0;
    justify-content: flex-start;
    .list-item{
      display: flex;
      width: 100%;
      flex: 1;
      text-align: left;
      line-height: 2.0;
      
    }
  }
}
</style>
