import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import computed from '@/components/computed'
import index from '@/components/index'
import todoItem from '@/components/todoItem'
import parent from '@/components/parent'
import user from '@/components/user'
import index1 from '@/components/index1'
import childCom1 from '@/components/childCom1'
import childCom2 from '@/components/childCom2'
import childCom3 from '@/components/childCom3'
import test from '@/components/test'
import vuxTest from '@/components/vuxTest'
import MarqueeTest from '@/components/MarqueeTest'
import classTest from '@/components/classTest'
import eventTest from '@/components/eventTest'
import swiperTest from '@/components/swiperTest'
import scrollTest from '@/components/scrollTest'
import watchTest from '@/components/watchTest'
import computedTest from '@/components/computedTest'
import father from '../view/demo1/father'
import father2 from '../view/demo2/father'
import list from '../view/demo3/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/computed',
      name: 'computed',
      component: computed
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/todoItem',
      name: 'todoItem',
      component: todoItem
    },
    {
      path: '/parent',
      name: 'parent',
      component: parent
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/index1',
      name: 'index1',
      component: index1
    },
    {
      path: '/childCom1',
      name: 'childCom1',
      component: childCom1
    },
    {
      path: '/childCom2',
      name: 'childCom2',
      component: childCom2
    },
    {
      path: '/childCom3',
      name: 'childCom3',
      component: childCom3
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/vuxTest',
      name: 'vuxTest',
      component: vuxTest
    },
    {
      path: '/MarqueeTest',
      name: 'MarqueeTest',
      component: MarqueeTest
    },
    {
      path: '/classTest',
      name: 'classTest',
      component: classTest
    },
    {
      path: '/eventTest',
      name: 'eventTest',
      component: eventTest
    },
    {
      path: '/swiperTest',
      name: 'swiperTest',
      component: swiperTest
    },
    {
      path: '/scrollTest',
      name: 'scrollTest',
      component: scrollTest
    },
    {
      path: '/watchTest',
      name: 'watchTest',
      component: watchTest
    },
    {
      path: '/computedTest',
      name: 'computedTest',
      component: computedTest
    },
    {
      path: '/father',
      name: 'father',
      component: father
    },
    {
      path: '/father2',
      name: 'father2',
      component: father2
    },
    {
      path: '/list',
      name: 'list',
      component: list
    }
  ]
})
