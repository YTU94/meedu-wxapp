<template>
  <div>
    <ul class="container log-list" v-if="orderList && orderList.length > 0">
      <li
        v-for="(item, index) in orderList"
        :class="{ red: aa }"
        :key="index"
        class="item-item"
      >{{index + 1}}. {{item.title}}</li>
    </ul>
    <div v-else class="none">暂无订单</div>
  </div>
</template>

<script>
// import { formatTime } from '@/utils/index'
import card from "@/components/card";

export default {
  components: {
    card
  },

  data() {
    return {
      logs: [],
      orderList: []
    };
  },
  methods: {
    init() {
      this._getOrderList({ page_size: 10, page: 1 }, this.$mp.query.id);
    },

    // 获取order列表
    _getOrderList(data) {
      this.$http.user.getUserOrder(data).then(res => {
        this.orderList = res.data;
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
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
.none {
  text-align: center;
}
</style>
