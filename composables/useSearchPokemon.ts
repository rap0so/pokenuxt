export const useSearchPokemon = (name: string, searchByType?: string) => {
  const { store, apiBaseUrl } = usePokemonApiContext()

  return store.getOrSearchPokemon(name, apiBaseUrl, searchByType)
}
