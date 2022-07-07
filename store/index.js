export const state = () => ({
  showHiddenSidebar: false
})

export const getters = {
  showHiddenSidebar(state) {
    return state.showHiddenSidebar
  }
}

export const mutations = {
  TOGGLE_HIDDEN_SIDEBAR(state) {
    state.showHiddenSidebar = !state.showHiddenSidebar
  },
}

export const actions = {
  toggleHiddenSidebar({ commit }) {
    commit('TOGGLE_HIDDEN_SIDEBAR')
  },
}
