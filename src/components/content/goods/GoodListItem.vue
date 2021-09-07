<template>
  <div class="goodList-item">
    <img :src="item.show.img">
    <div>
      <span class="title">{{item.title}}</span>
      <div class="bottom-price"><span>{{item.price}}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  props:["item"]
}
</script>

<style>
  img {
    width: 90%;
  }
  .goodList-item {
    width: 50%;
    text-align: center;
  }
  .title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
  .bottom-price {
    color: #55bb8a;
  }
</style>