<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 @click="jump('/computed')">hello world</h2>
    <h2 @click="jump('/index')">插槽demo</h2>
    <h2 @click="jump('/vuxTest')">vux测试</h2>
    <h2 @click="jump('/MarqueeTest')">Marquee测试</h2>
    <h2 @click="jump('/classTest')">动态绑定class</h2>
    <h2 @click="jump('/eventTest')">冒泡/捕获事件</h2>
    <h2 @click="jump('/swiperTest')">swiper轮播图</h2>
    <h2 @click="jump('/scrollTest')">超出宽度出现横向滚动条</h2>
    <!--<router-link :to="{name:'computed',params:{username:'zhang',id:'1234'}}">hello world</router-link>-->
    <router-link :to="{name:'computed',query:{username:'zhangq',id:'12345'}}">hello world</router-link>
    <router-link :to="{name:'parent'}">parent</router-link>
    <router-link :to="{name:'index1'}">index1</router-link>
    <span>Alert测试</span>

  </div>
</template>

<script>
  import Vue from 'vue'
  import VueQr from 'vue-qr'
  import axios from 'axios'
  import apiConfig from '../../config/api.config'
  Vue.prototype.$axios = axios
 // axios.defaults.baseURL = '/api'
export default {
  name: 'HelloWorld',
  components:{
    VueQr
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      config:''
    }
  },
  created (){
    this.config = apiConfig.baseUrl;
    console.log('this.config=====',this.config);
    axios.post(this.config,
      {
        location:"39.88669,116.64201",
        /*换成自己申请的key*/
        key:"VP2BZ-SFZCX-NMW4B-7L5GQ-PPNX5-2XBWN",
        get_poi:0
      }).then((res)=>{
      console.log('res====',res);
    }).catch((err)=>{
      console.log('err====',err);
    })

    let str = 'asd';
    console.log(str);

    let p = new Promise(function(resolve,reject){
      setTimeout(function(){
        let num = Math.random();
        if(num > 0.5){
          resolve(num)
        }else{
          reject(num)
        }
      },1000)
    })

    p.then(function(num){
      console.log('大于0.5的数',num);
    },function(num){
      console.log('小于等于0.5的数',num)
    })
  },
  methods:{
    jump(path){
      this.$router.push(path);
    },
    test(dataUrl,id){
      console.log(url, id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
