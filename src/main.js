import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugin/element'
import axios from './util/request'
import components from './components'

Vue.prototype.$axios = axios
Vue.use(components)
Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
