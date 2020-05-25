<template>
    <div>
        <nav-bar class="home-nav"><div slot='center'>购物街</div></nav-bar>
        <swiper>
            <swiper-item v-for="item in banners" :key="item.labe">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                </a>
            </swiper-item>
        </swiper>
    </div>
</template>

<script> 
import NavBar from 'components/common/navbar/NavBar.vue'
import {getHomeMultidata} from 'network/home'
import {getHomeData} from 'network/home'
import {Swiper, SwiperItem} from 'components/common/swiper'
// import {Swiper} from 'components/common/swiper/Swiper.vue'
// import {SwiperItem} from 'components/common/swiper/SwiperItem.vue'

export default {
    name: "Home",
    components: {
        NavBar,
        Swiper,
        SwiperItem
    },
    data() {
        return {
            banners: [],
            recommends: []
        }
    },
    created() {
        getHomeMultidata().then(res => {
            
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list
            console.log(this.banners)
        }),
        getHomeData().then(res => {
            
        })
    }

}
</script>

<style>
    .home-nav{
        background-color: var(--color-tint);
        color: white;
        font-size: 18px;
    }
</style>