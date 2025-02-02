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

Vous pouvez directement utiliser les composants dans vos pages ou composants Vue :

```ts
<template>
  <FlapiButton>MyButton</FlapiButton>
</template>
```

✅ **Pas besoin d'import !** Les composants sont déjà disponibles dans votre projet GLOBALEMENT.

### 3️⃣ Importer les Services, Types.. (`/core`)

Pour utiliser les Services, Types.. situés dans **`@flapi/cms-designsystem/core`**, vous devez **les importer explicitement** :

```ts
<script lang="ts" setup>
import { ColorUtils } from '@flapi/cms-designsystem/core'
console.log(ColorUtils.hexToHSL('#ff0000'))
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
