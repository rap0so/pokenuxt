import { ref, computed } from 'vue'

export function usePagination(initial = 0, pageSize = 20) {
  const offset = ref(initial)

  function nextPage() {
    offset.value += pageSize
  }

  function prevPage() {
    if (offset.value >= pageSize) {
      offset.value -= pageSize
    }
  }

  const page = computed(() => Math.floor(offset.value / pageSize) + 1)

  return { offset, pageSize, page, nextPage, prevPage }
}
