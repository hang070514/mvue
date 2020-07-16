<template>
    <div>
      <h2>$attrs/$listeners</h2>
      <child-com1
        :foo="foo"
        :boo="boo"
        :coo="coo"
        :doo="doo"
        title="前端"
      ></child-com1>
    </div>
</template>

<script>
  import childCom1 from './childCom1'
  export default {
    name: '',
    components:{ childCom1 },
    data () {
      return {
        foo:'js',
        boo:'html',
        coo:'css',
        doo:'cue'
      }
    },
    created () {
      let a = {name:'zhang',age:30};
      let b = this.deepClone(a);
      let c = a;
      a.name = 'zhao';
      console.log(b);
      console.log(c);
    },
    methods: {
      deepClone(obj){
        let objClone = Array.isArray(obj) ? [] : {};
        if(obj && typeof obj === 'object'){
          for(let key in obj){
            if(obj[key] && typeof obj[key] == 'object'){
              objClone[key] = deepClone(obj[key]);
            }else{
              objClone[key] = obj[key];
            }
          }
        }
        return objClone;
      }
    }
  }
</script>

<style scoped>

</style>
