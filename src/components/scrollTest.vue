
<template>
  <div class="scrollTest">
      <div class="box" v-for="(item, index) in list"></div>
  </div>
</template>

<script>
  export default {
    name: 'scrollTest',
    data() {
      return {
        list: [1, 2, 3, 4]
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
</style>
