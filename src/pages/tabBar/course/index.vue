<template>
    <div class="course">
        <div class="search-input" @click="goSearchCoure">
            <img class="search-input-icon" src="../../../assets/img/search.svg" alt>
            请输入课程名称
        </div>
        <swiper-banner :swiperList="swiperList" @navigateTo="goVideoList"></swiper-banner>
        <h1 class="couse-title">课程推荐</h1>
        <div class="card-list" v-if="hasMounted">
            <div class v-if="courseList && courseList.length > 0">
                <course-card
                    v-for="(item, index) in courseList"
                    :key="index"
                    @goVideoList="goVideoList"
                    :course="item"
                ></course-card>
            </div>
            <div v-else class="none">— 暂无课程 —</div>
        </div>
    </div>
</template>

<script>
import card from "@/components/card";
import courseCard from "@/components/courseCard.vue";
import swiperBanner from "@/components/swiper-banner";
export default {
    components: {
        card,
        courseCard,
        swiperBanner
    },
    data() {
        return {
            swiperList: [],
            courseList: [],
            page: 1,
            pageSize: 10,
            total: 0,
            hasMounted: false
        };
    },

    methods: {
        async init() {
            const res = await this.$http.course.getCourseList({
                page: 1,
                pageSize: this.pageSize
            });
            this.hasMounted = true;
            this.courseList = res.data;
            this.total = res.meta.total;
            this.swiperList = this.courseList.slice(
                0,
                this.courseList.length > 3 ? 3 : this.courseList.length
            );
        },
        goSearchCoure() {
            wx.navigateTo({ url: "../../searchCourse/main" });
        },
        goVideoList(course) {
            console.log("query--------->course.id", course.id);
            wx.navigateTo({
                url: `../../videoList/main?id=${course.id}`
            });
        },
        /**
         * @description: 获取课程列表
         * @param {data} 接口入参
         * @param {merge} 是否合并课程列表
         * @return: null
         */
        getCourseList(data, merge) {
            this.$http.course.getCourseList(data).then(res => {
                this.courseList = merge
                    ? this.courseList.concat(res.data)
                    : res.data;
            });
        }
    },

    onShareAppMessage: function(res) {
        if (res.from === "button") {
            // 来自页面内转发按钮
            console.log(res.target);
        }
        return {
            title: "meedu",
            path: "pages/login/main"
        };
    },
    onReachBottom() {
        if (this.total > this.courseList.length) {
            this.page++;
            this.getCourseList(
                { page: this.page, pageSize: this.pageSize },
                true
            );
        }
    },
    onShow() {
        this.init();
    },
    onHide() {
        this.page = 1;
    },
    onUnload() {
        this.page = 1;
    }
};
</script>

<style lang="less" >
.course {
    position: relative;
    .search-input {
        position: relative;
        width: auto;
        height: 70rpx;
        line-height: 70rpx;
        top: 0;
        left: 0;
        padding: 0 20rpx;
        margin: 20rpx 40rpx;
        box-sizing: border-box;
        border-radius: 35rpx;
        border: 1px solid #ccc;
        font-size: 26rpx;
        text-align: center;
        color: #808080;
        display: flex;
        align-items: center;
        justify-content: center;
        &-icon {
            display: inline-block;
            width: 32rpx;
            height: 32rpx;
            margin-right: 10rpx;
        }
    }
    .couse-title {
        // text-align: center;
        font-size: 17px;
        padding: 40rpx;
        box-sizing: border-box;
    }
    .card-list {
        display: flex;
        padding: 0 20px;
        box-sizing: border-box;
        flex-wrap: wrap;
        justify-content: center;
        .card-item {
            display: flex;
            width: 100%;
            margin-bottom: 20px;
            .card-img {
                flex: 0 0 auto;
                img {
                    width: 240rpx;
                    height: 80px;
                    border-radius: 10rpx;
                }
            }
            .card-info {
                display: flex;
                flex: 1;
                padding-left: 20rpx;
                margin-bottom: -5px;
                flex-direction: column;
                justify-content: space-between;
                border-bottom: 1px solid @border-color;
                &__name {
                    font-size: 16px;
                }
                &__desc {
                    font-size: 12px;
                    color: @font-color-gray;
                }
                &__oth {
                    font-size: 12px;
                    color: rgb(255, 153, 0);
                    margin-bottom: 10px;
                }
            }
        }
    }
}

.counter {
    display: inline-block;
    margin: 10px auto;
    padding: 5px 10px;
    color: blue;
    border: 1px solid blue;
}
</style>
