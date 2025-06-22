<template>
  <div class="flex flex-col items-center justify-center gap-4 text-center py-12">
    <NuxtImg
      src="/images/lost-pikachu.png"
      alt="Not found illustration"
      class="w-48 h-48 object-contain opacity-80"
    />
    <p class="text-xl font-semibold text-purple-700">
      {{ label }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { NuxtImg } from '#components'

defineProps<{
  label?: string
}>()
</script>
