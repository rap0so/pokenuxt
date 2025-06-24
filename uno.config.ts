import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  shortcuts: [
    ['box-bg', 'p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100'],
    ['page-bg', 'bg-gradient-to-b from-purple-100 via-pink-100 to-yellow-50 dark:bg-gradient-to-b dark:from-gray-800 dark:via-gray-700 dark:to-gray-900'],
    ['wrapper-controls', 'flex flex-col w-full sm:w-auto'],
  ],
  presets: [
    presetUno({
      dark: 'class',
    }),
  ],
})
