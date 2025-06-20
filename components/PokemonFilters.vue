<template>
  <form
    class="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6"
    @submit.prevent
  >
    <div class="flex flex-col">
      <label
        for="nameFilter"
        class="text-sm font-medium mb-1"
      >Filter by name</label>
      <input
        id="nameFilter"
        v-model="name"
        type="text"
        placeholder="e.g. Pikachu"
        class="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
      >
    </div>

    <div class="flex flex-col">
      <label
        for="typeFilter"
        class="text-sm font-medium mb-1"
      >Filter by type</label>
      <select
        id="typeFilter"
        v-model="type"
        class="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
      >
        <option value="">
          All Types
        </option>
        <option
          v-for="(optionType, index) in types"
          :key="index"
          :value="optionType"
        >
          {{ optionType }}
        </option>
      </select>
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref, watch } from 'vue'
import type { Filters } from '~/types/useFilteredPokemon.types'

const props = defineProps<{ filters: Filters }>()
const { types } = props.filters

const emit = defineEmits<{
  (e: 'update:name' | 'update:type', value: string): void
}>()

const name = ref('')
const type = ref('')

// Watch for changes and emit
watch(name, val => emit('update:name', val))
watch(type, val => emit('update:type', val))
</script>
