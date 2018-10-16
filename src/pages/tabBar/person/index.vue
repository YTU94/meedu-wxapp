<template>
  <div class="person">
    <div class="header">
      <div class="user-msg-card">
        <div class="top">
          <div class="organ-name">
            <open-data type="userNickName"></open-data>
          </div>
          <div class="avatar">
            <open-data class="avavtao-img" type="userAvatarUrl"></open-data>
          </div>
        </div>
      </div>
    </div>
    <div class="user">
      <ul class="info">
        <li class="info-item">余额<span class="info-item-content">{{userInformation.name || ' '}}</span></li>
        <li class="info-item">我的<span class="info-item-content">{{userInformation.phone || ' '}}</span></li>
        <li class="info-item" @click="showCouponModel = true">
          我的课程
          <span class="info-item-content">{{couponListTotal}}</span>
        </li>
        <li class="info-item" @click="goOrderList">
          我的视屏
          <span class="info-item-content">{{rebateOrderTotal}}</span>
        </li>
        <li class="info-item" @click="goOrderList">
          我的订单
          <span class="info-item-content">{{rebateOrderTotal}}</span>
        </li>
      </ul>
    </div>


  </div>
</template>

<script>
import { formatTime } from '@/utils/index'

export default {
  components: {},
  data () {
    return {
      userInfo: {
        isOrgan: false,
        isRealname: false,
        avatar: '',
        name: ''
      },
      userInformation: {
        name: '',
        idno: '',
        phone: ''
      },
      couponList: [],
      couponListTotal: 0,
      rebateOrderList: [],
      rebateOrderTotal: 0,
      showCouponModel: false
    }
  },
  created () {
    console.log('created---------->')
  },
  mounted () {
    console.log('mounted---------->')
  },
  onShow () {
    console.log('Onshow---------->')
    // this._getClientCouponList()
    // this._getUserRebateOrderList()
  },
  methods: {
    goOrderList () {
      let orderList = JSON.stringify(this.rebateOrderList)
      wx.navigateTo({
        url: `./orderList/main?orderList=${orderList}`
      })
    },
    _getClientCouponList () {
      this.$http.coupon.getClientCouponList({}).then(res => {
        res.pageList.list.forEach(e => {
          if (e.hasOwnProperty('couponVo')) {
            e.couponVo.isUesdName = e.couponVo.isUesd ? '已使用' : '未使用'
            e.couponVo.eTime = formatTime(e.couponVo.effectTime)
          }
        })
        this.couponList = res.pageList.list
        this.couponListTotal = res.pageList.count
      })
    },
    _getUserRebateOrderList (data) {
      this.$http.rebate.getUserRebateOrderList(data).then(res => {
        res.pageList.list.forEach(e => {
          if (e.hasOwnProperty('createdTime')) {
            e.statusName = e.status === 'SUBMITED' ? '已提交' : '已领取'
            e.createdTimeFormated = formatTime(e.createdTime, true)
          }
        })
        this.rebateOrderList = res.pageList.list
        this.rebateOrderTotal = res.pageList.count
      })
    }
  }
}
</script>
<style lang="less">
@import '../../../assets/style/variable.less';
.person{
  position: relative;
  .header{
    position: relative;;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    padding: 20px 20px 10px;
    box-sizing: border-box;
    // background-color: @bg-color;
    .user-msg-card{
      width: 100%;
      height: auto;
      position: relative;
      top: 0;
      left: 0;
      padding: 24px 20px 15px;
      box-sizing: border-box;
      box-shadow:0px 1px 4px 0px rgba(0,0,0,0.1);
      border-radius: 4px;
      height: 121px;
      background: #555060;
      .top{
        display: flex;
        position: relative;
        top: 0;
        left: 0;
        justify-content: space-around;
        align-items: flex-start;
          
        .organ-name{
          flex: 1 1 auto;
          text-align: left;
          font-size: 20px!important;
          font-family:PingFangSC-Medium;
          color:#fff;
        }
        .avatar{
          flex: 0 0 50px;
          text-align: right;
          .avavtao-img{
            display: inline-block;
            width: 50px;
            height: 50px;
            border-radius: 4px;
          }
        }
      }
    }
  }

  .user{
    position: relative;;
    left:0;
    top:0;
    width: 100%;
    box-sizing:border-box;
    padding: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
}




.info{
  width: 100%;
  .info-item{
    height: 78rpx;
    text-align: left;
    font-size: 32rpx;
    font-family:PingFangSC-Regular;
    color:#1A1A1A;
    line-height: 44rpx;
    margin-bottom: 34rpx;
    border-bottom: 2rpx solid #E1E1E1;
    .info-item-content{
      float: right;
      font-size: 28rpx;
      color: @font-color-gray;
    }
    // &:last-child{
    //   border-bottom:0rpx;
    // }
  }
}
</style>
