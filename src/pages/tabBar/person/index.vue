<template>
    <div class="person">
        <div class="header">
            <div class="bg-img">
                <img src="../../../assets/img/person-bg.png" alt mode="center">
            </div>
            <div class="user-msg-card">
                <div class="top">
                    <div class="organ-name">
                        <div v-if="userInfo">{{userInfo.nick_name}}</div>
                        <open-data v-else type="userNickName"></open-data>
                        <div v-if="userInfo" class="organ-name_mobile">{{userInfo.mobile || ' '}}</div>
                    </div>
                    <div class="avatar">
                        <img
                            v-if="userInfo"
                            class="avavtao-img"
                            :src="userInfo.avatar"
                            alt
                            mode="widthFix"
                        >
                        <open-data v-else class="avavtao-img" type="userAvatarUrl"></open-data>
                    </div>
                </div>
            </div>
        </div>
        <div class="user">
            <ul class="info">
                <li class="info-item">
                    <div class="info-item_label">
                        <img
                            class="info-item_icon"
                            src="../../../assets/img/person_icon.svg"
                            mode="widthFix"
                        >我的会员
                    </div>
                    <span
                        v-if="userInfo.role && userInfo.role.length >0"
                        class="info-item-content"
                    >{{userInfo.role || userInfo.role[0].role}}</span>
                    <span v-else class="info-item-content">普通会员</span>
                </li>
                <li class="info-item">
                    <div class="info-item_label">
                        <img
                            class="info-item_icon"
                            src="../../../assets/img/wallet_icon.svg"
                            mode="widthFix"
                        >余额
                    </div>
                    <span class="info-item-content">{{userInformation.name || 0.00}}币</span>
                </li>

                <li class="info-item" @click="toMyCourse">
                    <div class="info-item_label">
                        <img
                            class="info-item_icon"
                            src="../../../assets/img/course_icon.svg"
                            mode="widthFix"
                        >
                        我的课程
                    </div>
                    <span class="info-item-content">
                        <img
                            class="turn-right-icon"
                            src="../../../assets/img/turn-right-d.png"
                            alt
                            mode="widthFix"
                        >
                    </span>
                </li>
                <li class="info-item" @click="goOrderList">
                    <div class="info-item_label">
                        <img
                            class="info-item_icon"
                            src="../../../assets/img/order_icon.svg"
                            mode="widthFix"
                        >我的订单
                    </div>
                    <span class="info-item-content">
                        <img
                            class="turn-right-icon"
                            src="../../../assets/img/turn-right-d.png"
                            alt
                            mode="widthFix"
                        >
                    </span>
                </li>
                <li class="info-item" @click="appreciate">
                    <div class="info-item_label">
                        <img
                            class="info-item_icon"
                            src="../../../assets/img/star_icon.svg"
                            mode="widthFix"
                        >赞赏
                    </div>
                    <span class="info-item-content">
                        <img
                            class="turn-right-icon"
                            src="../../../assets/img/turn-right-d.png"
                            alt
                            mode="widthFix"
                        >
                    </span>
                </li>
            </ul>
        </div>
        <div class="footer">
            <button class="lagout-btn button" @click="lagout">退出登陆</button>
            <button class="feedback-btn button" open-type="feedback">反馈与建议</button>
        </div>
        <div class="cu-tabbar-height"></div>
    </div>
</template>

<script>
// import { formatTime } from '@/utils/index'

export default {
    components: {},
    data() {
        return {
            userInfo: {
                role: ""
            },
            userInformation: {
                name: "",
                idno: "",
                phone: ""
            },
            couponList: [],
            couponListTotal: 0,
            rebateOrderList: [],
            rebateOrderTotal: 0,
            showCouponModel: false
        };
    },
    onShow() {
        this.init();
    },
    methods: {
        init() {
            this._getUserInfo();
        },
        // 我的课程
        toMyCourse() {
            wx.navigateTo({
                url: "./courseList/main"
            });
        },
        // 去购买会员
        bugVip() {
            wx.navigateTo({
                url: "../../vipList/main"
            });
        },
        // 我的订单
        goOrderList() {
            wx.navigateTo({
                url: `./orderList/main`
            });
        },
        // 退出登录
        lagout() {
            try {
                wx.clearStorageSync();
            } catch (e) {
                // Do something when catch error
                console.log(e);
            }
            wx.reLaunch({
                url: "../../login/main"
            });
        },
        // 打开给赞小程序
        appreciate() {
            wx.navigateToMiniProgram({
                appId: "wx18a2ac992306a5a4",
                path: process.env.zan_path,
                envVersion: "release",
                success(res) {
                    // 打开成功
                }
            });
        },
        _getUserInfo(data) {
            this.$http.user.getUserInfo().then(res => {
                this.userInfo = res.data;
            });
        }
    }
};
</script>
<style lang="less">
.person {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: scroll;
    background-color: #f1f1f1;
    font-family: Helvetica Neue, Helvetica, sans-serif;
    .header {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        padding: 20px 20px;
        box-sizing: border-box;
        overflow: hidden;
        .bg-img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            // filter: blur(3px) brightness(90%) opacity(0.8);
            img {
                width: 100%;
                height: 100%;
            }
        }
        .user-msg-card {
            width: 100%;
            height: 121px;
            position: relative;
            top: 0;
            left: 0;
            padding: 24px 20px 15px;
            box-sizing: border-box;
            // box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
            // border-radius: 4px;
            // background: #555060;
            .top {
                display: flex;
                position: relative;
                top: 0;
                left: 0;
                justify-content: space-around;
                align-items: flex-start;

                .organ-name {
                    flex: 1 1 auto;
                    text-align: left;
                    font-size: 38rpx !important;
                    font-family: PingFangSC-Medium;
                    color: #fff;
                }
                .organ-name_mobile {
                    font-size: 28rpx;
                    color: #eee;
                    padding-top: 10rpx;
                }
                .avatar {
                    flex: 0 0 120rpx;
                    text-align: right;
                    .avavtao-img {
                        display: inline-block;
                        width: 120rpx;
                        height: 120rpx;
                        overflow: hidden;
                        border-radius: 10rpx;
                    }
                }
            }
        }
    }

    .user {
        position: relative;
        left: 0;
        top: 0;
        box-sizing: border-box;
        padding: 0 30rpx;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        margin: 50rpx 30rpx;
        border-radius: 20rpx;
        box-sizing: border-box;
        background-color: #fff;
        box-shadow: 0rpx 40rpx 100rpx 0rpx rgba(0, 0, 0, 0.07);
        .info {
            width: 100%;
            font-size: 30rpx;
            .info-item {
                display: flex;
                height: 100rpx;
                font-size: 30rpx;
                align-items: center;
                justify-content: space-between;
                color: #1a1a1a;
                border-bottom: 2rpx solid #e1e1e1;
                .info-item_label {
                    display: flex;
                    align-items: center;
                }
                .info-item-content {
                    float: right;
                    font-size: 28rpx;
                    color: @font-color-gray;
                    .turn-right-icon {
                        display: inline-block;
                        width: 28rpx;
                        height: auto;
                    }
                }
                .info-item_icon {
                    display: inline-block;
                    width: 36rpx;
                    height: auto;
                    padding-right: 12rpx;
                }
                &:last-child {
                    border-bottom: none;
                }
            }
        }
    }

    .footer {
        padding: 30rpx;

        .lagout-btn {
            position: relative;
            top: 0;
            left: 0;
            box-sizing: border-box;
            background-color: #e54d42;
            color: #fff;
        }
        .feedback-btn {
            margin-top: 30rpx;
        }
    }

    .cu-tabbar-height {
        min-height: 100rpx;
        height: calc(100rpx + env(safe-area-inset-bottom) / 2);
    }
}
</style>
