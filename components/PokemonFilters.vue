<template>
  <form
    v-if="!pending && !error"
    class="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6"
    @submit.prevent
  >
    <div class="flex flex-col">
      <label
        for="typeFilter"
        class="text-sm font-medium mb-1"
      >Filter by type</label>
      <select
        id="typeFilter"
        v-model="selectedType"
        class="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
        @change="handleTypeChange"
      >
        <option :value="defaultValue">
          All Types
        </option>
        <option
          v-for="(optionType, index) in types"
          :key="index"
          :value="optionType"
        >
          {{ optionType.name }}
        </option>
      </select>
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineEmits, ref } from 'vue'
import { usePokemonsTypes } from '~/composables/usePokemonsTypes'
import type { PokemonTypes } from '~/types/api/response.type'

const { data: types, pending, error } = usePokemonsTypes()
const defaultValue = {
  name: '',
  url: '',
}

const emit = defineEmits<{
  (e: 'update:selected-type', value: PokemonTypes): void
}>()

const selectedType = ref<PokemonTypes>(defaultValue)

function handleTypeChange() {
  emit('update:selected-type', selectedType.value as PokemonTypes)
}
</script>
