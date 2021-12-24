import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
// import 'swiper/dist/css/swiper.css'
// import 'swiper/dist/css/swiper.css'
import App from './App'
import router from './router'
Vue.config.productionTip = false
Vue.use(ElementUI)
let options = {
  fullscreenEl: true
}
Vue.use(preview, options)
Vue.use(preview)
// Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
