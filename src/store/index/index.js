import Vue from 'vue'
import Vuex from 'vuex'
import noteBadge from './module/noteBadge'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  strict: debug,
  modules: {
    noteBadge
  }
})