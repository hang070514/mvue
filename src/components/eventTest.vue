<template>
  <div class="eventTest">
    <div class="parent" @click.capture.stop="parentClick">
      <div class="child" @click="childClick"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'eventTest',
  methods: {
    parentClick () {
      console.log('我是parent')
    },
    childClick () {
      console.log('我是child')
    }
  }
}
</script>

<style scoped>
  .parent{
    width: 300px;
    height: 300px;
    border: 1px solid red;
  }
  .child{
    width: 80px;
    height: 80px;
    border: 1px solid blue;
  }
</style>
