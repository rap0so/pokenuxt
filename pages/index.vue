<template>
  <main class="p-4">
    <h1 class="text-2xl font-bold mb-4">
      PokéNuxt
    </h1>

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
      <li
        v-for="pokemon in pokemons?.results"
        :key="pokemon.name"
        class="p-2 border rounded"
      >
        {{ pokemon.name }}
      </li>
    </ul>

    <div class="flex gap-4 mt-6">
      <button
        class="bg-gray-800 text-white px-4 py-2 rounded disabled:opacity-50"
        :disabled="offset === 0"
        @click="prevPage"
      >
        Previous
      </button>
      <button
        class="bg-gray-800 text-white px-4 py-2 rounded"
        @click="nextPage"
      >
        Next
      </button>
    </div>
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

  console.log(data)
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
