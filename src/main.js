import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugin/element'
import axios from './util/request'
import components from './components'

// 动画库
import animate from 'animate.css'
Vue.use(animate)

Vue.prototype.$axios = axios

// 公共组件库
Vue.use(components)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
