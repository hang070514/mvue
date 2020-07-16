<template>
  <div class="test">
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide class="swiper-slide" v-for="(item,index) in slide" :key="index">
        我是第{{item}}个轮播图
      </swiper-slide>
     <!-- <div class="swiper-pagination"  slot="pagination"></div> -->  <!-- 分页 -->
      <!--<div class="swiper-button-prev" slot="button-prev"></div>  &lt;!&ndash; 箭头左 &ndash;&gt;
      <div class="swiper-button-next" slot="button-next"></div>  &lt;!&ndash; 箭头右 &ndash;&gt;-->
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'  //引入vue-awesome-swiper
  import 'swiper/css/swiper.css'  //引入样式
  export default {
    name: 'test',
    components: {
      Swiper,
      SwiperSlide
    },
    data(){
      return {
        slide: [1, 2, 3, 4, 5],
        swiperOption: {
          direction: "vertical",
          //显示分页
          pagination: {
            el: '.swiper-pagination',
            clickable: true //允许分页点击跳转
          },
          //设置点击箭头
          navigation: {
            //nextEl: '.swiper-button-next',
            //prevEl: '.swiper-button-prev'
          },
          //自动轮播
          autoplay: {
             delay: 2000
          },
          //开启循环模式
          // loop: true,
          //开启鼠标滚轮控制Swiper切换
          mousewheel: true
        }
      }
    }
  }
</script>

<style>
  .swiper{
    height: 100px;
  }
  .swiper-slide{
    height: 100px;
    line-height:100px;
  }
/*  .swiper-slide {
    width: 100%;
    height: 100px;
    line-height:100px;
    font-size: 50px;
    text-align: center;
    !*background-color: rosybrown;*!
  }*/
</style>
