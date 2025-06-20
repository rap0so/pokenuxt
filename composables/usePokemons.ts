import type { Ref } from 'vue'
import { useAsyncData, useRuntimeConfig } from '#app'
import { usePokemonStore } from '~/stores/pokemon'

export const usePokemons = (offset: Ref<number>, limit = 20) => {
  const config = useRuntimeConfig()
  const apiBaseUrl = String(config.public.apiBaseUrl)
  const store = usePokemonStore()

  const key = () => `pokemons-${offset.value}-${limit}`

  // useAsyncData lets us provide a custom async loader (in our case the Pinia store 🍍)
  return useAsyncData(key, () =>
    store.getOrFetchPage(offset.value, limit, apiBaseUrl),
  )
}
