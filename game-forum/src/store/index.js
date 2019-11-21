import Vue from 'vue'
import Vuex from 'vuex'

import common from './modules/common'

Vue.use(Vuex);

const state = {}
const actions = {}
const mutations = {}
const store = new Vuex.Store({
  modules: {
    common
  },
  actions,
  state,
  mutations,
})
export default store;
