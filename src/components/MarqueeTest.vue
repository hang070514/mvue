<template>
  <div>
    <marqueeLeft :send-val='send'></marqueeLeft >
  </div>
</template>

<script>
    import marqueeLeft from './marquee'
    export default {
      name: 'MarqueeTest',
      components:{ marqueeLeft },
      data:function(){
        return{
          send:[{place: "来自东莞市的", name: "黄女士", url: 'https://www.baidu.com'},
            {place: "来自太原市的", name: "吴先生", url: 'https://zh.javascript.info/'},
            {place: "来自常州市的", name: "戚先生", url: 'https://blog.csdn.net/sinat_17775997/article/details/70224288'},
            {place: "来自金华市的", name: "尤先生", url: 'https://zh.javascript.info/'},
            {place: "来自贵阳市的", name: "陈女士", url: 'https://doc.vux.li/zh-CN/components/marquee.html'},
            {place: "来自长春市的", name: "魏女士", url: 'https://doc.vux.li/zh-CN/components/marquee.html'},
            {place: "来自泉州市的", name: "褚先生", url: 'http://www.1ketang.com/'},
            {place: "来自南昌市的", name: "蒋女士", url: 'https://doc.vux.li/zh-CN/components/marquee.html'},
            {place: "来自南京市的", name: "沈先生", url: 'http://www.dxzy163.com/'},
            {place: "来自天津市的", name: "韩先生", url: 'https://www.ruhe8.com/'},
            {place: "来自宁波市的", name: "邹女士", url: 'https://zhimap.com/'},
            {place: "来自嘉兴市的", name: "周女士", url: 'http://www.yuanxue365.com/'},
            {place: "来自长沙市的", name: "秦先生", url: 'http://www.1ketang.com/'},
            {place: "来自济南市的", name: "孙女士", url: 'http://www.dxzy163.com/'},
            {place: "来自杭州市的", name: "杨先生", url: 'https://www.baidu.com'}]
        }
      },
    }
</script>

<style scoped>

</style>
