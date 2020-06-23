<template class="home">
  <div class="home">
    <div class="swipper">
      <swipper />
      <div class="TempleName">{{TempleName}}</div>
    </div>
    <description />
    <div class="homelist">
      <donation donationName="建寺" isslect="true" ismoney="true" ismessage="true" isaddress="true"/>
      <donation donationName="放生" ismoneyone="true" ismessage="true"/>
      </donation>
      <donation donationName="供佛" iscount="true" ismoneycheck="true" ismoney="true"/>
      <donation donationName="供斋" ismoneyone="true"/>
      <donation donationName="法会" class="booleft" ismoneyone="true"/>
      <donation donationName="助印" class="booright" ismoneyone="true" ismessage="true"/>
    </div>
    <div class="footer">
      <div @click="$router.push('profile')"><van-icon name="arrow-left" />我的功德</div>
      <div @click="$router.push('detaildonation')">查看功德<van-icon name="arrow" /></div>
    </div>

  </div>
</template>

<script>
import swipper from "./swipper"
import description from "./description"
import donation from "./donation"
export default {
  name: 'Home',
  data(){
    return {
      TempleName : '东华寺中殿',
    }
  },
  components:{
    swipper,
    description,
    donation
  }
}
</script>
<style scoped lang="less">
  .swipper{
    position: relative;
  }
  .TempleName{
    font-size: 6.111vw;
    color: #fff;
    position: absolute;
    bottom: 2.778vw;
    left: 5.556vw;
  }
  .home{
    background-color: rgb(158, 35, 35);
  }
  .homelist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    .booleft{
      margin-left: 22.778vw;
      margin-top: 5.556vw;
    }
    .booright{
      margin-right: 22.778vw;
      margin-top: 5.556vw;
    }
  }
  .footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 6.222vw;
    color: rgb(204, 197, 115);
    margin-top: 8.333vw;
    padding: 0 2.778vw 40px;
  }
</style>