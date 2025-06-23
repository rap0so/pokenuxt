<template>
  <select
    v-model="locale"
    class="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
    aria-label="Select language"
    title="Select language"
    @change="handleLocaleChange"
  >
    <option
      v-for="localeObj in locales"
      :key="localeObj.code"
      :value="localeObj.code"
    >
      {{ localeObj.name }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { useI18n, type Locale } from 'vue-i18n'

const { locales, setLocale, locale } = useI18n()

function handleLocaleChange(event: Event) {
  const selectedLocale = (event.target as HTMLSelectElement).value as Locale
  setLocale(selectedLocale)
}
</script>
