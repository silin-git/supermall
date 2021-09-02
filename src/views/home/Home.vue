<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物车</div>
    </nav-bar>
    <!-- <carousel></carousel> -->
    <detailsView :recommend="recommend"/>
    <homeRecommend/>
    <tab-carousel :titles="['流行','新款','精选']"/>
  </div>
</template>

<script>

  import NavBar from '../../components/common/navbar/NavBar.vue'
  import TabCarousel from '@/components/content/TabCarousel.vue'

  import {getAllData} from 'network/home.js'
  import detailsView from './components/HomeDetailsView.vue'
  import HomeRecommend from './components/HomeRecommend.vue'

  export default {
    name: 'Home',
    data() {
      return {
        banners: [],
        recommend: []
      }
    },
    components: {
      NavBar,
      TabCarousel,
      detailsView,
      HomeRecommend,
    },
    created() {
      getAllData().then(res => {
        console.log(res);
        this.banners = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    }
  }

</script>

<style>
  #home .nav-bar{
    background-color: #55bb8a;
    color: white;
  }
</style>
