import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseError from '~/components/BaseError.vue'

describe('BaseError', () => {
  it('renders the label and mock image', () => {
    const wrapper = mount(BaseError, {
      props: {
        label: 'Nothing found.',
      },
      global: {
        stubs: {
          NuxtImg: {
            template: '<img :src="src" :alt="alt" />',
            props: ['src', 'alt'],
          },
        },
      },
    })

    expect(wrapper.find('p').text()).toContain('Nothing found.')
    const img = wrapper.get('img')
    expect(img.attributes('src')).toBe('/images/lost-pikachu.png')
    expect(img.attributes('alt')).toBe('Not found illustration')
  })
})
