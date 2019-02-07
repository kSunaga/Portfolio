import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './components/router/router.js'
import index from './components/templates/index.vue'

import Bootstrap from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Bootstrap);
Vue.use(VueRouter);

Vue.config.productionTip = false

var router = new VueRouter({
  routes: routes
});

new Vue({
  router,
  render: h => h(index),
}).$mount('#app')
