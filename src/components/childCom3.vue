<template>
    <div>
      <p>childCom3 {{$attrs}}</p>
    </div>
</template>

<script>
  export default {
    name: 'childCom3',
    props:{
      coo:String,
      title:String
    }
  }
</script>

<style scoped>

</style>
