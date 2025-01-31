# Flapi - @flapi/cms-designsystem

## 📦 Installation

Ajoutez **@flapi/cms-designsystem** à votre projet en tant que dépendance de développement :

```bash
npm install -D @flapi/cms-designsystem
```

ou avec **yarn** :

```bash
yarn add -D @flapi/cms-designsystem
```

ou avec **pnpm** :

```bash
pnpm add -D @flapi/cms-designsystem
```

---

## 🚀 Utilisation avec Nuxt

### 1️⃣ Ajouter le module dans `nuxt.config.ts`

Ajoutez **@flapi/cms-designsystem** à la section `modules` de votre configuration **Nuxt** :

```ts
export default defineNuxtConfig({
  modules: ['@flapi/cms-designsystem'],
})
```

### 2️⃣ Importer les composants

Une fois installé, vous pouvez directement utiliser les composants dans vos pages ou composants Vue :

```vue
<template>
  <FlButton label="Cliquez-moi" />
</template>

<script lang="ts" setup>
import { FlButton } from '@flapi/cms-designsystem'
</script>
```

---

## 🎨 Personnalisation avec Tailwind CSS

Si votre projet utilise **Tailwind CSS**, assurez-vous d'inclure les styles du design system :

Ajoutez cette ligne dans votre `tailwind.config.{js,ts}` :

```js
module.exports = {
  content: ['./node_modules/@flapi/cms-designsystem/**/*.{js,ts,vue}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Cela garantit que Tailwind purge correctement les styles inutilisés.

---

## 📖 Documentation

Retrouvez la documentation complète avec tous les composants et options disponibles ici :

- Development (tag dev) : https://dev.designsystem.flapi.org
- Production (tag latest) : https://designsystem.flapi.org
