<template>
    <div class="article-list">
        <p>文章列表</p>
        <ul class="article-list-ul">
            <li
                class="list-item"
                v-for="(item, index) in articleList"
                @click="goArticleInfo(item)"
                :class="{ red: aa }"
                :key="index"
            >
                <div class="list-item_title">{{item.post_title}}</div>
                <div class="list-item_info">
                    <span>作者：{{item.display_name}}</span>
                    <span>{{item.post_date}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { formatTime } from "@/utils/index";
import card from "@/components/card";

export default {
    components: {
        card
    },

    data() {
        return {
            categoryId: "",
            articleList: []
        };
    },
    methods: {
        init() {
            this._getArticleList({ page_size: 10, page: 1 }, this.categoryId);
        },
        goArticleInfo(e) {
            wx.navigateTo({
                url: `../articleInfo/main?id=${e.ID}&title=${e.post_title}`
            });
            wx.setStorageSync("curPostContent", e.post_content);
        },
        // 获取文章列表
        _getArticleList(data, id) {
            const that = this;
            wx.showLoading({
                title: "加载中",
                mask: true
            });
            wx.request({
                url: "https://api.ytuj.cn/api/v1/ytu/articles", // 仅为示例，并非真实的接口地址
                data: {
                    page: 1,
                    page_size: 10,
                    category_id: this.categoryId
                },
                method: "GET",
                header: {
                    "content-type": "application/json" // 默认值
                },
                success(res) {
                    wx.hideLoading();
                    that.articleList = res.data.data.concat(that.articleList);
                    that.articleList.forEach(e => {
                        e.post_date = e.post_date.slice(0, 10);
                    });
                },
                fail() {
                    wx.hideLoading();
                }
            });
        }
    },
    mounted() {},
    onShow() {
        this.categoryId = this.$mp.query.id;
    },
    onReady() {
        this.init();
    },
    onHide() {},
    onUnload() {
        this.articleList = [];
    }
};
</script>

<style lang="less">
@import "../../../../assets/style/variable";

.article-list {
    padding: 0 20px;
    box-sizing: border-box;
    font-size: 16px;
    p {
        font-size: 16px;
    }
    .article-list-ul {
        display: flex;
        flex-direction: column;
        font-size: 14px;
        padding: 20px 0;
        .list-item {
            flex: 1;
            width: 100%;
            line-height: 2;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            border-bottom: 1px solid @border-color;
            &_title {
                font-size: 28rpx;
                color: #1a1a1a;
            }
            &_info {
                display: flex;
                justify-content: space-between;
                font-size: 24rpx;
                color: @font-color-gray;
            }
        }
    }
}
</style>
