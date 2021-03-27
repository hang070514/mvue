<template>
    <div class="main">
      <div class="mCheckList" v-for="(item,index) in currentData" :key="index">
        <div class="list-l">
          <!--<img :src=item.image alt="">-->
          <span @click="up(item,index)">上移</span>
          <span @click="down(item,index)">下移</span>
        </div>
        <div class="list-c">
          <p>{{item.name}}</p>
          <p>销量：{{item.sale}}</p>
        </div>
        <div class="list-r">
          <span :class="[item.isCheck ? 'check' : 'unCheck']" ></span>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'mCheckList',
    props: {
      options: {
        type: Array
      }
    },
    data() {
      return {
        currentData: this.options
      }
    },
    methods: {
      check(item) {
        item.isCheck = !item.isCheck
      },
      up(item, index) {
        this.currentData.splice(index - 1, 0, item)
        this.currentData.splice(index + 1, 1)
      },
      down(item, index) {
        this.currentData.splice(index + 2, 0, item)
        this.currentData.splice(index, 1)
      }
    }
  }
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
</style>
<style scoped lang="less">
  .mCheckList{
    display: flex;
    height: 8rem;
    flex-direction: row;
    align-items: center;
    margin-left: 1rem;
    margin-right: 0.8rem;
    .list-l{
      width: 6rem;
      img{
        width: 5.5rem;
        height: 5.5rem;
      }
    }
    .list-c{
      flex: 1;
      p:nth-child(1){
        font-size: 1.4rem;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #333333;
        text-align: left;
        margin-bottom: 0.5rem;
      }
      p:nth-child(2){
        font-size: 1rem;
        font-family: PingFang;
        font-weight: 500;
        color: #999999;
        text-align: left;
        margin-top: 0.5rem;
      }
    }
    .list-r{
      width: 2.5rem;
      span{
        display: inline-block;
        width: 2.2rem;
        height: 2.2rem;
      }
      .check{
        background: url('../img/check.png') no-repeat 0;
        background-size: 100% 100%;
      }
      .unCheck{
        background: url('../img/unCheck.png') no-repeat 0;
        background-size: 100% 100%;
      }
    }
  }
</style>
