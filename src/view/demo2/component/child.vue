
<template>
  <div class="child" @click="cli">
    点击
  </div>
</template>

<script>
  export default {
    name: 'child',
    data() {
      return {
        msg: 'haha'
      }
    },
    created() {

    },
    methods: {
      cli() {
        this.$emit('handle',this.msg)
      }
    }
  }
</script>

<style scoped>

</style>
