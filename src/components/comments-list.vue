
<template>
  <div class="comments-list">
    <ul class="list-container" v-if="Array.isArray(commentsList) && commentsList.length > 0">
      <li
        class="list-item"
        v-for="(item, index) in commentsList"
        :class="{ red: aa }"
        :key="index"
        @click="goComment(item)"
      >
        <img class="item-avatar" :src="item.user.avatar" alt mode="widthFix">
        <div class="item-content">
          <div class="item-content__name">@{{item.user.nick_name}}</div>
          <div class="item-content__time">{{item.created_format}}</div>
          <div class="item-content__content" v-html="item.content"></div>
          <!-- <div class="item-content__footer">{{item.created_format}}</div> -->
        </div>
      </li>
    </ul>
    <div class="no-comments-text" v-else>- 暂无评论 -</div>
  </div>
</template>

<script>
export default {
  props: {
    commentsList: Array
  },
  methods: {
    goComment(obj) {
      this.$emit("goComment", obj);
    }
  }
};
</script>

<style lang="less">
/*
  * comments list 
  */
.comments-list {
  .list-container {
    margin-top: 10px;
    .list-item {
      display: flex;
      padding: 20rpx 0;
      .item-avatar {
        display: flex;
        flex: 0 0 auto;
        width: 72rpx;
        height: 72rpx;
        margin-right: 20rpx;
        border-radius: 36rpx;
        box-sizing: border-box;
      }
      .item-content {
        display: flex;
        flex: 1;
        position: relative;
        flex-direction: column;
        &__name {
          position: relative;
          top: 0;
          left: 0;
          width: 100%;
          height: auto;
          font-size: 28rpx;
          color: darkslateblue;
        }
        &__time {
          position: absolute;
          top: 0;
          right: 0;
          font-size: 24rpx;
          color: @font-color-gray;
        }
        &__content {
          position: relative;
          top: 0;
          left: 0;
          width: 100%;
          height: auto;
          padding: 10rpx 0;
          font-size: 26rpx;
          color: #1a1a1a;
        }
        &__footer {
          position: relative;
          top: 0;
          left: 0;
          width: 100%;
          height: auto;
          font-size: 24rpx;
          color: @font-color-gray;
          // border-bottom: 2rpx solid @border-color;
        }
      }
    }
  }
  .no-comments-text {
    color: @font-color-gray;
    font-size: 24rpx;
    padding: 20rpx 0;
    text-align: center;
  }
}
</style>
