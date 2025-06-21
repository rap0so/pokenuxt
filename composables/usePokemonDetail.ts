import type { Ref } from 'vue'
import { useAsyncData } from '#app'

export const usePokemonDetail = (name: Ref<string>) => {
  const { store, apiBaseUrl } = usePokemonApiContext()

  return useAsyncData(`pokemons-${name.value}`, () =>
    store.getOrFetchPokemon(name.value, apiBaseUrl),
  { watch: [name] },
  )
}
