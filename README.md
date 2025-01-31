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
  modules: [
    '@flapi/cms-designsystem'
  ]
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

## 📖 Documentation

Retrouvez la documentation complète avec tous les composants et options disponibles ici : <br />
Development (tag dev npm) : https://dev.designsystem.flapi.org <br />
Production (tag latest npm) : https://designsystem.flapi.org

---

## 📜 Licence

Ce projet est un logiciel propriétaire de **Flapi**.  
Il ne peut être ni redistribué, ni modifié sans l'autorisation explicite de **Flapi**.  
Tous droits réservés © **Flapi**.
