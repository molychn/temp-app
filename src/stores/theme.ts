import { defineStore } from 'pinia'

export const useTheme = defineStore('theme', {
  state: () => {
    return {
      value: 'light'
    }
  },
  actions: {
    toggleTheme() {
      this.value = this.value === 'light' ? 'dark' : 'light'
    }
  }
})
