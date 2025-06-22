import type { StoreKeys } from '~/types/store.types'

export const useSearchPokemon = (name: string, specificPage?: StoreKeys) => {
  const { store, apiBaseUrl } = usePokemonApiContext()

  return store.getOrSearchPokemon(name, apiBaseUrl, specificPage)
}
