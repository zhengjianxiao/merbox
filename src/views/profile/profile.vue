<template>
  <div class="main">
    <div class="container">
      <div class="profiledetail">
        <div class="detailleft"><img src="@/assets/logo.png" alt=""></div>
        <div class="detailright">
          <div>#NAME?</div>
          <div class="detailrightbottom">
            <div>累计：</div>
            <div>0.00</div>
          </div>
        </div>
      </div>
      <img src="@/assets/donation.jpg" alt="">
    </div>
    <div class="back" @click="$router.push('home')">返回主页</div>
  </div>
</template>

<script>
  export default {
    name: "profile"
  }
</script>

<style lang="less" scoped>
.main{
  background-color: rgb(158, 35, 35);
  padding-bottom: 2vh;
  color: rgb(212, 177, 20);
}
  .container{
    >img{
      width: 90%;
      height: 80vh;
      margin-top: 5vh;
      margin-left: 5%;
    }
  }
  .back{
    width:70%;
    height: 50px;
    background-color: rgb(212, 177, 20);
    border-radius: 10px;
    margin: 0 auto;
    text-align: center;
    line-height: 50px;
    font-size: 22px;
    color: #fff;
   letter-spacing: 15px;
   margin-top: 5vh;
  }
  .profiledetail{
    border: 3px solid rgb(212, 177, 20);
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60%;
    box-sizing: border-box;
    padding: 10px 60px 20px 10px;
  }
  .detailleft{
    img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: red;
      vertical-align: middle;
      align-self: center;
    }
  }
  .detailright{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    .detailrightbottom{
      display: flex;
      flex-direction: row;
      margin-top: 10px;
      position: relative;
      margin-left: -20px;
     :nth-child(2){
       font-size: 20px;
       position: absolute;
       top: 0;
       right: -50px;
       color: red;
       font-weight: bold;   
     }
    }
  }
</style>