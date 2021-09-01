<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物车</div>
    </nav-bar>
    <!-- <carousel></carousel> -->
    <detailsView :recommend="recommend"/>
  </div>
</template>

<script>

  import NavBar from '../../components/common/navbar/NavBar.vue'
  import {getAllData} from 'network/home.js'
  import detailsView from './components/HomeDetailsView.vue'

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
      detailsView
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
