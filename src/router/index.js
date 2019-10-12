import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/1",
      component: resolve => require(['../page/1.vue'], resolve)
    },
    {
      path: "/2",
      component: resolve => require(['../page/2.vue'], resolve)
    },
    {
      path: "/3",
      component: resolve => require(['../page/3/3.vue'], resolve)
    },
    {
      path: "/gudong",
      component: resolve => require(['../page/gudong.vue'], resolve)
    },
    {
      path: '/duiwaitouzi',
      component: resolve => require(['../page/duiwaitouzi.vue'], resolve)
    },
    {
      path: '/gongshangxinxi',
      component: resolve => require(['../page/gongshangxinxi.vue'], resolve)
    },
    {
      path: '/biangengxinxi',
      component: resolve => require(['../page/biangengxinxi.vue'], resolve)
    },
    {
      path: '/lishihezuo',
      component: resolve => require(['../page/lishihezuo.vue'], resolve)
    }
  ]
})
