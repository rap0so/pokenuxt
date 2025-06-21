import { useRuntimeConfig } from '#app'
import { usePokemonStore } from '~/stores/pokemon'

export const usePokemonApiContext = () => {
  const config = useRuntimeConfig()
  const apiBaseUrl = String(config.public.apiBaseUrl)
  const store = usePokemonStore()

  return { apiBaseUrl, store }
}
