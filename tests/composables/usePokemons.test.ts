import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest'
import { ref } from 'vue'
import { useAsyncData, useRuntimeConfig } from '#app'
import { usePokemons } from '~/composables/usePokemons'
import { usePokemonStore } from '~/stores/pokemon'

// Mock Nuxt composables and your store
vi.mock('#app', () => ({
  useAsyncData: vi.fn(),
  useRuntimeConfig: vi.fn(),
}))

vi.mock('~/stores/pokemon', () => ({
  usePokemonStore: vi.fn(),
}))

const mockApiBaseUrl = 'https://asdasdasd.com'

describe('usePokemons', () => {
  const mockGetOrFetchPage = vi.fn()
  const fakeStore = { getOrFetchPage: mockGetOrFetchPage }

  beforeEach(() => {
    (useRuntimeConfig as Mock).mockReturnValue({
      public: { apiBaseUrl: mockApiBaseUrl },
    });

    (usePokemonStore as unknown as Mock).mockReturnValue(fakeStore)
    vi.clearAllMocks()
  })

  it('calls getOrFetchPage with offset and limit correctly', async () => {
    const fakeData = { results: [{ name: 'bulbasaur' }] }
    mockGetOrFetchPage.mockResolvedValue(fakeData);

    // Mock useAsyncData to immediately invoke our loader function and resolve data
    (useAsyncData as Mock).mockImplementation(async (_, loader) => {
      const value = await loader()

      return {
        data: { value },
        pending: { value: false },
        error: { value: null },
      }
    })

    const offset = ref(20)
    const result = await usePokemons(offset, 10)

    expect(usePokemonStore).toHaveBeenCalled()
    expect(mockGetOrFetchPage).toHaveBeenCalledWith(20, 10, mockApiBaseUrl)

    expect(result.data.value).toBe(fakeData)
  })

  it('calls getOrFetchPage with offset=0 and limit=20 by default', async () => {
    const offset = ref(0)
    usePokemons(offset, 20)

    expect(mockGetOrFetchPage).toHaveBeenCalledWith(0, 20, mockApiBaseUrl)
  })
})
