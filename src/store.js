import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sheet: null
  },
  mutations: {
    updateSheet(state, item) {
      state.sheet = item
    }
  },
  actions: {

  },
  getters: {
    sheetData: state => {
      return state.sheet
    }
  },
  plugins: [createPersistedState({
    storage: window.localStorage
  })]
})