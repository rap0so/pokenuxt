import { useLazyAsyncData } from '#app'

export const useSearchPokemon = (name: string) => {
  const { store, apiBaseUrl } = usePokemonApiContext()

  return useLazyAsyncData(`pokemons-search-${name}`, () =>
    store.getOrSearchPokemon(name, apiBaseUrl),
  )
}
