<template>
  <div class="person">
    <div class="header">
      <div class="bg-img">
        <img src="../../../assets/img/person-bg.png" alt="" mode="center">
      </div>
      <div class="user-msg-card">
        <div class="top">
          <div class="organ-name">
            <div v-if="userInfo">{{userInfo.nick_name}}</div>
            <open-data v-else type="userNickName"></open-data>
          </div>
          <div class="avatar">
            <img v-if="userInfo" class="avavtao-img" :src="userInfo.avatar" alt="" mode="widthFix">
            <open-data v-else class="avavtao-img" type="userAvatarUrl"></open-data>
          </div>
        </div>
      </div>
    </div>
    <div class="user">
      <ul class="info">
        <li class="info-item">我的会员
          <span class="info-item-content" v-if="usrInfo && userInfo.role && userInfo.role.length > 0">{{userInfo.role || ' '}}</span>
          <span class="info-item-content" @click="bugVip">会员列表</span>
        </li>
        <li class="info-item">余额<span class="info-item-content">{{userInformation.name || 0}}币</span></li>
        <li class="info-item" v-if="userInfo">手机号<span class="info-item-content">{{userInfo.mobile || ' '}}</span></li>
        <li class="info-item" @click="toMyCourse">
          我的课程<span class="info-item-content">
            <img class="turn-right-icon" src="../../../assets/img/turn-right-d.png" alt="" mode="widthFix">
          </span>
        </li>
        <li class="info-item" @click="goOrderList">
          我的订单<span class="info-item-content">
            <img class="turn-right-icon" src="../../../assets/img/turn-right-d.png" alt="" mode="widthFix">
          </span>
          <!-- <span class="info-item-content">{{rebateOrderTotal}}</span> -->
        </li>
        <li class="info-item" @click="appreciate">赞赏<span class="info-item-content"><img class="turn-right-icon" src="../../../assets/img/turn-right-d.png" alt="" mode="widthFix"></span></li>
      </ul>
    </div>

    <button class="lagout-btn" @click="lagout">退出登陆</button>

  </div>
</template>

<script>
// import { formatTime } from '@/utils/index'

export default {
  components: {},
  data () {
    return {
      userInfo: '',
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
    this.init()
    console.log('Onshow---------->')
    // this._getClientCouponList()
    // this._getUserRebateOrderList()
  },
  methods: {
    init () {
      this._getUserInfo()
    },
    // 我的课程
    toMyCourse () {
      // const type = 'my'
      wx.navigateTo({
        url: './courseList/main'
      })
    },
    // 去购买会员
    bugVip () {
      wx.navigateTo({
        url: '../../vipList/main'
      })
    },
    // 我的订单
    goOrderList () {
      wx.navigateTo({
        url: `./orderList/main`
      })
    },
    // 退出登录
    lagout () {
      try {
        wx.clearStorageSync()
      } catch (e) {
        // Do something when catch error
        console.log(e)
      }
      wx.reLaunch({
        url: '../../login/main'
      })
    },
    // 打开给赞小程序
    appreciate () {
      wx.navigateToMiniProgram({
        appId: 'wx18a2ac992306a5a4',
        path: process.env.zan_path,
        envVersion: 'release',
        success (res) {
          // 打开成功
        }
      })
    },
    _getUserInfo (data) {
      this.$http.user.getUserInfo().then(res => {
        this.userInfo = res.data
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
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    padding: 20px 20px;
    box-sizing: border-box;
    overflow: hidden;
    .bg-img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      filter: blur(3px) brightness(90%) opacity(.8);
      img{
        width: 100%;
        height: 100%;
      }
    }
    .user-msg-card{
      width: 100%;
      height: 121px;
      position: relative;
      top: 0;
      left: 0;
      padding: 24px 20px 15px;
      box-sizing: border-box;
      box-shadow:0px 1px 4px 0px rgba(0,0,0,0.1);
      border-radius: 4px;
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

  .lagout-btn{
    position: relative;
    top: 0;
    left: 0;
    margin: 0 40rpx 74rpx;
    color: #373737;
    background: #fff;
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
      .turn-right-icon{
        display: inline-block;
        width:28rpx;
        height: auto;
      }
    }
    // &:last-child{
    //   border-bottom:0rpx;
    // }
  }
}
</style>
