<template>
  <div class="tab-carousel">
    <div v-for="(title,index) in titles" @click="itemClick(index)"
    :key="index" class="carousel-item" :class="{active:index==currentIndex}">
      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabCarousel",
  props: {
    titles: {
      typr: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index;
    }
  }
}
</script>

<style>
  .tab-carousel{
    display: flex;
    height: 40px;
    line-height: 40px;
  }
  .carousel-item{
    flex: 1;
    text-align: center;
  } 
  .active{
    color: #55bb8a;
  }
  .active span{
    padding: 5px;
    border-bottom: 3px solid #55bb8a;
  }
</style>