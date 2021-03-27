
<template>
  <div class="father">
    显示子组件传过来的数据{{msg}}
    <child @handle="handle"></child>
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
        msg: ''
      }
    },
    methods: {
      handle(message) {
        this.msg = message
      }
    }
  }
</script>

<style scoped>

</style>
