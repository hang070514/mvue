<template>
  <div class="vuxTest">
    <p>
      <span @click="click1">Alert</span>
    </p>
    <p>
      <span @click="click2">Confrim</span>
    </p>
    <p>
      <span @click="click3">以插件形式调用Confrim</span>
    </p>
    <p>
      <span @click="click4">Toast</span>
    </p>
    <confirm
             v-model="showConfirm"
             title="提示"
             confirm-text="去看看"
             :show-cancel-button="false"
             @on-cancel="onCancel"
             @on-confirm="onConfirm"
             @on-show="onShow"
             @on-hide="onHide">
      <p style="text-align:center;">{{ tip }}</p>
    </confirm>
    <div class="geng">
      <span>更换</span>
      <selector  class="mSelector"  placeholder="请选择"  :options="list" v-model="defaultValue" direction="rtl" @on-change="onChange"></selector>
    </div>

  </div>
</template>

<script>
  import { Confirm, Selector } from 'vux'
  export default {
    name: 'vuxTest',
    components: {
       Confirm,
       Selector
    },
    data() {
      return {
        showConfirm: false,
        tip: '我是提示内容',
        list: [{
          key: 0,
          value: "军人身份"
        },{
          key: 1,
          value: "汪瓅韎"
        }]
      }
    },
    methods: {
      click1() {
        this.$vux.alert.show({
          title: '提示',
          content: '我是Alert弹框',
          onShow () {
            console.log('Plugin: I\'m showing')
          },
          onHide () {
            console.log('Plugin: I\'m hiding')
          }
        })
      },
      click2() {
        this.showConfirm = true
      },
      click3() {
        this.$vux.confirm.show({
          title: '提示',
          content: '我是confirm弹框',
          confirmText: '去看看',
          // 组件除show外的属性
          onCancel () {
          },
          onConfirm () {}
        })
      },
      click4() {
        this.$vux.toast.show({
          type: 'warn',
          isShowMask: true,
          // position: 'middle',
          text: '我是toast'
        })
      },
      onCancel() {
        console.log('onCancel')
      },
      onConfirm() {
        console.log('onConfirm')
      },
      onHide () {
        console.log('on hide')
      },
      onShow () {
        console.log('on show')
      },
      onChange(value) {
        console.log('value====', value)
      }
    }
  }
</script>

<style scoped>
  .geng{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 60px;
  }
  .mSelector{
    position: absolute;
    opacity: 0;
  }
</style>
