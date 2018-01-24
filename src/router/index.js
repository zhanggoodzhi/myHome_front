import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: resolve => require.ensure([], () => resolve(require('../views/layout')),'layout'),
      children: [
        {
          path: '/home',
          component: resolve => require.ensure([], () => resolve(require('../views/home')),'home')
        }, {
          path: '/note',
          component: resolve => require.ensure([], () => resolve(require('../views/note')),'note')
        }, {
          path: '/game',
          component: resolve => require.ensure([], () => resolve(require('../views/game')),'game')
        }, {
          path: '/user',
          component: resolve => require.ensure([], () => resolve(require('../views/user')),'user')
        }
      ]
    }, {
      path: '/login',
      component: resolve => require.ensure([], () => resolve(require('../views/login')),'login')
    }
  ]
})
