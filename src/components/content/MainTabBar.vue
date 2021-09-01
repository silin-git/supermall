<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img src="~assets/img/tabbar/home.svg" slot="item-icon" alt=""/>
        <img src="~assets/img/tabbar/home_active.svg" slot="item-icon-active" alt=""/>
        <div slot="item-name">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img src="~assets/img/tabbar/category.svg" slot="item-icon" alt=""/>
        <img src="~assets/img/tabbar/category_active.svg" slot="item-icon-active" alt=""/>
        <div slot="item-name">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img src="~assets/img/tabbar/shopcar.svg" slot="item-icon" alt=""/>
        <img src="~assets/img/tabbar/shopcar_active.svg" slot="item-icon-active" alt=""/>
        <div slot="item-name">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img src="~assets/img/tabbar/profile.svg" slot="item-icon" alt=""/>
        <img src="~assets/img/tabbar/profile_active.svg" slot="item-icon-active" alt=""/>
        <div slot="item-name">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from '../common/tabbar/TabBar.vue'
  import TabBarItem from '../common/tabbar/TabBarItem.vue'

  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>

</style>