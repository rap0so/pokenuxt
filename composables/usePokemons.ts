import { useFetch, useRuntimeConfig } from '#app'

export const usePokemons = (offset = 0, limit = 20) => {
  const config = useRuntimeConfig()
  const apiBaseUrl = String(config.public.apiBaseUrl)

  return useFetch(`${apiBaseUrl}/pokemon?offset=${offset}&limit=${limit}`, {
    key: `pokemons-${offset}-${limit}`, // avoid cache conflicts
  })
}
