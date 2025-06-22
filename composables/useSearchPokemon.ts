export const useSearchPokemon = (name: string) => {
  const { store, apiBaseUrl } = usePokemonApiContext()

  return store.getOrSearchPokemon(name, apiBaseUrl)
}
