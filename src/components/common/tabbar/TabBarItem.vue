<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="isActive"><slot name="item-icon-active"></slot></div>
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div :style="activeStyle"><slot name="item-name"></slot></div>
  </div>
</template>

<script>
  export default {
    name:"TabBarItem",
    props:{
      path: String,
      activeColor: {
        type: String,
        default: "#55bb8a"
      }
    },
    data(){
      return {
         
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) != -1
      },
      activeStyle(){
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods:{
      itemClick(){
        console.log(this.path);
        this.$router.replace(this.path)
      }
    }
  }
  
</script>

<style>
  .tabbar-item{
    flex: 1;
    height: 49px;
    text-align: center;
    background-color: #f6f6f6;
  }
  
  .tabbar-item img{
    margin-top: 3px;
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
  
</style>
