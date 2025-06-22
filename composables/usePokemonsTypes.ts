export const usePokemonsTypes = () => {
  const { store, apiBaseUrl } = usePokemonApiContext()

  return store.getOrFetchTypes(apiBaseUrl)
}
