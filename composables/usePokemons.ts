import { computed, type Ref } from 'vue'
import { useFetch, useRuntimeConfig } from '#app'
import type { UsePokemonResponse } from '~/types/api/response.type'

export const usePokemons = (offset: Ref<number>, limit = 20) => {
  const config = useRuntimeConfig()
  const apiBaseUrl = String(config.public.apiBaseUrl)

  // When the offset changes, the URL changes
  const url = computed(() => `${apiBaseUrl}/pokemon?offset=${offset.value}&limit=${limit}`)

  return useFetch<UsePokemonResponse>(url, {
    key: () => `pokemons-${offset.value}-${limit}`,
  })
}
