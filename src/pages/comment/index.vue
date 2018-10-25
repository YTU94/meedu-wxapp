<template>
  <div class="comment">
    <!-- comments list -->
    <div class="comments-list section">
      <ul class="list-container">
        <li class="list-item" v-for="(item, index) in curCommentsList" :class="{ red: aa }" :key="index">
          <img class="item-avatar" :src="item.user.avatar" alt="" mode="widthFix">
          <div class="item-content">
            <div class="item-content__name">{{item.user.nick_name}}</div>
            <div class="item-content__time">{{item.created_at}}</div>
            <div class="item-content__content" v-html="item.content"></div>
            <div class="item-content__footer"></div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 评论 -->
    <label class="section-label">评论</label>
    <div class="input-line">
      <img class="input-line__avatar" :src="comment.user.avatar" alt="" mode="widthFix">
      <!-- <div class="input-line__input" @click="goComment">快来写下你的评论吧~</div> -->
      <input class="input-line__realInput" v-model="commentContent" @confirm="submit" placeholder="快来写下你的评论吧~" type="text">
    </div>
    <!-- comments list -->
    <p>{{commentContent}}</p>
    <!-- comments list -->
    <div class="comments-list section">
      <ul class="list-container">
        <li class="list-item" v-for="(item, index) in callbackCommentsList" :class="{ red: aa }" :key="index" @click="goComment(item)" >
          <img class="item-avatar" :src="item.user.avatar" alt="" mode="widthFix">
          <div class="item-content">
            <div class="item-content__name">{{item.user.nick_name}}</div>
            <div class="item-content__time">{{item.created_at}}</div>
            <div class="item-content__content" v-html="item.content"></div>
            <div class="item-content__footer"></div>
          </div>
        </li>
      </ul>
    </div>

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
      articleList: [],
      inputFocus: false,
      commentContent: '',
      callbackCommentsList: []
    }
  },
  computed: {
    Id () {
      return this.$mp.query.id
    },
    curCommentsList () {
      return [JSON.parse(this.$mp.query.comment)]
    }
  },
  methods: {
    init () {
      // this._getVipList({page_size: 10, page: 1})
    },
    // 去评论
    goComment () {
      this.inputFocus = !this.inputFocus
    },
    // 提交评论
    submit () {
      if (this.commentContent) {
        this._submitComments(this.commentContent, this.Id)
      } else {
        wx.showToast({
          title: '请输入评论',
          mask: true
        })
      }
    },
    _submitComments (content, id) {
      this.$http.video.submitComments({content}, id).then(res => {
        this.callbackCommentsList = res.data
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
.comment{
  position: relative;
  top: 0;
  left: 0;
  padding: 20px;
  box-sizing: border-box;
  /*
  * comments list 
  */
  .comments-list{
    .list-container{
      .list-item{
        display: flex;
        .item-avatar{
          display: flex;
          flex: 0 0 auto;
          width: 40px;
          height: auto;
          border-radius: 20px;
          padding-right: 5px;
          box-sizing: border-box;
        }
        .item-content{
          display: flex;
          flex: 1;
          position: relative;
          flex-direction: column;
          &__name{
            position: relative;
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
            font-size: 14px;
            color: darkslateblue;
          }
          &__time{
            position: absolute;
            top: 0;
            right: 0;
            font-size: 10px;
            color: @font-color-gray;
          }
          &__content{
            position: relative;
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
            padding: 5px 0;
            font-size: 12px;
            color: #1A1A1A;
          }
          &__footer{
            position: relative;
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
            font-size: 12px;
            border-bottom: 1px solid @border-color;
            margin-bottom: 15px;
          }
        }
      }
    }
  }
  /*
  * section label 
  */
  .section-label{
    padding: 15px 0;
  }
  /*
  * input line 
  */
  .input-line{
    display: flex;
    align-items: center;
    &__avatar{
      display: flex;
      flex: 0 0 auto;
      width: 40px;
      height: auto;
      border-radius: 20px;
      padding-right: 10px;
      box-sizing: border-box;
    }
    &__input{
      flex: 1;
      font-size: 13px;
      padding-left: 10px;
      background: @border-color;
      color: @font-color-gray;
      border-radius: 20px;
      line-height: 1.8;
    }
    &__realInput{
      flex: 1;
      font-size: 13px;
      padding-left: 10px;
      background: @border-color;
      color: @font-color-gray;
      border-radius: 20px;
      line-height: 1.8;
    }
  }
}
</style>
