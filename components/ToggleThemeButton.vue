<template>
  <button
    class="p-2 text-white bg-purple-600 rounded-md"
    aria-label="Toggle theme"
    title="Toggle theme"
    role="button"
    @click="theme.toggle()"
  >
    {{ theme.dark ? '🌙 Dark' : '☀️ Light' }}
  </button>
</template>

<script setup lang="ts">
import { useThemeStore } from '~/stores/theme'

const theme = useThemeStore()
</script>
