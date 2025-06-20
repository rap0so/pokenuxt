import { computed, ref } from 'vue'
import type { Filters } from '~/types/useFilteredPokemon.types'
import type { UsePokemonResponse, UsePokemonResponseTypes } from '~/types/api/response.type'

export function useFilteredPokemons(rawResult: Ref<UsePokemonResponse | null>) {
  const filters = ref<Filters>({ name: '', types: [] })

  // This computed is the same thing as a useMemo
  const filteredPokemons = computed(() => {
    const list = rawResult.value?.results.map(pokemon => ({
      ...pokemon,
      spriteUrl: buildImageUrl(pokemon.url),
    })) || []

    return list.filter((pokemon) => {
      const filterName = filters.value.name.toLowerCase()
      const byName = pokemon.name.toLowerCase().includes(filterName)
      const byType = filterByType(filters.value.types, pokemon.types)
      return byName && byType
    })
  })

  return {
    filteredPokemons,
    filters,
  }
}

const filterByType = (filterTypes: string[], pokemonTypes: UsePokemonResponseTypes[]) => {
  const noFilter = !filterTypes.length

  return noFilter
    || filterTypes.some(filterType =>
      pokemonTypes?.some(({ type }) => type.name === filterType),
    )
}

const buildImageUrl = (pokemonUrl: string, use3D = false) => {
  const id = pokemonUrl.match('/pokemon/([0-9]+)/')?.[1]
  const threeDUrl = use3D ? '/other/home/' : ''
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${threeDUrl}/${id}.png`
}
