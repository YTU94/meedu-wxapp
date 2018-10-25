<template>
  <div class="vip-list">
    <ul class="container">
      <li v-for="(item, index) in articleList" :class="{ red: aa }" :key="index" class="list-item">
        <div class="item-name"> {{item.name}}</div>
        <div class="item-content">
          <span class="item-content__price">
            {{item.charge}}元
            <span class="item-content__date">/ {{item.expire_days}}天</span>
          </span>
          <button class="item-content__btn" @click="buy(item)">订阅</button>
        </div>
        <div class="item-description">{{item.description[0]}}</div>
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
      this._getVipList({page_size: 10, page: 1})
    },
    // 买会员
    buy (item) {
      // this.$http.vip.buyVip({}, item.id).then(res => {
      //   console.log(res)
      // })
      wx.showToast({
        title: '请先去PC端购买',
        icon: 'none',
        mask: true
      })
    },
    // 获取文章列表
    _getVipList (data) {
      this.$http.vip.getVipList(data).then(res => {
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

<style lang="less">
@import '../../assets/style/variable';
.vip-list{
  .container{
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    box-sizing: border-box;
    .list-item{
      flex: 1;
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      margin-bottom: 20px;
      border-radius: 5px;
      box-shadow:0px 2px 8px 0px rgba(0,0,0,0.3);
      background: linear-gradient(to left top,rgb(234, 124, 62), rgb(173, 26, 139));

      .item-name{
        display: block;
        width: 100%; 
        color: #ffe5db;       
      }
      .item-content{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 5px 0;
        &__price{
          flex: 1;
          color: rgb(255, 153, 0);
          font-size: 22px;
          .item-content__date{
            font-size: 14px;
            color: #ffe5db;  
          }
        }
        &__btn{
          flex: 0 0 auto;
          font-size: 14px;
          background: linear-gradient(to left top,red, rgb(111, 0, 255));
          border-top-right-radius: 30px;
          border-bottom-right-radius: 30px;
          color: #fff;
          padding:5px 20px;
          line-height: 2.0;
          border: none;
        }
      }
      .item-description{
        width: 100%;
        font-size: 12px;
        color: #ffe5db; 
      }
    }
  }
}

</style>
