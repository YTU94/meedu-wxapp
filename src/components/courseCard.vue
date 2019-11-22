<template>
    <div class="course-card" @click="goVideoList(course)">
        <div class="card-img">
            <img :src="course.thumb" alt mode />
            <div v-if="isNew" class="card-img-icon">new</div>
        </div>
        <div class="card-info">
            <div class="card-info__name">
                {{course.title}}
                <div class="card-info__desc" v-html="course.short_description"></div>
            </div>
            <!-- <div class="card-info__oth" v-if="course.charge">币{{course.charge}}</div> -->
            <div class="card-info__oth" v-if="course.charge">实战课程</div>
            <div class="card-info__oth" v-else>免费课程</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        course: {
            type: Object,
            default: () => {}
        }
    },
    computed: {
        isNew() {
            let now = Date.parse(new Date()) / 1000;
            let onLineDays = Math.floor(
                (now - this.course.published_at) / 3600 / 24
            );
            return onLineDays < 90;
        }
    },
    methods: {
        goVideoList() {
            this.$emit("goVideoList", this.course);
        }
    }
};
</script>

<style lang="less">
.course-card {
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    .card-img {
        position: relative;
        flex: 0 0 auto;
        img {
            width: 240rpx;
            height: 80px;
            border-radius: 10rpx;
            box-shadow: 0rpx 2rpx 6rpx rgba(0, 0, 0, 0.1);
        }
        &-icon {
            position: absolute;
            right: -10rpx;
            top: -10rpx;
            width: auto;
            height: auto;
            line-height: 1;
            padding: 5rpx 10rpx;
            font-size: 14px;
            color: #fff;
            background-color: red;
            border-radius: 25rpx;
            border: 4rpx solid #fff;
            // box-shadow: 0 2rpx 6rpx rgb(255, 255, 255);
            z-index: 10;
        }
    }
    .card-info {
        display: flex;
        flex: 1;
        padding-left: 20rpx;
        margin-bottom: -5px;
        flex-direction: column;
        justify-content: space-between;
        border-bottom: 1rpx solid @border-color;
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
</style>
