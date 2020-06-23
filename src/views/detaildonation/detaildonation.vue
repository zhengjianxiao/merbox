<template>
  <div class="main">
    <div class="container">
      <div>某某寺功德榜</div>
      <img src="@/assets/donation.jpg" alt="">
    </div>
    
    <div class="back" @click="$router.push('home')">返回主页</div>
  </div>
</template>

<script>
  export default {
    name: "detaildonation"
  }
</script>

<style lang="less" scoped>
.main{
  background-color: rgb(158, 35, 35);
  padding-bottom: 2vh;
}
  .container{
    position: relative;
    :nth-child(1){
      font-size: 5.556vw;
      color:#fff;
      padding: 1.778vw;
      letter-spacing: 1.389vw;
      box-sizing: border-box;
      background-color: rgb(158, 35, 35);
      border-radius: 2.778vw;
      position: absolute;
      top:11.111vw;
      left:50%;
      transform: translateX(-50%);
    }
    img{
      margin-top: 5vh;
      margin-left: 5%;
      width: 90%;
      height: 80vh;
    }
  }
  .back{
    width:70%;
    height: 11.889vw;
    background-color: rgb(212, 177, 20);
    border-radius: 2.778vw;
    margin: 0 auto;
    text-align: center;
    line-height: 13.889vw;
    font-size: 6.111vw;
    color: #fff;
   letter-spacing: 4.167vw;
   margin-top: 5vh;
  }
</style>