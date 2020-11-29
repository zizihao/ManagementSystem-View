import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugin/element'

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
