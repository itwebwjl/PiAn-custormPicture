import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/1",
      component:resolve => require(['../page/1.vue'],resolve)
    },
    {
      path: "/2",
      component:resolve => require(['../page/2.vue'],resolve)
    }
  ]
})
