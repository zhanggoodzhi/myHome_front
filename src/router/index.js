import Vue from 'vue';
import Router from 'vue-router';
import Login from '../views/login/index.vue';
import Home from '../views/home/index.vue';
import Note from '../views/note/index.vue';
import Game from '../views/game/index.vue';
import Layout from '../views/layout/index.vue';
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/home',
          component: Home
        }, {
          path: '/note',
          component: Note
        }, {
          path: '/game',
          component: Game
        }
      ]
    }, {
      path: '/login',
      component: Login
    }
  ]
})
