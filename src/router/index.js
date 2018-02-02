import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: '/index/',
  routes: [{
    path: '/login',
    component: resolve => require.ensure([], () => resolve(require('../views/index/login')), 'login')
  }, {
    path: '/',
    redirect: '/home',
    component: resolve => require.ensure([], () => resolve(require('../views/index/layout')), 'layout'),
    children: [{
      path: '/home',
      component: resolve => require.ensure([], () => resolve(require('../views/index/home')), 'home')
    }, {
      path: '/note',
      component: resolve => require.ensure([], () => resolve(require('../views/index/note')), 'note')
    }, {
      path: '/game',
      component: resolve => require.ensure([], () => resolve(require('../views/index/game')), 'game')
    }, {
      path: '/user',
      component: resolve => require.ensure([], () => resolve(require('../views/index/user')), 'user')
    }]
  }]
})
