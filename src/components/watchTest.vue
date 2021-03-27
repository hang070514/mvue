<template>
   <div class="main">
     obj.a: <span>{{obj.a}}</span><br>
     <input type="text" v-model="obj.a">
     <div v-for="(item,index) in arr" :key="index">{{item}}</div>
     <span @click="cli">点击</span>
   </div>
</template>

<script>
export default {
  name: 'watchTest',
  data () {
    return {
      firstName: 'zhang',
      lastName: 'hang',
      fullName: '',
      obj: {
        a: 'hello'
      },
      arr: ['js', 'html', 'css', 'vue', 'react']
    }
  },
  methods: {
    cli() {
      // this.arr.push('less')
      // this.arr[1] = 'vux'
      // this.arr.splice(1, 1, 'less')
      // this.$set(this.arr, 1, 'sass')
      // this.arr.length = 3
      // this.arr.splice(3)
      // console.log('this.arr=====', this.arr)
      // this.obj.a = 'world'
      // this.obj.b = 'world'
      this.$set(this.obj, 'b', 'world')
      console.log('this.obj====', this.obj)
    }
  },
  watch: {
   /* lastName (val, oldVal) {
      this.fullName = this.firstName + val
    }
    // immediate:true代表如果在 wacth 里声明了 lastName 之后，就会立即先去执行里面的handler方法
    lastName: {
      handler (val, oldVal) {
        this.fullName = this.firstName + val
      },
      immediate: true
    },*/
    obj: {
      handler (val, oldVal) {
        console.log('obj  val====', val)
      },
      deep: true
    },
 /*   'obj.a': {
      handler (val, oldVal) {
        console.log('a  val====', val)
      }
    },*/
    arr:{
      handler(val, oldVal) {
        console.log('val====', val)
      }
    }
  }
}
</script>

<style scoped>

</style>
