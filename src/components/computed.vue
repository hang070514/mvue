<template>
    <div>
      <h2>计算属性页面</h2>
      {{fullName}}
      <div>firstName: <input v-model="firstName"></div>
      <div>lastName: <input v-model="lastName"></div>
      {{reverseMsg}}
      <button @click="change">点我</button>
      参数1：{{$route.query.username}}
      参数2：{{$route.query.id}}
    </div>
</template>

<script>
  export default {
    name: 'computed',
    data(){
      return {
        firstName:'zhang',
        lastName:'hang',
        msg:'hello',
        obj:{
          a:1
        }
      }
    },
    computed:{
      fullName(){
        return this.firstName + '' + this.lastName;
      },
      reverseMsg(){
        return this.msg+'world'
      }
    },
    watch:{
      'obj.a':{
        handler(val,oldVal){
          console.log('val=====',oldVal,val);
        }
      },
      deep:true,
      immediate:true
    },
    methods:{
      change(){
        this.obj.a = 5;
      }
    }
  }
</script>

<style scoped>

</style>
