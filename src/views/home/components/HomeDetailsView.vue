<template>
    <div class="recommend">
      <div class="recommendItem" v-for="item in recommend" :key="item.sort">
        <a :href="item.link">
          <img :src="item.image">
          <div>{{item.title}}</div>
        </a>
      </div>
    </div>
</template>

<script>
export default {
  name: "HomeDetailsView",
  props:{
    recommend:{
      type:Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
  .recommend{
    display: flex;
    max-width: 100%;
  }
  .recommend .recommendItem{
    flex: 1;
    text-align: center;
  }
  .recommend .recommendItem a{
    text-decoration: none;
    color: black;
  }
  .recommend .recommendItem img{
    max-width: 80%;
    max-height: 80%;
  }
</style>