import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/index/',
  routes: [{
    path: '/login',
    component: resolve => require.ensure([], () => resolve(require('../views/index/login')), 'login'),
    meta: '登录'
  }, {
    path: '/',
    redirect: '/home',
    component: resolve => require.ensure([], () => resolve(require('../views/index/layout')), 'layout'),
    children: [{
      path: '/home',
      component: resolve => require.ensure([], () => resolve(require('../views/index/home')), 'home'),
      meta: '首页'
    }, {
      path: '/note',
      component: resolve => require.ensure([], () => resolve(require('../views/index/note')), 'note'),
      meta: '留言'
    }, {
      path: '/game',
      component: resolve => require.ensure([], () => resolve(require('../views/index/game')), 'game'),
      meta: '游戏分享'
    }, {
      path: '/user',
      component: resolve => require.ensure([], () => resolve(require('../views/index/user')), 'user'),
      meta: '用户管理'
    }]
  }]
})
