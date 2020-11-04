// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'

import Vuesax from 'vuesax'
// import 'material-icons/iconfont/material-icons.css' //Material Icons
import 'vuesax/dist/vuesax.css'; // Vuesax
Vue.use(Vuesax)

import Axios from "axios";

Vue.prototype.$http = Axios;
Vue.prototype.$http.defaults.baseURL = "http://18.139.50.74:8080/";
Vue.prototype.$http.defaults.headers.post["Content-Type"] = "application/json";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
