<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  export default {
    name: "swipper",
     data() {
    return {
      images: [
        'https://s1.ax1x.com/2020/06/22/NG7Ywj.th.jpg',
        'https://s1.ax1x.com/2020/06/22/NGhWfU.md.jpg',
        'https://s1.ax1x.com/2020/06/22/NG4iAP.th.jpg',
        'https://s1.ax1x.com/2020/06/22/NG4nns.md.jpg'
      ],
    };
  },
  }
</script>

<style lang="less" scoped>
   .my-swipe /deep/.van-swipe-item {
    color: #fff;
    text-align: center;
    img{
      width:100%;
      height:55.556vw;
      vertical-align: middle;
    }
    background-color: red;
  }
</style>