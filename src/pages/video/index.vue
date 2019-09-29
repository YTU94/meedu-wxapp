<template>
    <div class="video-info">
        <!-- video -->
        <div class="video-box">
            <video
                style="width: 100%;"
                v-if="playUrl && playUrl.length > 0"
                :src="playUrl[0].url"
                controls
                objectFit="contain"
            ></video>
            <div v-else class="video-box_null">当前视频无法观看</div>
        </div>
        <!-- tabBar -->
        <div class="tabBar">
            <span
                class="tabBar-item"
                :class="{'tabBar-item-active': activeIndex === index}"
                v-for="(item, index) in tabBarList"
                :key="index"
                @click="activeIndex = index"
            >{{item.name}}</span>
        </div>
        <!-- content -->
        <swiper
            :current="activeIndex"
            class="info-content"
            @change="swiperChange"
            :style="{'height': swiperHeight * 2 + 'rpx'}"
        >
            <!-- video info -->
            <swiper-item>
                <scroll-view scroll-y :style="{'height': swiperHeight * 2 + 'rpx'}">
                    <div class="introduction">
                        <p class="introduction-title">
                            <span class="introduction-title__name">{{videoInfo.title}}</span>
                        </p>
                        <span class="introduction-line">
                            <span class="line-time">发布时间：{{videoInfo.published_format}}</span>
                            <span class="line-view">播放次数：{{videoInfo.view_num || viewNum}}</span>
                        </span>
                        <p class="introduction-lable c-red">简介</p>

                        <p class="introduction-description" v-html="videoInfo.short_description"></p>
                        <p class="introduction-lable c-red">详细介绍</p>
                        <p class="introduction-description" v-html="videoInfo.description"></p>
                    </div>
                </scroll-view>
            </swiper-item>
            <!-- video list -->
            <swiper-item>
                <scroll-view scroll-y :style="{'height': swiperHeight * 2 + 'rpx'}">
                    <ul class="list-container">
                        <video-list
                            v-for="(item, index) in courseVideoList"
                            :key="index"
                            :index="index"
                            :item="item"
                            @goVideo="goVideo"
                        ></video-list>
                    </ul>
                </scroll-view>
            </swiper-item>
            <!-- comments list -->
            <swiper-item>
                <scroll-view scroll-y :style="{'height': swiperHeight * 2 + 'rpx'}">
                    <comments-list :commentsList="videosComments" @goComment="goComment"></comments-list>
                </scroll-view>
            </swiper-item>
        </swiper>
        <div class="btn-submit" for @click="goComment('', true)">留言</div>
    </div>
</template>

<script>
import { formatTime } from "@/utils/index";
import card from "@/components/card";
import videoList from "@/components/video-list";
import commentsList from "@/components/comments-list";

export default {
    components: {
        card,
        videoList,
        commentsList
    },

    data() {
        return {
            src: "",
            activeIndex: 0,
            courseVideoList: [],
            tabBarList: [
                { name: "详情", index: 0, value: "name" },
                { name: "列表", index: 1, value: "name" },
                { name: "评价", index: 2, value: "name" }
            ],
            playUrl: [],
            // video
            videoId: "",
            videosComments: [],
            videoInfo: {},
            swiperHeight: wx.getSystemInfoSync().windowHeight - 265
        };
    },
    computed: {
        viewNum() {
            return parseInt(Math.random(1) * 1000);
        }
    },
    onReady() {
        // const that = this
        // this.swiperHeight = wx.getSystemInfoSync().windowHeight - 265
        // wx.downloadFile({
        //   url: 'https://img.ccsc.work/test%2F3176f36b9cee7cbdef_10.mp4?OSSAccessKeyId=LTAIfNCN3kQQlBHl&Expires=1630107264&Signature=MpMLkHgtRZ5jzmye4ACSt%2BALejo%3D', // 仅为示例，并非真实的资源
        //   success (res) {
        //     that.playUrl[1].url = res.tempFilePath
        //     // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        //     if (res.statusCode === 200) {
        //       wx.playVoice({
        //         filePath: res.tempFilePath
        //       })
        //     }
        //   }
        // })
    },
    methods: {
        async init(videoId) {
            await this._getVideosInfo({}, videoId);
            await this._getVideosComments({}, videoId);
            await this._getVideosUrl({}, videoId);
        },
        swiperChange(e) {
            this.activeIndex = e.mp.detail.current;
        },
        // 切换视屏
        goVideo(video) {
            // 视屏切换
            this.init(video.id);
        },
        // 跳去评论
        goComment(item, retirect) {
            if (item) wx.setStorageSync("curCourseComent", item);

            wx.navigateTo({
                url: `../comment/main?id=${this.videoId}&type=video`
            });
        },
        // 视频详情
        _getVideosInfo(data, id) {
            this.$http.video.getVideosInfo(data, id).then(res => {
                this.videoInfo = res.data;
                this.videoInfo.published_format = formatTime(
                    res.data.published_at,
                    true
                );
            });
        },
        // 视频播放地址
        _getVideosUrl(data, id) {
            if (!wx.getStorageSync("access_token")) {
                wx.showToast({
                    title: "请使用会员账号登录，再观看视屏",
                    icon: "none",
                    mask: true
                });
                return;
            }
            this.$http.video
                .getVideosUrl(data, id)
                .then(res => {
                    console.log("_getVideosUrl", res);
                    if (res && res.length > 0) {
                        this.playUrl = res;
                    } else {
                        this.playUrl = [
                            {
                                url:
                                    "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
                            }
                        ];
                    }
                })
                .catch(err => {
                    console.log("没拿到url, err", err);
                    this.playUrl = [
                        {
                            url:
                                "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
                        }
                    ];
                    wx.showToast({
                        title: "未知错误",
                        icon: "none",
                        mask: true
                    });
                });
        },
        // 视频评论提交
        _getVideosComments(data, id, merge) {
            this.$http.video.getVideosComments(data, id).then(res => {
                res.data.forEach(e => {
                    e.created_format = formatTime(e.created_at);
                });
                if (merge) {
                    this.videosComments = this.videosComments.concat(res.data);
                } else {
                    this.videosComments = res.data;
                }
            });
        }
    },
    onShow() {
        this.videoId = this.$mp.query.id;
        this.courseVideoList = JSON.parse(this.$mp.query.courseVideoList);
        this.init(this.videoId);
        console.log("onshow", this.videoId);
    },
    onHide() {
        this.playUrl = [];
        this.videoId = null;
    },
    onUnload() {
        this.playUrl = [];
        this.videoId = null;
    }
};
</script>

<style lang="less">
.video-info {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    .video-box {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 450rpx;
        &_null {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: @font-color-gray;
        }
    }
    .tabBar {
        display: flex;
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        box-shadow: 0 2rpx 8rpx 0 rgba(0, 0, 0, 0.1);
        justify-content: center;
        &-item {
            display: flex;
            flex: 1;
            font-size: 14px;
            color: #777777;
            justify-content: center;
        }
        &-item-active {
            border-bottom: 3px solid red;
            color: red;
        }
    }
    .info-content {
        position: relative;
        // 详情
        .introduction {
            position: relative;
            width: 100%;
            height: auto;
            padding: 20px;
            box-sizing: border-box;
            &-title {
                display: flex;
                flex-direction: column;
                padding: 0 0 20rpx;
                border-bottom: 1px solid @border-color;
                &__name {
                    flex: 1;
                    font-size: 16px;
                    color: #1a1a1a;
                }
            }
            &-line {
                display: flex;
                flex: 1;
                justify-content: space-between;
                font-size: 24rpx;
                margin-top: 20rpx;
                color: @font-color-gray;
                .line-view,
                .line-time {
                    flex: 0 0 auto;
                }
            }
            &-lable {
                font-size: 16px;
                padding: 10px 0;
            }
            &-description,
            &-short_description {
                font-size: 13px;
                color: #777777;
                text-align: left;
                vertical-align: text-top;
                box-sizing: border-box;
            }
        }
        // 列表
        .list-container {
            padding: 30rpx 40rpx 0;
            position: relative;
        }
    }
    .btn-submit {
        position: absolute;
        bottom: 70rpx;
        right: 70rpx;
        font-size: 14px;
        color: #fff;
        width: 45px;
        height: 45px;
        line-height: 45px;
        text-align: center;
        border-radius: 22.5px;
        background: rgba(20, 181, 253, 1);
        box-shadow: 0 1px 2px rgba(20, 181, 253, 0.7);
        z-index: 10;
        opacity: 0.86;
    }
    .c-red {
        color: red;
    }
}
</style>
