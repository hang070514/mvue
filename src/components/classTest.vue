<template>
  <div class="classTest">
    <!--<h2 :class="{'mblue':flag1, 'mred': flag2}">我是测试文字</h2>-->
    <!--<h2 :class="[ flag1 ? 'mblue' : '' , flag2 ? 'mred': '']">我是测试文字</h2>-->
    <h2 :class="classObject">我是测试文字</h2>
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
    flag1() {
      console.log('hhhhh')
    }
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
  }

</style>
