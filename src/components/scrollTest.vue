
<template>
  <div class="main">
    <div class="scrollTest">
      <div class="box" v-for="(item, index) in list"></div>
    </div>

    <div class="test" @click="jump">
      <a href="https://www.baidu.com" >跳转到百度</a>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'scrollTest',
    data() {
      return {
        list: [1, 2, 3, 4]
      }
    },
    methods: {
      jump() {
        console.log('1111111')
        return
      }
    }
  }
</script>

<style scoped lang="less">
  .scrollTest{
    height: 300px;
    white-space: nowrap;
    overflow-x: scroll;
    // 隐藏滚动条
    &::-webkit-scrollbar{
      display: none;
    }
    .box{
      display: inline-block;
      width: 150px;
      height: 200px;
      border: 1px solid red;
      margin-left: 15px;
      box-sizing: border-box;
    }
  }
  .test{
    width: 100%;
    height: 100px;
    border: 1px solid red;
    text-align: center;
  }
</style>
