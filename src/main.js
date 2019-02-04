import Vue from 'vue'
import index from './components/templates/index.vue'

import Bootstrap from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Bootstrap)

Vue.config.productionTip = false

new Vue({
  render: h => h(index),
}).$mount('#app')
