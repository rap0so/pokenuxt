// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxtjs/i18n',
  ],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_API_BASE_URL || '',
    },
  },
  compatibilityDate: '2024-11-01',
  eslint: {
    checker: true,
    config: {
      stylistic: true,
    },
  },
  i18n: {
    strategy: 'no_prefix',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'pt', name: 'Português', file: 'pt.json' },
      { code: 'fr', name: 'Français', file: 'fr.json' },
    ],
    defaultLocale: 'en',
  },
})
