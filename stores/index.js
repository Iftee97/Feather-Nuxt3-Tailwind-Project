// // this was supposed to work mby default, but nuxt3 no longer supports it
// export const state = () => ({
//   showHiddenSidebar: false
// })

// export const getters = {
//   showHiddenSidebar(state) {
//     return state.showHiddenSidebar
//   }
// }

// export const mutations = {
//   TOGGLE_HIDDEN_SIDEBAR(state) {
//     state.showHiddenSidebar = !state.showHiddenSidebar
//   },
// }

// export const actions = {
//   toggleHiddenSidebar({ commit }) {
//     commit('TOGGLE_HIDDEN_SIDEBAR')
//   },
// }


// // the older way of doing it
import { createStore } from "vuex"

const store = createStore({
  state: {
    showHiddenSidebar: false
  },

  getters: {
    showHiddenSidebar(state) {
      return state.showHiddenSidebar
    }
  },

  mutations: {
    TOGGLE_HIDDEN_SIDEBAR(state) {
      state.showHiddenSidebar = !state.showHiddenSidebar
    }
  },

  actions: {
    toggleHiddenSidebar({ commit }) {
      commit('TOGGLE_HIDDEN_SIDEBAR')
    }
  }
})

export default store
