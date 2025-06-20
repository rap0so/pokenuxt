import { defineStore } from 'pinia'
import type { UsePokemonDetailResponse, UsePokemonResponse } from '~/types/api/response.type'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pages: {} as Record<number, UsePokemonResponse>,
    pokemons: {} as Record<string, UsePokemonDetailResponse>,
  }),
  actions: {
    async getOrFetchPage(offset: number, limit = 20, apiBaseUrl: string) {
      if (this.pages[offset]) {
        return this.pages[offset]
      }

      // In this case, we are using $fetch because we don't need the additional features of useFetch. We are only fetching and storing the data
      const data = await $fetch<UsePokemonResponse>(`${apiBaseUrl}/pokemon?offset=${offset}&limit=${limit}`)

      this.pages[offset] = data
      return data
    },
    async getOrFetchPokemon(name: string, apiBaseUrl: string) {
      if (!name) {
        return
      }

      if (this.pokemons[name]) {
        return this.pokemons[name]
      }

      const data = await $fetch<UsePokemonDetailResponse>(`${apiBaseUrl}/pokemon/${name}`)

      this.pokemons[name] = data

      return data
    },
  },
  persist: true,
})
