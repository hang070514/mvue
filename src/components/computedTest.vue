
<template>
  <div class="test">
    <div>
      msg: {{msg}}
    </div>
    <div>
      reverseMsg: {{reverseMsg}}
    </div>
    <div>
      date.now:{{dataTime}}
    </div>
    <div>
      computedNow: {{now}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'computedTest',
    data() {
      return {
        msg: 'hello',
        dataTime: ''
      }
    },
    computed: {
      reverseMsg () {
        return this.msg.split('').reverse().join('')
      },
      now() {
        return Date.now()
      }
    }
  }
</script>

<style scoped>

</style>
