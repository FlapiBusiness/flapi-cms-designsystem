import { defineNuxtModule, addComponentsDir, createResolver, installModule } from '@nuxt/kit'
import type { Resolver } from '@nuxt/kit'
import type { Nuxt } from '@nuxt/schema'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'flapi-cms-designsystem',
    configKey: 'flapiCMSDesignSystem',
  },
  async setup(options: ModuleOptions, nuxt: Nuxt): Promise<void> {
    const resolver: Resolver = createResolver(import.meta.url)

    const tailwindCssPath: string = resolver.resolve('./runtime/assets/css/tailwind.css');
    const generatedCssPath: string = resolver.resolve('./runtime/assets/css/generated.css');

    console.log('Resolver paths:', {
      cssPath: tailwindCssPath,
      configPath: resolver.resolve('../tailwind.config'),
    });

    // Installation de Tailwind CSS
    await installModule('@nuxtjs/tailwindcss', {
      /**
       * Here, you specify where your config is.
       * By default, the module have a configPath relative
       * to the current path, ie the playground!
       * (or the app using your module)
       */
      cssPath: tailwindCssPath,
      configPath: resolver.resolve('../tailwind.config'),
    })

    if (!nuxt.options.css.includes(generatedCssPath)) {
      nuxt.options.css.push(generatedCssPath);
    }

    console.log('Ajout du CSS dans Nuxt:', generatedCssPath);

    nuxt.options.alias['#'] = resolver.resolve('./runtime');
    console.log('Alias # ajouté pour', nuxt.options.alias['#'])

    // Ajoute le répertoire des composants pour l'import automatique
    await addComponentsDir({
      path: resolver.resolve('./runtime/components'),
      pathPrefix: false,
      prefix: '',
      global: true,
    })
  },
})
