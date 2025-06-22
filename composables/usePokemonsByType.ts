import type { PokemonTypes } from '~/types/api/response.type'

export const usePokemonsByType = (type: Ref<PokemonTypes>) => {
  const { store, apiBaseUrl } = usePokemonApiContext()

  const url = type.value.url
  const name = type.value.name

  return store.getOrFetchPokemonsByType(name, url, apiBaseUrl)
}
