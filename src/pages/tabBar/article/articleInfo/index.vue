<template>
  <div class="article-info">
    <p class="article-info_title">{{title || '标题'}}</p>
    <p class="article-info_content" v-html="content || 'markdown text'"></p>
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
      title: "",
      content: "",
      articleInfo: {}
    };
  },
  computed: {
    articleId() {
      return this.$mp.query.id;
    }
  },
  methods: {
    init() {
      this.title = this.$mp.query.title;
      this.content = wx.getStorageSync("curPostContent");
      wx.removeStorage({
        key: "curPostContent,"
      });
    }
  },
  onShow() {
    this.init();
  }
};
</script>

<style lang="less">
.article-info {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
  &_title {
    font-size: 32rpx;
    color: #1a1a1a;
  }
  &_content {
    font-size: 28rpx;
    color: #777;
  }
}
</style>
