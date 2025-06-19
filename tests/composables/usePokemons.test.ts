import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest'
import { useFetch, useRuntimeConfig } from '#app'
import { usePokemons } from '~/composables/usePokemons'

vi.mock('#app', () => ({
  useFetch: vi.fn(),
  useRuntimeConfig: vi.fn(),
}))

const mockApiBaseUrl = 'https://asdasdasd.com'

describe('usePokemons', () => {
  beforeEach(() => {
    (useRuntimeConfig as Mock).mockReturnValue({
      public: { apiBaseUrl: mockApiBaseUrl },
    })
  })

  it('calls useFetch with URL and key correctly (offset/limit custom)', () => {
    const fakeResponse = {
      data: { value: { results: [{ name: 'bulbasaur' }] } },
      pending: { value: false },
      error: { value: null },
    };

    (useFetch as Mock).mockReturnValue(fakeResponse)

    const result = usePokemons(20, 10)

    expect(useFetch).toHaveBeenCalledWith(
      mockApiBaseUrl + '/pokemon?offset=20&limit=10',
      expect.objectContaining({ key: 'pokemons-20-10' }),
      expect.stringMatching('$'), // internal key of useFetch (it took me a while to understand)
    )
    expect(result).toBe(fakeResponse)
  })

  it('calls useFetch with offset=0 and limit=20 by default', () => {
    const fakeResponse = {
      data: { value: { results: [{ name: 'pikachu' }] } },
      pending: { value: false },
      error: { value: null },
    };

    (useFetch as Mock).mockReturnValue(fakeResponse)

    const result = usePokemons()

    expect(useFetch).toHaveBeenCalledWith(
      mockApiBaseUrl + '/pokemon?offset=0&limit=20',
      expect.objectContaining({ key: 'pokemons-0-20' }),
      expect.stringMatching('$'),
    )
    expect(result).toBe(fakeResponse)
  })
})
