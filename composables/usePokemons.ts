import type { Ref } from 'vue'
import { useAsyncData } from '#app'

export const usePokemons = (offset: Ref<number>, limit = 20) => {
  const { store, apiBaseUrl } = usePokemonApiContext()

  // useAsyncData lets us provide a custom async loader (in our case the Pinia store 🍍)
  return useAsyncData(`pokemons-${offset.value}-${limit}`, () =>
    store.getOrFetchPage(offset.value, limit, apiBaseUrl),
  { watch: [offset] },
  )
}
