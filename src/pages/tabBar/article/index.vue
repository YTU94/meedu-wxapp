<template>
  <div class="article">
    <h1>所有分类</h1>
    <ul class="container">
      <li v-for="(item, index) in categoryList" @click="goArticleList(item)" :style="{'background': colorList[parseInt(Math.random() * 10)]}" :class="{ red: aa }" :key="index" class="list-item">
        <img :src="item.avatar" alt="" class="cate_avatar" mode="widthFix">
        <div class="cate_content">
          <div class="cate_content_name">{{item.name}}</div>
          <div class="cate_content_info">{{item.info}}</div>
          <div class="cate_content_other">共{{item.num}}篇文章</div>
        </div>
      </li>
    </ul>
    <ul class="container">
      <li v-for="(item, index) in blogList"  :key="index" class="list-item">
        {{index + 1}}. {{item.post_title}}
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
      blogList: null,
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
        if (res.data && res.data.length > 0) {
          this.categoryList = res.data
        }
        this.categoryList = [{name: '分类one', avatar: 'https://pic3.zhimg.com/v2-783e841e0c5290281b6aaf86e055d543_xl.jpg', info: '分类简介-------', num: '56'}]
      })
    },
    // 获取文章列表
    _getArticleList (data, id) {
      this.$http.article.getArticleList(data, id).then(res => {
        this.categoryList = res.data
      })
    }
  },
  onShow () {
    const that = this
    wx.request({
      url: 'http://localhost:3000/all',
      method: 'GET',
      success (res) {
        console.log('------<', res)
        that.blogList = res.data.data
      }
    })
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
@import '../../../assets/style/variable';
.article{
  padding: 0 20px;
  font-size: 16px;
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
      padding-bottom: 26rpx;
      border-bottom: 1px solid @border-color;
      .cate_avatar{
        display: inline-block;
        flex: 0 0 auto;
        width: 140rpx;
        height: 140rpx;
      }
      .cate_content{
        flex: 1;
        padding: 0 40rpx;
        box-sizing: border-box;
        overflow: hidden;
        &_name{
          color: #111;
          font-size: 36rpx;
          line-height: 1;
        }
        &_info{
          color: @font-color-gray;
          font-size: 26rpx;
          margin-top: 10rpx;
        }
        &_other{
          color: @font-color-gray;
          font-size: 24rpx;
        }
      }
    }
  }
}
</style>
