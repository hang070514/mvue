<template>
    <div>
      <p>boo:{{boo}}</p>
      <p>childCom2 {{$attrs}}</p>
      <child-com3 v-bind="$attrs"></child-com3>
    </div>
</template>

<script>
  import childCom3 from './childCom3'
  export default {
    name: 'childCom2',
    components:{
      childCom3
    },
    inheritAttrs:true,
    props:{
      boo:String
    },
    created(){
      console.log('childCom2====',this.$attrs);
    }
  }
</script>

<style scoped>

</style>
