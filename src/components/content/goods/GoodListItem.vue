<template>
  <div>
    <img :src="item.show.img">
    <div>
      <span>{{item.title}}</span>
      <div><span>{{item.price}}</span></div>
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
    width: 45%;
  }
</style>