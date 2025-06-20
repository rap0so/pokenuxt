import { defineStore } from 'pinia'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pages: {} as Record<number, unknown>,
  }),
  actions: {
    async getOrFetchPage(offset: number, limit = 20, apiBaseUrl: string) {
      if (this.pages[offset]) {
        return this.pages[offset]
      }

      // In this case, we are using $fetch because we don't need the additional features of useFetch. We are only fetching and storing the data
      const data = await $fetch(`${apiBaseUrl}/pokemon?offset=${offset}&limit=${limit}`)

      this.pages[offset] = data
      return data
    },
  },
  persist: true,
})
