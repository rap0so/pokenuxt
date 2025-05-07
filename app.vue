<template>
  <div>
    <NuxtRouteAnnouncer />

    <div class="p-8">
      <!-- Feel free to completely remove this boilerplate! -->

      <img
        src="/public/logo.png"
        alt="PokéNuxt's logo, showing a Pokéball"
        height="100"
        class="h-10 mb-4"
      >

      <h1 class="text-lg font-bold mb-4">
        Hello, candidate!
      </h1>
      <p>
        Please check the README file for the instructions.
      </p>
      <p class="text-sm text-gray-500">
        Good luck, and most importantly, have fun doing this test!
      </p>

      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="A Pikachu"
        width="96"
        height="96"
        class="pos-absolute bottom-0 right-0"
      >
    </div>
  </div>
</template>

<script setup>
import '@unocss/reset/tailwind.css' // Importing Tailwind CSS reset styles

useHead({
  title: 'PokéNuxt',
  bodyAttrs: {
    class: 'bg-stone-100', // Setting the background color and margin for the body
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
