<template>
    <div>
      <p>foo {{foo}}</p>
      <p>childCom1的$attrs:{{$attrs}}</p>
      <child-com2 v-bind="$attrs"></child-com2>
    </div>
</template>

<script>
  import childCom2 from './childCom2'
  export default {
    name: 'childCom1',
    components:{
      childCom2
    },
    inheritAttrs:false,
    props:{
      foo:String
    },
    created () {
      console.log('childCom1====',this.$attrs);
    }
  }
</script>

<style scoped>

</style>
