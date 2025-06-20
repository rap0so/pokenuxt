import { computed, ref } from 'vue'
import { usePokemons } from './usePokemons'
import type { Filters } from '~/types/useFilteredPokemon.types'
import type { UsePokemonResponseTypes } from '~/types/api/response.type'

export function useFilteredPokemons(offset = 0, limit = 20) {
  const { data: rawResult, pending, error } = usePokemons(offset, limit)

  const filters = ref<Filters>({ name: '', types: [] })

  // computed is the same as useMemo
  const filteredPokemons = computed(() => {
    const list = rawResult.value?.results.map(p => ({
      ...p,
      spriteUrl: `${String(useRuntimeConfig().public.apiBaseUrl)}/sprites/pokemon/${p.name}.png`,
    })) || []

    return list.filter((pokemon) => {
      const filterName = filters.value.name.toLowerCase()
      const byName = pokemon.name.toLowerCase().includes(filterName)

      const filterTypes = filters.value.types

      const byType = filterByType(filterTypes, pokemon.types)

      return byName && byType
    })
  })

  // return everything
  return {
    filteredPokemons,
    pending,
    error,
    filters,
    // expose pagination controls, too
    nextPage: () => { offset += limit },
    prevPage: () => { if (offset >= limit) offset -= limit },
  }
}

const filterByType = (filterTypes: string[], pokemonTypes: UsePokemonResponseTypes[]) => {
  const noFilter = !filterTypes.length

  return noFilter
    || filterTypes.some(filterType =>
      pokemonTypes?.some(({ type }) => type.name === filterType),
    )
}
