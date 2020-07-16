<template>
    <div>
      <li class="item">
        <input type="checkbox" v-model="checked">
        <slot name="item" :checked="checked"></slot>
      </li>
    </div>
</template>

<script>
  export default {
    name: 'todoItem',
    data(){
      return{
        checked:false
      }
    }
  }
</script>

<style scoped>

</style>
