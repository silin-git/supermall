<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物车</div>
    </nav-bar>
    <!-- <carousel></carousel> -->
    <detailsView :recommend="recommend"/>
    <homeRecommend/>
    <tab-carousel :titles="['流行','新款','精选']"/>
    <good-list :goods="goods.pop"/>
  </div>
</template>

<script>

  import NavBar from '../../components/common/navbar/NavBar.vue'
  import TabCarousel from '@/components/content/TabCarousel.vue'

  import {getAllData,getGoods} from 'network/home.js'
  import DetailsView from './components/HomeDetailsView.vue'
  import HomeRecommend from './components/HomeRecommend.vue'
  import GoodList from '@/components/content/goods/GoodList.vue'

  export default {
    name: 'Home',
    data() {
      return {
        banners: [],
        recommend: [],
        goods: {
          pop: {
            list: [],
            page: 0
          },
          new: {
            list: [],
            page: 0
          },
          sell: {
            list: [],
            page: 0
          }
        }
      }
    },
    components: {
      NavBar,
      TabCarousel,
      DetailsView,
      HomeRecommend,
      GoodList
    },
    created() {
      this.getAllData()
      this.getGoods("pop")
      this.getGoods("new")
      this.getGoods("sell")
    },
    methods:{
      getAllData(){
        getAllData().then(res => {
        this.banners = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
      },
      getGoods(type){
        const page = this.goods[type].page + 1;
        getGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page ++;
      })
      }
    }
  }

</script>

<style>
  #home .nav-bar{
    background-color: #55bb8a;
    color: white;
  }
</style>
