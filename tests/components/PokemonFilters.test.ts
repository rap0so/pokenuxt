import { describe, it, expect, vi, type Mock } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import PokemonFilters from '~/components/PokemonFilters.vue'
import type { PokemonTypes } from '~/types/api/response.type'

vi.mock('~/composables/usePokemonsTypes', () => ({
  usePokemonsTypes: vi.fn(),
}))

const mockTypes: PokemonTypes[] = [
  { name: 'grass', url: '/grass' },
  { name: 'fire', url: '/fire' },
]

describe('PokemonFilters', () => {
  it('renders all type options including default', async () => {
    (usePokemonsTypes as Mock).mockResolvedValue(mockTypes)

    const wrapper = mount({
      template: `
        <Suspense>
          <PokemonFilters />
        </Suspense>
      `,
      components: { PokemonFilters },
    })
    await flushPromises()

    const options = wrapper.findAll('option')
    expect(options).toHaveLength(mockTypes.length + 1)

    const optionTexts = wrapper.findAll('option').map(o => o.text())

    expect(optionTexts).toEqual(expect.arrayContaining([
      'filter.all',
      'grass',
      'fire',
    ]))
  })
})
