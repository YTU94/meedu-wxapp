<template>
    <swiper class="swiper-comp"
      v-if="swiperList && swiperList.length > 0" 
      :indicator-dots="indicatorDots"
      indicator-active-color="#fff"
      :autoplay="autoplay" 
      :interval="interval" 
      :duration="duration">
      <block v-for="(item, index) in swiperList" :key="index">
        <swiper-item>
            <div class="for-padding" @click="goToInfo(item.id)">
              <img v-if="item.thumb" :src="item.thumb" class="slide-image" mode="widthFix"/>
              <!-- <span v-if="item.title" class="slide-msg">{{item.title}}</span> -->
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
      // imgUrls: [
      //   'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      //   'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      //   'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      // ],
      indicatorDots: false,
      autoplay: true,
      interval: 5000,
      duration: 1000
    }
  },
  methods: {
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
      padding: 0 20px;
      width:100%;
      height: auto;
      box-sizing: border-box;
      .slide-image{
        position: relative;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: auto;
        border-radius: 10px;
        box-sizing: border-box;
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