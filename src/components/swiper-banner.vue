<template>
    <swiper class="swiper-comp"
      v-if="swiperList && swiperList.length > 0" 
      :indicator-dots="indicatorDots"
      indicator-active-color="#fff"
      :autoplay="autoplay" 
      :interval="interval" 
      :duration="duration"
      :circular="true"
      @change="change"
      previous-margin="15px"
      next-margin	="15px">
      <block v-for="(item, index) in swiperList" :key="index">
        <swiper-item>
            <div class="for-padding" @click="goToInfo(item.id)">
              <img v-if="item.thumb" :class="{'active': activeIndex === index}"  :src="item.thumb" class="slide-image"/>
              <!-- <span v-if="item.title" class="slide-msg">{{item.title}}</span> :mode="activeIndex === index ? 'widthFix' : ''" -->
            </div>
        </swiper-item>
      </block>
    </swiper>
</template>

<script>
export default {
  props: {
    swiperList: {
      type: Array
    },
    key: String
  },
  data () {
    return {
      activeIndex: 0,
      // imgUrls: [
      //   'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      //   'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      //   'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      // ],
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000
    }
  },
  methods: {
    change (e) {
      console.log(e.mp.detail.current)
      this.activeIndex = e.mp.detail.current
    },
    goToInfo (id) {
      this.$emit('navigateTo', id)
    }
  }
}
</script>

<style lang="less">
  .swiper-comp{
    .for-padding{
      position: relative;
      top: 0;
      left: 0;
      padding: 0 5px;
      width:100%;
      height: auto;
      box-sizing: border-box;
      .slide-image{
        position: relative;
        top: 30rpx;
        left: 0;
        display: block;
        width: 100%;
        height: 240rpx;
        border-radius: 10px;
        box-sizing: border-box;
      }
      .active{
        height: 300rpx;
        top: 0;
      }
      .slide-msg{
        display: inline-block;
        // position: absolute;
        bottom: 30px;
        right: 30px;
        font-size: 28px;
      }
    }
    
  }

</style>