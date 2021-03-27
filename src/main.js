// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { AlertPlugin, ConfirmPlugin, ToastPlugin } from 'vux'

var echarts = require('echarts')
// var echarts = require('echarts')
Vue.prototype.$echarts = echarts

Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
