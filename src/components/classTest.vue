<template>
  <div class="classTest">
    <!--<h2 :class="{'mblue':flag1, 'mred': flag2}">我是测试文字</h2>-->
    <!--<h2 :class="[ flag1 ? 'mblue' : '' , flag2 ? 'mred': '']">我是测试文字</h2>-->
    <h2 :class="classObject">我是测试文字</h2>
    <div class="box">
      <div class="text">
        这是测试单行文本超出显示的文字哈哈哈哈哈哈哈哈哈看得见可怜是否是
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'classTest',
  data () {
    return {
      flag1: false,
      flag2: false
    }
  },
  created () {
    var arr = [1, 2, 3]
    var arr1 = [...arr]
    var arr2 = arr
    console.log('arr1===', arr1)
    console.log('arr2===', arr2)
    setTimeout(() => {
      this.flag2 = true
    }, 3000)
    console.log('process.env.NODE_ENV====', process.env.NODE_ENV)
    //  this.flag1()
  },
  computed: {
    classObject () {
      return {
        mblue: this.flag1,
        mred: this.flag2
      }
    }
  },
  methods: {
  /*  flag1() {
      console.log('hhhhh')
    }*/
  }
}
</script>

<style scoped lang="less">
  .classTest{
    color: #000;
      .mblue{
        color: blue;
      }
      .mred{
        color: red;
      }

    .box{
      width: 98%;
      height: 500px;
      border: 1px solid blue;
      .text{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 100px;
        height: 100px;
        border: 1px solid red;
       /* overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;*/
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;

      }
    }
  }

</style>
