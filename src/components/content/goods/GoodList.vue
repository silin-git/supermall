<template>
  <div class="good-list">
      <good-list-item v-for="(item,index) in list" :key="index" :item="item"/>
  </div>
</template>

<script>
  import GoodListItem from "./GoodListItem.vue"

  export default {
    name: "GoodList",
    props: ["list"],
    components:{
      GoodListItem
    }
  }
</script>

<style>
  .good-list{
    display: flex;
    flex-flow: row wrap;
  }
</style>