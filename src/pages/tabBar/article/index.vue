<template>
  <div class="article-list">
    <p>所有分类</p>
    <ul class="article-list-ul">
      <li
        class="list-item"
        v-for="(item, index) in articleList"
        @click="goArticleInfo(item)"
        :class="{ red: aa }"
        :key="index"
      >
        <div class="list-item_title">{{item.name}}</div>
        <div class="list-item_info">
          <span>{{item.description || '暂无描述'}}</span>
          <span>{{item.count}}篇文章</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { formatTime } from "@/utils/index";
import card from "@/components/card";

export default {
  components: {
    card
  },

  data() {
    return {
      logs: [],
      articleList: []
    };
  },
  computed: {
    categoryId() {
      return this.$mp.query.id || "";
    }
  },
  methods: {
    init() {
      this._getArticleList({ page_size: 10, page: 1 }, this.categoryId);
    },
    goArticleInfo(e) {
      wx.navigateTo({
        url: `../article/articleList/main?id=${e.term_id}`
      });
      wx.setStorageSync("curPostContent", e.post_content);
    },
    // 获取文章列表
    _getArticleList(data, id) {
      const that = this;
      // if (data && id) {
      //   this.$http.article.getArticleList(data, id).then(res => {
      //     if (res.data && res.data.length > 0) {
      //       this.articleList = res.data
      //     }
      //   })
      // } else {
      //   this.articleList = [{title: '文章1', author: '作者', 'createTime': '2018-10-11'}]
      // }
      wx.request({
        url: "http://api.ytuj.cn/api/v1/ytu/category", // 仅为示例，并非真实的接口地址
        data: {
          page: 1,
          page_size: 10
        },
        method: "GET",
        header: {
          "content-type": "application/json" // 默认值
        },
        success(res) {
          console.log(res.data);
          that.articleList = res.data.data.concat(that.articleList);
        }
      });
    }
  },

  created() {
    const logs = wx.getStorageSync("logs") || [];
    this.logs = logs.map(log => formatTime(new Date(log)));
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="less">
@import "../../../assets/style/variable";

.article-list {
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 16px;
  p {
    font-size: 16px;
  }
  .article-list-ul {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    padding: 20px 0;
    .list-item {
      flex: 1;
      width: 100%;
      line-height: 2;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      padding: 10rpx 0;
      border-bottom: 1px solid @border-color;
      &_title {
        font-size: 28rpx;
        color: #1a1a1a;
      }
      &_info {
        display: flex;
        justify-content: space-between;
        font-size: 24rpx;
        color: @font-color-gray;
      }
    }
  }
}
</style>
