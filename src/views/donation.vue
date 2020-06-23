<template class="donhome">
  <div>
    <div class="donation" @click="donaclick">
      <img src="@/assets/donation.jpg" alt="">
      <div>{{donationName}}</div>
    </div>
      <van-overlay :show="show"  class="overlay">
        <img src="@/assets/donation.jpg" alt="">
        <div class="wrapper" @click.stop>
          <div class="title">{{donationName}}</div>
          <div class="detail" :class="{'isshow' : !isshow}">{{detail}}</div>
          <div class="icon" @click="iconclick()">
            <van-icon name="arrow-down" v-if="!isshow"/>
            <van-icon name="arrow-up" v-else/>
          </div>
          <van-form @submit="onSubmit" class="subform">
            <slot name="ismoneycheck">
              <div v-if="ismoneycheck">
                <van-field name="ismoneycheck" class="filed">
                  <template #input>
                    <van-checkbox-group v-model="checkboxGroup" >
                      <van-checkbox name="300" icon-size="26px" checked-color="rgb(212, 177, 20)">300/年</van-checkbox>
                    </van-checkbox-group>
                  </template>
                </van-field>
              </div>
            </slot>
            <slot name="moneyone">
              <div v-if="ismoneyone" class="moneyone">
                 <van-field class="filed"
                    v-model="moneyone"
                    name="输入金额"
                    label="输入金额"
                  />
                  <span>￥</span>
                  <span>元</span>
              </div>
            </slot>
            <slot name="slect">
              <div v-if="isslect">
                <van-field class="filed"
                readonly
                clickable
                name="picker"
                :value="value"
                label="选择用途"
                @click="showPicker = true"
                />
                <van-popup v-model="showPicker" position="right">
                  <van-picker
                    show-toolbar
                    :columns="columns"
                    @confirm="onConfirm"
                    @cancel="showPicker = false"
                    :default-index="0" 
                  />
                </van-popup>
              </div>
            </slot>
            <slot name="count">
              <div v-if="iscount" class="count">
                <van-field class="filed"
                  v-model="count"
                  name="数量"
                  label="数量"
                />
                <div class="countright">
                  <span></span>
                  <span>年</span>
                </div>
              </div>
            </slot>
            <slot name="money">
              <div v-if="ismoney">
                <van-field class="filed"
                  v-model="money"
                  name="金额"
                  label="金额"
                  placeholder="0.01"
                />
              </div>
            </slot>
            <van-field class="filed"
              v-model="username"
              name="用户姓名"
              label="用户姓名"
              placeholder="非必填"
            />
            <van-field class="filed"
              v-model="tel"
              name="联系电话"
              label="联系电话"
              placeholder="非必填"
            />
            <slot name="message">
              <div v-if="ismessage">
                  <van-field class="filed"
                  v-model="message"
                  rows="2"
                  autosize
                  name="祝福语"
                  label="祝福语"
                  type="textarea"
                  maxlength="50"
                  placeholder="保佑我全家身体健康，万事如意！"
                  show-word-limit
                />
              </div>
            </slot>
            <slot name="address">
              <div v-if="isaddress">
                <van-field class="filed"
                  v-model="address"
                  name="地址"
                  label="地址"
                  placeholder="必填"
                  :rules="[{ required: true, message: '请填写地址' }]"
                />
              </div>
            </slot>
            <div style="margin: 16px;" >
              <van-button round block type="info" native-type="submit" class="subbutton">
                提交
              </van-button>
            </div>
          </van-form>
          <van-button square type="primary" class="back" @click="backclick">返回</van-button>
        </div>
      </van-overlay>
  </div>
</template>

<script>
  export default {
    name: "donation",
    props: ["donationName","ismoneyone","iscount","ismoneycheck","isslect","ismoney","ismessage","isaddress"],
    data() {
    return {
      isshow: false,
      show: false,
      detail: `sadhjfjaguhauogfuefyguygefbyuegwuyeguygwuygehnakjshncjgvcfvcajnbxjkasvbcvuifghisabhjkbvjhbcabhdbhgbfugfuygjhasdhiugfuygsdugbbnzcnbajksdfghhuguyiewafvgxbcghfjaskhgbcjh`
      ,username: '',
      tel: '',
      money: '0.01',
       value: '瓦',
      columns: ['瓦', '柱子', '大殿', '随意'],
      showPicker: false,
      message: '',
      address: '',
      moneyone:'',
      count:'',
      checkbox: true,
      checkboxGroup: [],
    }
  },
  methods: {
    donaclick(){
      this.show = true
    },
    iconclick(){
      this.isshow = !this.isshow

    },
     onSubmit(values) {
      console.log('submit', values);
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    backclick(){
       this.show = false;
    }
  }
  }
</script>

<style lang="less" scoped>
  .donation{
    position: relative;
    img{
      width: 21vw;
    }
    div{
      position: absolute;
      top: 7.167vw;
      left: 7.167vw;
      width:5.556vw;
      color: rgb(236, 223, 32);
      font-size: 5vw;
    }
  }
  .overlay{
    padding: 2.778vw 0.278vw;
    img{
      margin-left: 4%;
      margin-top: 8%;
      width: 90%;
      height: 90%;
      vertical-align: middle;
      
    }
  }
  .wrapper{
    margin-top: -550.001px;
    font-size: 6.556vw;
    color:rgb(204, 197, 115);
    position: relative;
    height: 450px;
    overflow: scroll;
    .title{
      text-align: center;
    }
  }
  .detail{
    padding: 2.778vw;
    line-height: 1.3;
    box-sizing: border-box;
    font-size: 5.556vw;
    width: 70%;
    margin: 0 auto;
    word-wrap: break-word;
    text-indent: 2em;
    color: #fff;
    color: rgb(204, 197, 115);
  }
  .icon{
      text-indent: 0;
      width: 5.556vw;
      height: 5.556vw;
      margin: 0 auto;
  }
  .isshow{
    height:18vw;
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
  }
  .filed{
    width: 60%;
    border-radius: 0.833vw;
    margin: 2.778vw auto;
    border-bottom: 0.278vw solid rgb(204, 197, 115);
    color: rgb(204, 197, 115);
  }
  .subbutton{
    width: 30%;
    border-radius: 4.167vw;
    margin: 2.778vw auto;
    background-color: rgb(212, 177, 20);
    border: none;
    underline-color: none;
    margin-right: 16.667vw;
    position: fixed;
    bottom: 11.111vw;
    right: 4.06vw;
  }
  .back{
    width: 28%;
    border-radius: 4.167vw;
    background-color: rgb(212, 177, 20);
    border: none;
    underline-color: none;
    position: fixed;
    bottom: 13.889vw;
    left: 16.944vw;
  }
  .count{
    position: relative;
  }
  .countright{
    position: absolute;
    right: 20%;
    top: 0;
    :nth-child(1){
      display: inline-block;
      width:41.667vw;
      border-bottom: 0.278vw solid #000;
      margin-bottom: -2.778vw;
    }
    :nth-child(2){
      font-size: 4.444vw;
    }
  }
 .van-checkbox /deep/ .van-checkbox__label{
    color:rgb(204, 197, 115);
  }
  .moneyone /deep/ .van-field__control {
    height: 11.111vw;
    border: 0.833vw solid rgb(204, 197, 115);
    margin-top: -2.778vw;
    padding: 0 6vw;
  }
  .moneyone{
    position: relative;
    span{
      position: absolute;
      bottom: 4.967vw;
      font-size: 4vw;
    }
     span:nth-of-type(1){
      left: 48.056vw;
    }
    span:nth-of-type(2){
      right: 18.056vw;
    }
  }
  .van-cell /deep/ .van-field__control{
    color: rgb(204, 197, 115);
    ::-webkit-input-placeholder{
      color: rgb(204, 197, 115);
    }
  }
</style>