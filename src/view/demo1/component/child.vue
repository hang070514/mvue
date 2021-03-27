
<template>
  <div class="child">
      显示父组件传递过来的数据：{{msg}}
  </div>
</template>

<script>
  export default {
    name: 'child',
    props: {
      msg: {
        type: String
      }
    }
  }
</script>

<style scoped>

</style>
