
<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(item, index) in arr" :key="index">
      <div class="box" v-if="item.flag">
        <div class="wap">
          <img :src=item.url alt="">
        </div>
      </div>
      <img v-else :src=item.url alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
  import img1 from '../img/1.jpg'
  import img2 from '../img/2.jpg'
  import img3 from '../img/3.jpg'
  import img4 from '../img/4.jpg'
  import img5 from '../img/5.jpg'

  export default {
    name: 'swiperTest',
    components: {
      Swiper,
      SwiperSlide
    },
    data () {
      return {
        swiperOptions: {
          loop: true,
          autoplay: {
            // 触碰后不会停止继续播放
          disableOnInteraction: false
          // delay: 15000
          },
          pagination: {
            el: '.swiper-pagination',
          },
          // Some Swiper option/callback...
        },
        arr: [{url: img1, flag: false}, {url: img2, flag: false}, {url: img3, flag: true}, {url: img4, flag: false},
          {url: img5, flag: false}]
      }
    },
    mounted() {
      // this.swiper.slideTo(3, 1000, false)
    }
  }
</script>

<style scoped lang="less">
  .box{
    position: absolute;
    left: 0;
    top: 0;
    height: 324px;
    .wrap{
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
    }
  }

</style>
