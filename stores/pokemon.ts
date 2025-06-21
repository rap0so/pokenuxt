import { defineStore } from 'pinia'
import type { PokemonDetailResponse, PokemonResponse } from '~/types/api/response.type'
import transformDetailIntoOwn from '~/utils/transformDetailIntoOwn'
import buildImageUrl from '~/utils/buildImageUrl'
import type { OwnPokemon } from '~/types/pokemon.types'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pages: {} as Record<number, OwnPokemon[]>,
    pokemons: {} as Record<string, OwnPokemon>,
  }),
  actions: {
    async getPokemonStored(name: string) {
      if (!name) {
        return []
      }

      const foundOnPages = Object.values(this.pages)
        .flatMap(page => page)
        .filter(pokemon => pokemon.name.includes(name))

      if (foundOnPages.length) {
        return foundOnPages
      }

      const foundOnSingles = Object.values(this.pokemons)
        .filter(pokemon => pokemon.name.includes(name))

      if (foundOnSingles.length) {
        return foundOnSingles
      }

      const fetchedPokemon = await this.getOrFetchPokemon(name, String(useRuntimeConfig().public.apiBaseUrl))

      if (fetchedPokemon) {
        return [fetchedPokemon]
      }

      return []
    },
    async getOrFetchPage(offset: number, limit = 20) {
      if (this.pages[offset]) {
        return this.pages[offset]
      }

      const apiUrl = String(useRuntimeConfig().public.apiBaseUrl)
      // In this case, we are using $fetch because we don't need the additional features of useFetch. We are only fetching and storing the data
      const data = await $fetch<PokemonResponse>(`${apiUrl}/pokemon?offset=${offset}&limit=${limit}`)

      const list: OwnPokemon[] = data.results.map(pokemon =>
        ({
          ...pokemon,
          spriteUrl: buildImageUrl(pokemon.url),
        }),
      )

      this.pages[offset] = list

      return list
    },
    async getOrFetchPokemon(name: string, apiBaseUrl: string) {
      if (!name) {
        return
      }

      if (this.pokemons[name]) {
        return this.pokemons[name]
      }

      const data = await $fetch<PokemonDetailResponse>(`${apiBaseUrl}/pokemon/${name}`)

      const transformedPokemon = transformDetailIntoOwn(data, apiBaseUrl)

      this.pokemons[name] = transformedPokemon

      return transformedPokemon
    },
  },
  persist: true,
})
