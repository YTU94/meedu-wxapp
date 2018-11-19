<template>
  <div class="comment">
    <!-- comments list -->
    <div class="comments-list section">
      <ul class="list-container" v-if="curCommentsList && curCommentsList.length > 0">
        <li class="list-item" v-for="(item, index) in curCommentsList" :class="{ red: aa }" :key="index">
          <img class="item-avatar" v-if="item.user" :src="item.user.avatar" alt="" mode="widthFix">
          <div class="item-content">
            <div class="item-content__name" v-if="item.user">{{item.user.nick_name}}</div>
            <div class="item-content__time">{{item.created_format}}</div>
            <div class="item-content__content" v-html="item.content"></div>
            <div class="item-content__footer"></div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 评论 -->
    <div class="section-label">评论</div>
    <div class="input-line">
      <!-- <img class="input-line__avatar" v-if="comment.user" :src="comment.user.avatar" alt="" mode="widthFix"> -->
      <input class="input-line__realInput" v-model="commentContent" confirm-type="done" placeholder="快来写下你的评论吧~" type="text">
    </div>
    <!-- 提交 -->
    <button class="submit-btn" @click="submit">提交</button>
    <!-- 回调 comments list -->
    <div class="comments-list section">
      <ul class="list-container" v-if="callbackCommentsList && callbackCommentsList.length > 0">
        <li class="list-item" v-for="(item, index) in callbackCommentsList"  :key="index">
          <img class="item-avatar" v-if="item.user" :src="item.user.avatar" alt="" mode="widthFix">
          <div class="item-content">
            <div class="item-content__name" v-if="item.user">{{item.user.nick_name}}</div>
            <div class="item-content__time">{{item.created_format}}</div>
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
      type: '',
      courseId: '',
      articleList: [],
      inputFocus: false,
      commentContent: '',
      curCommentsList: [],
      callbackCommentsList: []
    }
  },
  methods: {
    init () {},
    inputBlur () {
      console.log('inputBlur请输入评论')
    },
    // 提交评论
    submit () {
      console.log('submit请输入评论')
      if (this.commentContent) {
        this._submitComments(this.commentContent, this.courseId, this.type)
      } else {
        wx.showToast({
          title: '请输入评论',
          icon: 'none',
          mask: true
        })
      }
    },
    _submitComments (content, id, type) {
      this.$http[type].submitComments({content}, id).then(res => {
        res.data.forEach(e => {
          e.created_format = formatTime(e.created_at, true)
        })
        this.callbackCommentsList = this.callbackCommentsList.concat(res.data)
        console.log('callbackCommentsList', res.data, this.callbackCommentsList)
      })
    }
  },

  created () {},
  mounted () {
    this.init()
    this.type = this.$mp.query.type || 'course'
    this.courseId = this.$mp.query.id
    this.curCommentsList[0] = wx.getStorageSync('curCourseComent')
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
    box-sizing: border-box;
  }
  .submit-btn{
    position: relative;
    top: 0;
    left: 0;
    margin: 30rpx 0; 
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
    &__realInput{
      flex: 1;
      font-size: 13px;
      padding: 5px 10px;
      background: @border-color;
      color: @font-color-gray;
      border-radius: 20px;
      line-height: 1.8;
    }
  }
  // submit btn
  .submit-btn{
    font-size: 16px;
  }
}
</style>
