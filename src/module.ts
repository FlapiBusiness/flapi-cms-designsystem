import { defineNuxtModule, addComponentsDir, createResolver, installModule } from '@nuxt/kit'
import type { Resolver } from '@nuxt/kit'
import type { Nuxt } from '@nuxt/schema'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
  },
  // Default configuration options of the Nuxt module
  defaults: {
    css: true
  },
  async setup(options: ModuleOptions, nuxt: Nuxt): Promise<void> {
    const resolver: Resolver = createResolver(import.meta.url)

    // Installation de Tailwind CSS
    await installModule('@nuxtjs/tailwindcss', {
      /**
       * Here, you specify where your config is.
       * By default, the module have a configPath relative
       * to the current path, ie the playground !
       * (or the app using your module)
       */
      cssPath: resolver.resolve("./runtime/assets/css/tailwind.css"),
      configPath: resolver.resolve('../tailwind.config'),
    })

    // Ajoute le répertoire des composants pour l'import automatique
    await addComponentsDir({
      path: resolver.resolve('./runtime/components'),
      pathPrefix: false,
      prefix: '',
      global: true,
    })
  },
})
