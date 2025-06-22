import { ref } from 'vue'
import type { Mock } from 'vitest'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { usePokemonDetail } from '~/composables/usePokemonDetail'
import { usePokemonStore } from '~/stores/pokemon'
import { useAsyncData } from '#app'

vi.mock('~/stores/pokemon', () => ({
  usePokemonStore: vi.fn(),
}))

vi.mock('#app', () => ({
  useAsyncData: vi.fn(),
  useRuntimeConfig: () => ({
    public: {
      apiBaseUrl: 'https://pokeapi.co/api/v2',
    },
  }),
}))

describe('usePokemonDetail', () => {
  const mockGetOrFetchPokemon = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()

    ;(usePokemonStore as unknown as Mock).mockReturnValue({
      getOrFetchPokemon: mockGetOrFetchPokemon,
    })
  })

  it('should call getOrFetchPokemon correctly', () => {
    const name = ref('bulbasaur')

    const expectedUrl = 'https://pokeapi.co/api/v2'

    const mockAsyncDataResponse = { data: ref('someData') }
    ;(useAsyncData as Mock).mockReturnValue(mockAsyncDataResponse)

    const result = usePokemonDetail(name)

    const fetchFn = (useAsyncData as Mock).mock.calls[0][1]
    fetchFn()

    expect(mockGetOrFetchPokemon).toHaveBeenCalledWith(
      'bulbasaur',
      expectedUrl,
    )

    expect(result).toBe(mockAsyncDataResponse)
  })
})
