<template>
  <select
    v-model="locale"
    class="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
    aria-label="Select language"
  >
    <option
      v-for="(name, code) in availableLocales"
      :key="code"
      :value="code"
    >
      {{ name }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

// TODO: is there a better way to get these langs?
const availableLocales: Record<string, string> = {
  en: 'English',
  pt: 'Português',
  fr: 'Français',
}
</script>
