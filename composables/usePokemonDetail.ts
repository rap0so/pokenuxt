import { useFetch, useRuntimeConfig } from '#app'
import type { UsePokemonDetailResponse } from '~/types/api/response.type'

export const usePokemonDetail = (name: string) => {
  const config = useRuntimeConfig()
  const apiBaseUrl = String(config?.public?.apiBaseUrl)

  return useFetch<UsePokemonDetailResponse>(`${apiBaseUrl}/${name}`, {
    key: `pokemon-${name}`,
  })
}
