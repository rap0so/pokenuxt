<template>
  <main class="p-4 min-h-screen flex flex-col items-center justify-start page-bg">
    <div
      v-if="pending"
      class="text-xl text-gray-700 mt-24"
    >
      Loading...
    </div>

    <div
      v-else-if="pokemon"
      class="w-full max-w-3xl bg-white/80 rounded-2xl shadow-lg p-6 mt-6 flex flex-col items-center"
      aria-labelledby="pokemon-title"
    >
      <NuxtImg
        :src="pokemon.spriteUrl"
        :alt="`Official artwork of ${pokemon.name}`"
        class="w-50 h-48 object-contain drop-shadow-lg mb-2"
        loading="lazy"
        placeholder="/images/loading.gif"
        placeholder-class="w-50 h-48 opacity-50"
      />
      <h1
        id="pokemon-title"
        class="text-3xl font-extrabold text-purple-700 capitalize mb-1"
      >
        {{ pokemon.name }}
      </h1>
      <div
        class="flex gap-2 mb-4"
        :aria-label="$t('detail.types')"
      >
        <span
          v-for="type in pokemon.types"
          :key="type.type.name"
          class="px-3 py-1 rounded-xl text-white text-sm font-semibold"
          :style="{ background: getTypeGradient(type.type.name) }"
        >
          {{ type.type.name }}
        </span>
      </div>
      <section
        class="w-full"
        aria-labelledby="base-stats-heading"
      >
        <h2
          id="base-stats-heading"
          class="text-lg font-bold mb-2 text-gray-700"
        >
          {{ $t('detail.baseStats') }}
        </h2>
        <ul class="space-y-2">
          <li
            v-for="stat in pokemon.stats"
            :key="stat.stat.name"
            class="flex items-center gap-3"
          >
            <span class="w-24 capitalize text-gray-600">{{ stat.stat.name }}</span>
            <div class="flex-1 h-4 bg-gray-200 rounded">
              <div
                class="h-4 rounded bg-gradient-to-r from-pink-400 to-purple-400"
                :style="{ width: Math.min(stat.base_stat, 100) + '%' }"
              />
            </div>
            <span class="w-8 text-right font-semibold text-purple-700">{{ stat.base_stat }}</span>
          </li>
        </ul>
      </section>
    </div>

    <div
      v-else
      class="text-xl text-red-700 mt-24"
    >
      <BaseError :label="$t('detail.notFound')" />
    </div>
    <div class="mt-3">
      <BaseButton @click="goHome">
        {{ $t('detail.back') }}
      </BaseButton>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { usePokemonDetail } from '~/composables/usePokemonDetail'
import BaseButton from '~/components/BaseButton.vue'
import getTypeGradient from '~/styles/getTypeGradient'

const route = useRoute()
const router = useRouter()
const name = computed(() => route.params.name as string)

const { data: pokemon, pending } = usePokemonDetail(name)

function goHome() {
  router.push('/')
}
</script>
