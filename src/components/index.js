import MainTitle from './MainTitle/index.vue'
import ImageUpload from './ImageUpload/index.vue'

const components = {
  install (Vue) {
    Vue.component('MainTitle', MainTitle)
    Vue.component('ImageUpload', ImageUpload)
  }
}

export default components
