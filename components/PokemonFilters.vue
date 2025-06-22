<template>
  <form
    v-if="types"
    class="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6"
    @submit.prevent
  >
    <div class="flex flex-col">
      <BaseLabel for="typeFilter">
        {{ $t('filter.label') }}
      </BaseLabel>
      <select
        id="typeFilter"
        v-model="selectedType"
        class="box-bg rounded-xl h-[42px]"
        @change="handleTypeChange"
      >
        <option :value="defaultValue">
          {{ $t('filter.all') }}
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

const types = await usePokemonsTypes()

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
