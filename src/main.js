import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './components/router/router.js'
import index from './components/templates/index.vue'
import VueCookies from 'vue-cookies'
import axios from 'axios'

import Bootstrap from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import titleLabel from './components/atoms/titleLabel.vue'
import primaryButton from './components/atoms/primary-button.vue'

Vue.use(Bootstrap);
Vue.use(VueRouter);
Vue.use(VueCookies);

Vue.config.productionTip = false;

Vue.component('title-label', titleLabel);
Vue.component('primary-button', primaryButton);

var router = new VueRouter({
  routes: routes
});

new Vue({
  router,
  render: h => h(index),
}).$mount('#app');

router.beforeEach((to, from, next) =>{
  if (to.matched.some(record => record.meta.requiresAuth)) {
    auth()
    if(!isKey()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath}
      })
    } else {
      next()
    }
  } else {
    next()
  }
});

function auth() {
  return axios.post('https://fierce-beyond-13003.herokuapp.com/api/v1/authenticate', {
    // eslint-disable-next-line
    user_id: $cookies.get('user_id'),
    // eslint-disable-next-line
    access_token: $cookies.get('access_token')
  }).then( () => {
    // eslint-disable-next-line
    $cookies.set('is_true', 'true');
  })
}

function isKey() {
  // eslint-disable-next-line
  return $cookies.isKey('is_true')
}


