
<template>
  <div class="father">
    <child :msg="msg"></child>
  </div>
</template>

<script>
  import child from './component/child'
  export default {
    name: 'father',
    components: {
      child
    },
    data() {
      return {
        msg: 'hello'
      }
    }
  }
</script>

<style scoped>

</style>
