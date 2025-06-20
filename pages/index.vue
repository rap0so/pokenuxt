<template>
  <main class="p-4">
    <h1 class="text-3xl font-extrabold mb-6 text-purple-700">
      PokéNuxt
    </h1>

    <PokemonFilters :types="['potato']" />

    <div v-if="pending">
      Loading...
    </div>
    <div v-else-if="error">
      Failed to load Pokémons
    </div>
    <ul
      v-else
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
    >
      <PokemonCard
        v-for="{ name } in pokemons?.results"
        :key="name"
        :name="name"
      >
        <template #sprite>
          <!-- <img
            :src="pokemon.spriteUrl"
            :alt="`${pokemon.name} sprite`"
            class="w-full h-full object-contain"
          > -->
        </template>
      </PokemonCard>
    </ul>

    <nav
      class="flex justify-center gap-4 mt-8"
      aria-label="Pagination"
    >
      <button
        class="bg-purple-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
        :disabled="offset === 0"
        @click="prevPage"
      >
        Previous
      </button>
      <button
        class="bg-purple-500 text-white px-4 py-2 rounded-md"
        @click="nextPage"
      >
        Next
      </button>
    </nav>
  </main>
</template>

<script setup lang="ts">
import { usePokemons } from '~/composables/usePokemons'

const limit = 20
const offset = ref(0)

const { data: pokemons, pending, error } = usePokemons(offset.value, limit)

watch(offset, async () => {
  const { data, pending: p, error: e } = await usePokemons(offset.value, limit)

  pokemons.value = data.value
  pending.value = p.value
  error.value = e.value
})

function nextPage() {
  offset.value += limit
}

function prevPage() {
  if (offset.value >= limit) {
    offset.value -= limit
  }
}
</script>
