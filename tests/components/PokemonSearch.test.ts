import { describe, it, expect } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import PokemonSearch from '~/components/PokemonSearch.vue'

describe('PokemonSearch', () => {
  it('emits nameSearch when button is clicked', async () => {
    const wrapper = mount(PokemonSearch)

    const input = wrapper.get('input')
    await input.setValue('pikachu')

    const button = wrapper.get('button')
    await button.trigger('click')

    expect(wrapper.emitted('update:nameSearch')).toBeTruthy()
    expect(wrapper.emitted('update:nameSearch')![0][0]).toBe('pikachu')
  })

  it('emits empty string when input is cleared', async () => {
    const wrapper = mount(PokemonSearch)

    const input = wrapper.get('input')
    await input.setValue('bulbasaur')
    await input.setValue('') // clear

    // flush because watch emits async
    await flushPromises()

    const emitted = wrapper.emitted('update:nameSearch')
    const lastEmittedValue = emitted?.[emitted.length - 1]?.[0]

    expect(lastEmittedValue).toBe('')
  })
})
