import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: resolve => require.ensure([], () => resolve(require('../views/admin/layout')),'admin-layout'),
      children: [
        {
          path: '/home',
          component: resolve => require.ensure([], () => resolve(require('../views/admin/home')),'admin-home')
        },{
          path: '/setting',
          component: resolve => require.ensure([], () => resolve(require('../views/admin/setting')),'admin-setting')
        }
      ]
    }, {
      path: '/login',
      component: resolve => require.ensure([], () => resolve(require('../views/admin/login')),'admin-login')
    }
  ]
})
