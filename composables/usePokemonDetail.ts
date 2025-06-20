import { useRuntimeConfig } from '#app'

export const usePokemonDetail = (name: Ref<string>) => {
  const config = useRuntimeConfig()
  const apiBaseUrl = String(config?.public?.apiBaseUrl)
  const store = usePokemonStore()

  const key = () => `pokemons-${name.value}`

  return useAsyncData(key, () =>
    store.getOrFetchPokemon(name.value, apiBaseUrl),
  )
}
