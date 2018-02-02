// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Admin from './views/Admin';
import ElementUI from 'element-ui';
import 'animate.css/animate.min.css';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/admin';
import VueResource from 'vue-resource';
import store from './store/admin'
import 'babel-polyfill';
import {
  getAuthData
} from 'components/utils';

var a=ceshi(1,2);
Vue.use(ElementUI)
Vue.use(VueResource);

Vue.config.productionTip = false;
Vue
  .http
  .interceptors
  .push(function (request, next) {
    request
      .headers
      .set('Authorization', getAuthData() && getAuthData().token);
    // continue to next interceptor
    next(function (response) {
      if (response.status === 403) {
        console.log(response.body.message);
        this
          .$router
          .replace('/login');
      }
    });
  });
new Vue({
  el: '#app',
  router,
  // store,
  template: '<Admin/>',
  components: {
    Admin
  }
})
