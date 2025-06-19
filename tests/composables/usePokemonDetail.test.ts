import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest'
import { useFetch, useRuntimeConfig } from '#app'
import { usePokemonDetail } from '~/composables/usePokemonDetail'

vi.mock('#app', () => ({
  useFetch: vi.fn(),
  useRuntimeConfig: vi.fn(),
}))

const mockApiBaseUrl = 'https://asdasdasd.com'

describe('usePokemonDetail', () => {
  beforeEach(() => {
    (useRuntimeConfig as Mock).mockReturnValue({
      public: { apiBaseUrl: mockApiBaseUrl },
    })
  })

  it.only('calls useFetch with correct URL and key', () => {
    const fakeResponse = { data: { value: { name: 'bulbasaur' } } };

    (useFetch as Mock).mockReturnValue(fakeResponse)

    const result = usePokemonDetail('bulbasaur')

    expect(useFetch).toHaveBeenCalledWith(
      mockApiBaseUrl + '/bulbasaur',
      expect.objectContaining({ key: 'pokemon-bulbasaur' }),
      expect.stringContaining('$'),
    )
    expect(result).toBe(fakeResponse)
  })

  it.skip('uses the correct key when the pokemon name has spaces', () => {
    const fakeResponse = { data: { value: { name: 'Mr. Mime' } } };

    (useFetch as Mock).mockReturnValue(fakeResponse)

    const result = usePokemonDetail('Mr. Mime')

    expect(useFetch).toHaveBeenCalledWith(
      mockApiBaseUrl + '/mr.-mime',
      expect.objectContaining({ key: 'pokemon-mr.-mime' }),
      expect.stringContaining('$'),
    )
    expect(result).toBe(fakeResponse)
  })
})
