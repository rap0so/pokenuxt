import { useLazyAsyncData } from '#app'

export const usePokemonsTypes = () => {
  const { store, apiBaseUrl } = usePokemonApiContext()

  return useLazyAsyncData('pokemons-types', () =>
    store.getOrFetchTypes(apiBaseUrl),
  {
    server: false,
  },
  )
}
