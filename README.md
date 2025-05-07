# PokéNuxt – Take‑Home Challenge

Welcome! Your mission is to build **PokéNuxt**—a Nuxt 3 web app styled with UnoCSS (Tailwind‑like) that fetches data from the public [PokeAPI](https://pokeapi.co).  
The project is intentionally scoped so you can complete it in about four days. Feel free to install **any dependency** that helps you.

We recommend you to use **Typescript** for the whole project, but it’s not mandatory.

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

## 🗺️ What to Build

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

---

## 📨 Submission

1. Push code to **your own** Git repo.
2. Send us the link to your repo so we can review the challenge.

Good luck & have fun!
