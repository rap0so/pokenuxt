<template>
  <li
    role="listitem"
    class="bg-gradient-to-br from-purple-200 via-pink-200 to-yellow-100 p-4 rounded-2xl shadow-[0_4px_10px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer flex flex-col items-center text-center"
    :aria-label="`See details of ${name}`"
    @click="navigateToDetail"
  >
    <div class="relative w-24 h-24 mb-2">
      <slot name="sprite">
        <!-- // TODO:  Add a Placeholder or spinner until sprite is loaded -->
        <div class="w-full h-full bg-white/50 rounded-full animate-pulse" />
      </slot>
    </div>
    <h3 class="text-lg font-semibold text-purple-800 capitalize drop-shadow-[1px_1px_2px_rgba(0,0,0,0.2)]">
      {{ name }}
    </h3>
  </li>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = defineProps<{ name: string }>()
const router = useRouter()

function navigateToDetail() {
  router.push(`/pokemon/${props.name}`)
}
</script>
