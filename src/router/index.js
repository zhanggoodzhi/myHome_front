import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/home/index.vue';
import Note from '../views/note/index.vue';
import Game from '../views/game/index.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/note',
      component: Note
    },
    {
      path: '/game',
      component: Game
    },
  ]
})
