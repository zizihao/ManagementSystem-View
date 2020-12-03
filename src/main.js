import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugin/element'
import axios from 'axios'

Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://127.0.0.1:3000'

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
