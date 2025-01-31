import { defineNuxtModule, addComponentsDir, createResolver, installModule, addImportsDir, addPlugin } from '@nuxt/kit'
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

    const tailwindCssPath: string = resolver.resolve('./runtime/assets/css/tailwind.css')
    const generatedCssPath: string = resolver.resolve('./runtime/assets/css/generated.css')

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

    // Ajout du fichier CSS généré
    if (!nuxt.options.css.includes(generatedCssPath)) {
      nuxt.options.css.push(generatedCssPath)
    }

    // Ajout de l'alias #
    nuxt.options.alias['#'] = resolver.resolve('./runtime')

    // Ajoute le répertoire des composants
    addComponentsDir({
      path: resolver.resolve('./runtime/components'),
      pathPrefix: false,
      prefix: '',
      global: true,
    })

    // Ajouter le dossier core/
    addImportsDir(resolver.resolve('./runtime/core'))

    // Ajout du plugin : VeeValidate
    addPlugin(
      {
        src: resolver.resolve('./runtime/plugins/VeeValidate')
      },
      {
        append: true,
      },
    )
  },
})
