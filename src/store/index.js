import Vue from 'vue';
import Vuex from 'vuex';

import users from '@/store/modules/users';
import filters from '@/store/modules/filters';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    users,
    filters
  }
})
