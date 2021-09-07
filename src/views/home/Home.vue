<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物车</div>
    </nav-bar>
    <!-- <carousel></carousel> -->
    <detailsView :recommend="recommend" class="details-view"/>
    <homeRecommend/>
    <tab-carousel :titles="['流行','新款','精选']" @tapItemClick="tapItemClick"/>
    <good-list :list="showGoods" class="good-list"/>
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
        },
        currentTapType: "pop"
      }
    },
    components: {
      NavBar,
      TabCarousel,
      DetailsView,
      HomeRecommend,
      GoodList
    },
    computed:{
      showGoods(){
        return this.goods[this.currentTapType].list
      }
    },
    created() {
      this.getAllData()
      this.getGoods(this.currentTapType)
    },
    methods:{
      /**
       * 点击选项卡的方法
       */
      tapItemClick(index){
        switch(index){
          case 0:
            this.currentTapType = "pop"
            break;
          case 1:
            this.currentTapType = "new"
            break;
          case 2:
            this.currentTapType = "sell"
            break;
          default:break;
        }
        this.getGoods(this.currentTapType)
      },

      /**
       * 网络请求的方法
       */
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
  #home {
    overflow: auto;
  }
  #home::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  #home .details-view{
    margin-top: 44px;
  }
  #home .good-list {
    margin-top: 10px;
  }
</style>
