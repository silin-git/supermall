<template>
  <div>
      <good-list-item v-for="(item,index) in goods.list" :key="index" :item="item"/>
  </div>
</template>

<script>
  import GoodListItem from "./GoodListItem.vue"

  export default {
    name: "GoodList",
    props: ["goods"],
    components:{
      GoodListItem
    }
  }
</script>

<style>

</style>