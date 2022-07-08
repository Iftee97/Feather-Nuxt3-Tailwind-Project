import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      showHiddenSidebar: false,
    }
  },

  actions: {
    toggleHiddenSidebar() {
      this.showHiddenSidebar = !this.showHiddenSidebar
    }
  }
})
