import { defineStore } from 'pinia'
import type { PokemonDetailResponse, PokemonResponse, PokemonsOnTypeResponse, PokemonTypes, PokemonTypesResponse } from '~/types/api/response.type'
import transformDetailIntoOwn from '~/utils/transformDetailIntoOwn'
import buildImageUrl from '~/utils/buildImageUrl'
import type { OwnPokemon } from '~/types/pokemon.types'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pages: {} as Record<number, OwnPokemon[]>,
    pokemons: {} as Record<string, OwnPokemon>,
    pokemonType: {} as Record<string, OwnPokemon[]>,
    types: [] as PokemonTypes[],
  }),
  actions: {
    async getOrSearchPokemon(name: string, apiBaseUrl: string) {
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

      const fetchedPokemon = await this.getOrFetchPokemon(name, apiBaseUrl)

      if (fetchedPokemon) {
        return [fetchedPokemon]
      }

      return []
    },
    async getOrFetchPage(offset: number, limit = 20, apiBaseUrl: string) {
      if (this.pages[offset]) {
        return this.pages[offset]
      }

      const { data } = await useFetch<PokemonResponse>(`${apiBaseUrl}/pokemon?offset=${offset}&limit=${limit}`)
      if (!data.value) {
        return []
      }

      const list: OwnPokemon[] = data.value.results.map(pokemon =>
        ({
          ...pokemon,
          spriteUrl: buildImageUrl(pokemon.url),
        }),
      )

      this.pages[offset] = list

      return list
    },
    async getOrFetchTypes(apiBaseUrl: string) {
      if (this.types.length) {
        return this.types
      }

      const { data } = await useFetch<PokemonTypesResponse>(`${apiBaseUrl}/type`, { key: 'pokemon-types', server: false })

      this.types = data.value?.results ?? []

      return this.types
    },
    async getOrFetchPokemonsByType(name: string, url: string, apiBaseUrl: string) {
      if (this.pokemonType[name]) {
        return this.pokemonType[name]
      }

      const { data } = await useFetch<PokemonsOnTypeResponse>(url)

      if (!data.value) {
        return []
      }

      this.pokemonType[name] = data.value.pokemon.map(pokemon => transformDetailIntoOwn(pokemon.pokemon, apiBaseUrl))

      return this.pokemonType[name]
    },
    async getOrFetchPokemon(name: string, apiBaseUrl: string) {
      if (!name) {
        return
      }

      if (this.pokemons[name]) {
        return this.pokemons[name]
      }

      const { data, error } = await useFetch<PokemonDetailResponse>(`${apiBaseUrl}/pokemon/${name}`, { key: `pokemon-${name}` })

      if (!data.value || error.value) {
        return
      }

      const transformedPokemon = transformDetailIntoOwn(data.value, apiBaseUrl)

      this.pokemons[name] = transformedPokemon

      return transformedPokemon
    },
  },
  persist: true,
})
