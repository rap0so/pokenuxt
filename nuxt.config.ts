// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxt/image',
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
})
