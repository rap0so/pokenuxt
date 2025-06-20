<template>
  <main class="p-4">
    <h1 class="text-3xl font-extrabold mb-6 text-purple-700">
      PokéNuxt
    </h1>

    <PokemonFilters
      v-model:filters="filters"
      v-model:name="filters.name"
      v-model:type="filters.types"
    />

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
        v-for="pokemon in filteredPokemons"
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
import { useFilteredPokemons } from '~/composables/useFilteredPokemons'
import { usePagination } from '~/composables/usePagination'
import PokemonFilters from '~/components/PokemonFilters.vue'
import PokemonCard from '~/components/PokemonCard.vue'

const { offset, pageSize, nextPage, prevPage, page } = usePagination(0, 20)

const { data: rawResult, pending, error } = usePokemons(offset, pageSize)

const { filteredPokemons, filters } = useFilteredPokemons(rawResult)
</script>
