<template>
    <div>
        <nav-bar class="home-nav"><div slot='center'>购物街</div></nav-bar>
        <home-swiper :banners='banners' class='home-swiper'></home-swiper>
        <recommend-view :recommends='recommends'></recommend-view>
        <feature-view></feature-view>
        <tab-control class='tab-control' 
        :titles="['流行', '新款', '精选']"
        @tabClick='tabClick'></tab-control>
        <goods-list :goods="showGoods"></goods-list>
        <ul>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
            <li>我是li标签</li>
        </ul>
    </div>
</template>

<script> 
import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabcontrol/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList'

import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'

import {getHomeMultidata, getHomeGoods} from 'network/home'


// import {Swiper} from 'components/common/swiper/Swiper.vue'
// import {SwiperItem} from 'components/common/swiper/SwiperItem.vue'

export default {
    name: "Home",
    components: {
        NavBar,
        TabControl,
        GoodsList,
        HomeSwiper,
        RecommendView,
        FeatureView
    },
    data() {
        return {
            banners: [],
            recommends: [],
            goods: {
                'pop': {page: 0, list: []},
                'new': {page: 0, list: []},
                'sell': {page: 0, list: []}
            },
            currentType: 'pop'
        }
    },
    computed: {
        showGoods() {
            return this.goods[this.currentType].list
        }
    },
    created() {
        this.getHomeMultidata();

        this.getHomeGoods('pop');
        this.getHomeGoods('new');
        this.getHomeGoods('sell')
    },
    methods: {

        //事件监听相关的方法
        tabClick(index) {
            switch(index) {
                case 0: 
                    this.currentType = 'pop'
                    break
                case 1: 
                    this.currentType = "new"
                    break
                case 2: 
                    this.currentType = 'sell'
                    break
            }
        },
        //网络请求相关的方法
        getHomeMultidata() {
                getHomeMultidata().then(res => {
                this.banners = res.data.banner.list;
                this.recommends = res.data.recommend.list
            })
        },
        getHomeGoods(type) {
            const page = this.goods[type].page + 1
            getHomeGoods(type, page).then(res => {
                this.goods[type].list.push(...res.data.list);
                this.goods[type].page += 1;
        })
        }
    }

}
</script>

<style>
    .home-nav{
        background-color: var(--color-tint);
        color: white;
        font-size: 18px;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 999;
    }
    .home-swiper {
        margin-top: 44px;
    }
    .tab-control {
        position: sticky;
        top: 44px
    }
</style>