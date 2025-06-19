import { useFetch, useRuntimeConfig } from '#app'
import type { UsePokemonResponse } from '~/types/api/response.type'

export const usePokemons = (offset = 0, limit = 20) => {
  const config = useRuntimeConfig()
  const apiBaseUrl = String(config.public.apiBaseUrl)

  return useFetch<UsePokemonResponse>(`${apiBaseUrl}/pokemon?offset=${offset}&limit=${limit}`, {
    key: `pokemons-${offset}-${limit}`, // avoid cache conflicts
  })
}
