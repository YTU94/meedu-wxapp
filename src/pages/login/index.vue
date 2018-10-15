<template>
  <div>
    <p>login</p>
    <view class="section">
      <view class="section__title">账号：</view>
      <input  v-model="form.account" placeholder="输入同步到view中"/>
    </view>
    <view class="section">
      <view class="section__title">密码：</view>
      <input  v-model="form.password" placeholder="输入同步到view中"/>
    </view>
    <button @click="login">登录</button>
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
      form: {
        account: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const data = {
        username: this.form.account,
        password: this.form.password
      }
      this.$http.user.login(data).then(res => {
        console.log(res)
      })
    }
  },
  created () {
    const logs = (wx.getStorageSync('logs') || [])
    this.logs = logs.map(log => formatTime(new Date(log)))
  }
}
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
