import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import PokemonCard from '~/components/PokemonCard.vue'

const mockPush = vi.fn()

vi.mock('vue-router', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}))

describe('PokemonCard', () => {
  const props = {
    name: 'pikachu',
    spriteUrl: '/sprites/pikachu.png',
  }

  it('renders the Pokémon name and image', () => {
    const wrapper = mount(PokemonCard, {
      props,
      global: {
        stubs: {
          NuxtImg: {
            template: '<img :src="src" :alt="alt" />',
            props: ['src', 'alt'],
          },
        },
      },
    })

    expect(wrapper.text()).toContain('pikachu')

    const img = wrapper.get('img')
    expect(img.attributes('src')).toBe(props.spriteUrl)
    expect(img.attributes('alt')).toBe('pikachu sprite')
  })

  it('navigates to the detail page on click', async () => {
    const wrapper = mount(PokemonCard, {
      props,
      global: {
        stubs: {
          NuxtImg: {
            template: '<img :src="src" :alt="alt" />',
            props: ['src', 'alt'],
          },
        },
      },
    })

    await wrapper.trigger('click')
    expect(mockPush).toHaveBeenCalledWith('/pokemon/pikachu')
  })
})
