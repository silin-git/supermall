<template>
  <div>
    <div class="tab-carousel">
      <div v-for="(title,index) in titles" @click="itemClick(index)"
      :key="index" class="carousel-item">
        <span>{{title}}</span>
      </div>
    </div>
    <div class="tab-line" ref="tabLine"></div>
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
      currentIndex:0,
      bodyWidth:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index;
      this.$refs.tabLine.style.transform="translate3d("+((this.bodyWidth/3-20)/2+(this.bodyWidth/3)*index) +"px,0,0)";
    }
  },
  mounted(){
    this.bodyWidth = this.$refs.tabLine.offsetParent.offsetWidth;
    this.$refs.tabLine.style.transform="translate3d("+((this.bodyWidth/3-20)/2) +"px,0,0)";
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
  .tab-line {
    height: 3px;
    width: 20px;
    box-shadow: 1px;
    background-color: #55bb8a;
    transition-duration: 300ms;
  }
</style>