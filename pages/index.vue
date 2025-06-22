<template>
  <main class="p-4">
    <div class="flex items-center justify-between">
      <h1 class="text-4xl font-extrabold mb-6 text-purple-400 dark:text-purple-500 ">
        PokéNuxt
      </h1>
    </div>

    <div class="flex gap-3">
      <PokemonSearch
        v-model:name-search="nameSearch"
      />

      <PokemonFilters
        v-model:selected-type="selectedType"
      />
    </div>

    <ul
      v-if="pending"
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
    >
      <SkeletonCard
        v-for="i in 8"
        :key="i"
      />
    </ul>
    <div v-else-if="error">
      <BaseError :label="error" />
    </div>
    <ul
      v-else
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
    >
      <PokemonCard
        v-for="pokemon in pokemonList"
        :key="pokemon.name"
        :name="pokemon.name"
        :sprite-url="pokemon.spriteUrl"
      />
    </ul>

    <nav
      v-if="showPaginationControls"
      class="flex justify-center gap-4 mt-8"
      aria-label="Pagination"
    >
      <BaseButton
        :disabled="pending || page === 1"
        @click="prevPage"
      >
        Previous
      </BaseButton>
      <BaseButton
        :disabled="pending"
        @click="nextPage"
      >
        Next
      </BaseButton>
    </nav>
  </main>
</template>

<script setup lang="ts">
import { usePagination } from '~/composables/usePagination'
import { usePokemons } from '~/composables/usePokemons'
import { useSearchPokemon } from '~/composables/useSearchPokemon'
import { usePokemonsByType } from '~/composables/usePokemonsByType'
import PokemonFilters from '~/components/PokemonFilters.vue'
import PokemonCard from '~/components/PokemonCard.vue'
import SkeletonCard from '~/components/SkeletonCard.vue'
import PokemonSearch from '~/components/PokemonSearch.vue'
import BaseButton from '~/components/BaseButton.vue'
import type { OwnPokemon } from '~/types/pokemon.types'
import type { PokemonTypes } from '~/types/api/response.type'

const showPaginationControls = ref(true)
const error = ref('')
const nameSearch = ref('')
const selectedType = ref<PokemonTypes>({
  name: '',
  url: '',
})

const { offset, pageSize, nextPage, prevPage, page } = usePagination(0, 20)

const { data: rawResult, pending } = usePokemons(offset, pageSize)

const pokemonList = ref<OwnPokemon[]>([])

watchEffect(async () => {
  const isFilterMode = selectedType.value.name
  const isSearchMode = nameSearch.value
  error.value = ''
  showPaginationControls.value = true

  if (isFilterMode) {
    const pokemonsByType = await usePokemonsByType(selectedType)
    pokemonList.value = pokemonsByType
  }
  else {
    pokemonList.value = rawResult.value || []
  }

  if (isSearchMode) {
    const specific = isFilterMode ? 'pokemonType' : undefined
    const foundPokemon = await useSearchPokemon(nameSearch.value, specific)
    pokemonList.value = foundPokemon
  }

  if (error.value || pending.value || isFilterMode || isSearchMode) {
    showPaginationControls.value = false
  }
})

watch(pokemonList, () => {
  const listIsEmpty = !pokemonList.value?.length
  if (listIsEmpty && !selectedType.value.name) {
    error.value = 'Something went wrong. Try again soon.'
  }
})
</script>
