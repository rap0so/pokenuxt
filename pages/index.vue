<template>
  <main class="p-4">
    <h1 class="text-3xl font-extrabold mb-6 text-purple-700">
      PokéNuxt
    </h1>

    <div class="flex gap-3">
      <PokemonSearch
        v-model:name-search="nameSearch"
      />

      <PokemonFilters
        v-model:selected-type="selectedType"
      />
    </div>

    <div v-if="pending">
      Loading page {{ page }}
    </div>
    <div v-else-if="error">
      Failed to load Pokémons
    </div>
    <ul
      v-else
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
    >
      <PokemonCard
        v-for="pokemon in pokemonList"
        :key="pokemon.name"
        :name="pokemon.name"
      >
        <template #sprite>
          <img
            :src="pokemon.spriteUrl"
            :alt="`${pokemon.name} sprite`"
            class="w-full h-full object-contain"
          >
        </template>
      </PokemonCard>
    </ul>

    <nav
      v-if="paginatedMode"
      class="flex justify-center gap-4 mt-8"
      aria-label="Pagination"
    >
      <button
        class="bg-purple-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
        :disabled="pending || page === 1"
        @click="prevPage"
      >
        Previous
      </button>
      <button
        class="bg-purple-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
        :disabled="pending"
        @click="nextPage"
      >
        Next
      </button>
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
import PokemonSearch from '~/components/PokemonSearch.vue'
import type { OwnPokemon } from '~/types/pokemon.types'
import type { PokemonTypes } from '~/types/api/response.type'

const paginatedMode = ref(false)
const notFound = ref(false)
const error = ref(false)
const nameSearch = ref('')
const selectedType = ref<PokemonTypes>({
  name: '',
  url: '',
})

const { offset, pageSize, nextPage, prevPage, page } = usePagination(0, 20)

const { data: rawResult, pending, error: responseError } = usePokemons(offset, pageSize)
if (responseError.value) {
  error.value = true
}

const pokemonList = ref<OwnPokemon[]>([])

watchEffect(async () => {
  paginatedMode.value = false

  if (nameSearch.value) {
    const foundPokemon = await useSearchPokemon(nameSearch.value)
    if (!foundPokemon) {
      notFound.value = true
      return
    }
    pokemonList.value = foundPokemon
  }
  else if (selectedType.value.name) {
    const pokemonsByType = usePokemonsByType(selectedType)
    if (!pokemonsByType.data.value) {
      // TODO: trigger toast
      return
    }
    pokemonList.value = pokemonsByType.data.value
  }
  else {
    paginatedMode.value = true
    pokemonList.value = rawResult.value || []
  }
})
</script>
