import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    dark: false,
  }),
  actions: {
    toggle() {
      this.dark = !this.dark
      const root = document.documentElement
      if (this.dark) {
        root.classList.add('dark')
      }
      else {
        root.classList.remove('dark')
      }
    },
    init() {
      const root = document.documentElement
      if (this.dark) {
        root.classList.add('dark')
      }
    },
  },
  persist: true,
})
