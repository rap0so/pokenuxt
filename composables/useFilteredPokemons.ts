import { computed } from 'vue'
import type { Filters } from '~/types/useFilteredPokemon.types'
import type { PokemonResponse, PokemonResponseTypes } from '~/types/api/response.type'

export function useFilteredPokemons(rawResult: Ref<PokemonResponse | null>, filters: Ref<Filters>) {
  // This computed is the same thing as a useMemo
  const filteredPokemons = computed(() => {
    const rawList = rawResult.value?.results

    const list = rawList?.map(pokemon => ({
      ...pokemon,
      spriteUrl: buildImageUrl(pokemon.url),
    })) || []

    return list.filter((pokemon) => {
      const byType = filterByType(filters.value.types, pokemon.types)
      return byType
    })
  })

  return filteredPokemons
}

const filterByType = (filterTypes: string[], pokemonTypes: PokemonResponseTypes[]) => {
  const noFilter = !filterTypes.length

  return noFilter
    || filterTypes.some(filterType =>
      pokemonTypes?.some(({ type }) => type.name === filterType),
    )
}
