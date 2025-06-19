import { useFetch, useRuntimeConfig } from '#app'

export const usePokemonDetail = (name: string) => {
  const config = useRuntimeConfig()
  const apiBaseUrl = String(config?.public?.apiBaseUrl)

  return useFetch(`${apiBaseUrl}/${name}`, {
    key: `pokemon-${name}`,
  })
}
