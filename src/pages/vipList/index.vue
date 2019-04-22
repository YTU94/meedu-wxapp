<template>
  <div class="vip-list">
    <ul class="container">
      <li v-for="(item, index) in articleList" :class="{ red: aa }" :key="index" class="list-item">
        <div class="item-name">{{item.name}}</div>
        <div class="item-content">
          <span class="item-content__price">
            {{item.charge}}币
            <span class="item-content__date">/ {{item.expire_days}}天</span>
          </span>
          <!-- <button class="item-content__btn" @click="buy(item)">订阅</button> -->
        </div>
        <div class="item-description">{{item.description[0]}}</div>
      </li>
    </ul>
    <p class="footer-msg">— 据相关的规定，ios不支持购买 —</p>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      logs: [],
      articleList: []
    };
  },
  methods: {
    init() {
      this._getVipList({ page_size: 10, page: 1 });
    },
    // 订阅会员
    buy(item) {
      wx.showToast({
        title: "请先去PC端订阅",
        icon: "none",
        mask: true
      });
    },
    // 获取vip列表
    _getVipList(data) {
      this.$http.vip.getVipList(data).then(res => {
        this.articleList = res.data;
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
.vip-list {
  .container {
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    box-sizing: border-box;
    .list-item {
      flex: 1;
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      margin-bottom: 20px;
      border-radius: 5px;
      box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
      background: linear-gradient(
        to left top,
        rgb(234, 124, 62),
        rgb(173, 26, 139)
      );

      .item-name {
        display: block;
        width: 100%;
        color: #ffe5db;
      }
      .item-content {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 5px 0;
        &__price {
          flex: 1;
          color: rgb(255, 153, 0);
          font-size: 22px;
          .item-content__date {
            font-size: 14px;
            color: #ffe5db;
          }
        }
        &__btn {
          flex: 0 0 auto;
          font-size: 32rpx;
          background: transparent;
          opacity: 0.9;
          // background: linear-gradient(to left top,red, rgb(111, 0, 255));
          // border-top-right-radius: 30px;
          // border-bottom-right-radius: 30px;
          color: #fff;
          // padding:5px 20px;
          line-height: 2;
          &::after {
            border: none;
          }
        }
      }
      .item-description {
        width: 100%;
        font-size: 12px;
        color: #ffe5db;
      }
    }
  }
  .footer-msg {
    color: @font-color-gray;
    font-size: 24rpx;
    text-align: center;
  }
}
</style>
