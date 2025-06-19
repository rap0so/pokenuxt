<template>
  <div>
    <NuxtRouteAnnouncer />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import '@unocss/reset/tailwind.css' // Importing Tailwind CSS reset styles

useHead({
  title: 'PokéNuxt',
  bodyAttrs: {
    class: 'bg-stone-100', // Setting the background color for the body
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico', // Setting the favicon for the website
    },
  ],
})
</script>
