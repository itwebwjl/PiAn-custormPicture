// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store';
import './assets/style/common.css'
import './assets/js/move-phone'
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/style/iconfont/iconfont.css';
import '@/mock/index.js'
import '@/utils/index.js'
Vue.use(Vant)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
