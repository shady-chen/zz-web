// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

import mui from '../static/mui/js/mui.min.js'
import '../static/mui/css/mui.min.css'
import '../static/css/index.css'
import '../static/lib/css/layer.css'
import '../static/css/common.css'
import '../static/js/wapframwork.js'
import VueResource from 'vue-resource'

Vue.config.productionTip = true
Vue.prototype.mui = mui

Vue.use(VueResource)
Vue.http.interceptors.push(function (request, next) {
  request.credentials = true
  next()
})
Vue.http.options.emulateJSON = true
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    flag: true,
    asd: 1,
    basePath: '',
    myBasePath: '',
    count: 0,//红包个数
    expect: 20181212001,//红包期数
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
