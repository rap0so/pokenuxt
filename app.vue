<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup>
import '@unocss/reset/tailwind.css' // Importing Tailwind CSS reset styles

useHead({
  bodyAttrs: {
    class: 'bg-stone-100 m-0', // Setting the background color and margin for the body
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
