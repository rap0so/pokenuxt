<template>
  <div>
    <NuxtRouteAnnouncer />

    <NuxtLayout>
      <div class="md:absolute md:top-4 md:right-4 flex justify-end p-4">
        <div class="flex gap-3">
          <ToggleThemeButton />
          <LanguageSwitcher />
        </div>
      </div>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import '@unocss/reset/tailwind.css' // Importing Tailwind CSS reset styles
import { useThemeStore } from '~/stores/theme'

const theme = useThemeStore()
onMounted(() => theme.init())

useHead({
  title: 'PokéNuxt',
  meta: [
    {
      name: 'description',
      content: 'A Nuxt 3 web app styled with UnoCSS (Tailwind-like) that fetches data from the public PokeAPI',
    },
  ],
  bodyAttrs: {
    class: 'page-bg h-screen', // Setting the background color for the body
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico', // Setting the favicon for the website
    },
    {
      rel: 'preload',
      as: 'image',
      href: '/images/loading.gif',
    },
  ],
})
</script>
