<template>
  <div class="container">
    <div class="container-img">
      <ul>
        <li><img src="https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg"></li>
        <li><img src="https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg"></li>
        <li><img src="https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg"></li>
        <li><img src="https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg"></li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Carousel'
  }
</script>

<style>
  .container {
    width: 375px;
    height: 195px;
  }

  .container-img {
    overflow: auto;
    position: relative;
    width: 375px;
    height: 195px;
  }

  ul {
    padding: 0;
    position: absolute;
    width: 1500px;
    height: 175px;
  }

  ul li {
    height: 195px;
    width: 375px;
    float: left;
  }

  ul li img {
    max-width: 100%;
  }

   /* 隐藏滚动条 */
  .container-img::-webkit-scrollbar {
      display: none;
  }
</style>