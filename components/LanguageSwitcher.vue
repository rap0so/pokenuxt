<template>
  <select
    id="locale"
    v-model="locale"
    class="box-bg rounded"
    aria-label="Select language"
    title="Select language"
    name="locale"
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
