<template>
    <div id="app">
        <User ref="user"></User>
    </div>
</template>

<script>
  import User from './user'
  export default {
    name: 'parent',
    components:{
      User
    },
    mounted () {
      let ref = this.$refs.user;
      console.log(ref);
      ref.sayHello();
    }
  }
</script>

<style scoped>

</style>
