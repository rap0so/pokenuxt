<template>
  <form
    class="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6"
    @submit.prevent
  >
    <div class="flex flex-col">
      <label
        for="nameSearch"
        class="text-sm font-medium mb-1"
      >Search by name</label>
      <div class="flex">
        <input
          id="nameSearch"
          v-model="nameSearch"
          type="text"
          placeholder="e.g. Pikachu"
          class="p-2 border rounded-l-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
        >

        <BaseButton
          name="search"
          aria-label="Search"
          variant="search"
          @click="handleSearch"
        >
          <svg
            name="search-icon"
            class="w-6 h-6 inline-block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          /></svg>
        </BaseButton>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineEmits, ref } from 'vue'
import BaseButton from './BaseButton.vue'

const emit = defineEmits<{
  (e: 'update:nameSearch' | 'update:type', value: string): void
}>()

const nameSearch = ref('')

const handleSearch = () => {
  emit('update:nameSearch', nameSearch.value)
}

watch(nameSearch, () => {
  if (!nameSearch.value) {
    emit('update:nameSearch', nameSearch.value)
  }
})
</script>
