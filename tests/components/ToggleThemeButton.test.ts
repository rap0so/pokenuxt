import { describe, it, expect, vi, type Mock } from 'vitest'
import { mount } from '@vue/test-utils'

import { useThemeStore } from '~/stores/theme'

vi.mock('~/stores/theme', () => ({
  useThemeStore: vi.fn(),
}))

describe('ToggleThemeButton', () => {
  it('renders the light theme initially', async () => {
    (useThemeStore as unknown as Mock).mockReturnValue({
      dark: false,
      toggle: vi.fn(),
    })

    const { default: ToggleThemeButton } = await import('~/components/ToggleThemeButton.vue')
    const wrapper = mount(ToggleThemeButton)

    expect(wrapper.text()).toContain('☀️ theme.light')
  })

  it('calls theme.toggle() on click', async () => {
    const toggleMock = vi.fn();
    (useThemeStore as unknown as Mock).mockReturnValue({
      dark: false,
      toggle: toggleMock,
    })

    const { default: ToggleThemeButton } = await import('~/components/ToggleThemeButton.vue')
    const wrapper = mount(ToggleThemeButton)

    await wrapper.get('button').trigger('click')

    expect(toggleMock).toHaveBeenCalled()
  })
})
