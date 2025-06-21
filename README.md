# PokéNuxt
<img src="public/logo.png" alt="logo" style="width:30%;">


This is the **PokéNuxt**—a Nuxt 3 web app styled with UnoCSS (Tailwind‑like) that fetches data from the public [PokeAPI](https://pokeapi.co).  
Build with **Typescript** 

---

## 🚀 Quick Start

1. Clone the repository you received (it already contains Nuxt, UnoCSS and testing boilerplate).
2. Install deps:

        yarn install

3. Launch dev server:

        yarn dev

4. Build & preview:

        yarn build
        yarn preview

---

## 🗺️ What is Build

| # | Feature                                                                                      | Why we ask for it                 |
|---|----------------------------------------------------------------------------------------------|-----------------------------------|
| 1 | **Pokémon list** (paginated).                                                                | Shows data handling               |
| 2 | **Search / filter** by name **and** type.                                                    | Tests composables & derived state |
| 3 | **Detail page** at `/pokemon/[name]` displaying artwork, base stats and types.               | Checks dynamic routing            |
| 4 | **SSR buildable** (`yarn build`)                                                             | Verifies server-side rendering    |
| 5 | **Responsive UI** using UnoCSS utilities.                                                    | Evaluates styling approach        |
| 6 | **Accessibility basics**: semantic landmarks, focus states.                                  | Good product hygiene              |
| 7 | **Unit tests** for at least one composable *and* one component of your choice. (`yarn test`) | Shows quality mindset             |

---

## ✨ Bonus Ideas (completely optional)

* Infinite scroll
* Dark/light mode toggle
* E2E tests (Playwright / Cypress)
* CI pipeline (lint + test + deploy on push)
* Internationalization (English + one more language)
* Stats radar chart

---

## 🆘 Nuxt / Vue Crash‑Course

* **Pages directory** ➜ file‑based routing (`/pages/pokemon/[name].vue`).
* **`script setup`** ➜ Composition API + `<template>` in one file.
* **`useFetch(url)`** ➜ SSR‑friendly wrapper around `$fetch`.
* **Pinia** ➜ lightweight global store (`defineStore`).
* **UnoCSS** ➜ Tailwind‑style utilities—class names like `bg-red-500 p-4 rounded-md`.
* **Testing** ➜ Vitest + Vue Test Utils are pre‑installed; run `yarn test`.

---

## 📦 Useful Commands

        yarn dev             # Start dev server with HMR

        yarn test            # Run unit tests with Vitest

        yarn build           # Build for production
        yarn preview         # Preview production build

        yarn lint            # Check code style
        yarn lint:fix        # Fix code style

![Pikachu](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png)
