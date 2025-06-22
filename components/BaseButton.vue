<template>
  <button
    role="button"
    :class="computedClass"
    :disabled="disabled"
    v-bind="$attrs"
    :aria-disabled="disabled"
    @click="emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: String,
    default: 'xl',
  },
  block: Boolean,
})

const computedClass = computed(() => {
  const base = 'text-white font-bold px-6 py-2 shadow focus:outline focus:ring-2 focus:ring-purple-400 disabled:opacity-50 transition'

  const variants: Record<string, string> = {
    default: 'bg-purple-600 hover:bg-purple-800 rounded-xl',
    solid: 'bg-purple-500 hover:bg-purple-700',
    ghost: 'bg-transparent text-purple-600 hover:bg-purple-100',
    search: 'bg-purple-600 px-4 py-2 rounded-r-xl hover:bg-purple-800',
  }

  return `${base} ${variants[props.variant] || ''} ${props.block ? 'w-full' : ''}`
})
</script>
