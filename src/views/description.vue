<template >
  <div class="scr">
    <div class="description" :class="{'isshow' : !isshow}">
      {{description}}
    </div>

    <div class="icon" @click="iconclick()">
      <van-icon name="arrow-down" v-if="!isshow"/>
      <van-icon name="arrow-up" v-else/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "description",
    data() {
      return {
        description: `desdescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription
                    ` ,
        isshow: false
      }
    },
    methods: {
      iconclick() {
        this.isshow = !this.isshow
      }
    }
  }
</script>

<style lang="less" scoped>
.scr{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
  .description{
    padding: 2.778vw;
    line-height: 1.3;
    box-sizing: border-box;
    font-size: 5.556vw;
    width: 100%;
    word-wrap: break-word;
    text-indent: 2em;
    color: #fff;
   
  }
   .icon{
      text-indent: 0;
      font-size: 5.556vw;
      color: rgb(204, 197, 115);
      text-align: center;
    }
  .isshow{
   height:25vw;
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 3;
   -webkit-box-orient: vertical;
  }
</style>