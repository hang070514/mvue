<template>
    <div class="main">
      <h3>哈哈哈</h3>
      <list :options="arr" @on-change="change"></list>
    </div>
</template>

<script>
  import list from './component/mCheckList'
  export default {
    name: 'index',
    components: {
      list
    },
    data() {
      return {
        arr: [
           {
             image: '',
             name: '百万身价B款',
             sale: 23900,
             isCheck: false
           },
           {
             image: '',
             name: '幸福人生',
             sale: 13458,
             isCheck: false
           },
          {
            image: '',
            name: '少儿无忧2019',
            sale: 23566,
            isCheck: false
          },
          {
            image: '',
            name: '金色童年',
            sale: 10478,
            isCheck: false
          }
         ]
      }
    },
    methods: {
      change() {

      }
    }
  }
</script>

<style scoped lang="less">

</style>
