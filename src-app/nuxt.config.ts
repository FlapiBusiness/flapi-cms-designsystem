// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  myModule: {},
  app: {
    head: {
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }, { charset: 'utf-8' }],
      script: [],
      link: [],
      style: [],
      noscript: [],
    },
  },
  srcDir: 'src-nuxt', // Directory of your source files
  ssr: false, // Mettre a false pour : desktop (tauri)
  devtools: { enabled: true },
  telemetry: {
    enabled: false,
  },
  components: true,
  plugins: [{ src: '~/plugins/vee-validate.ts', mode: 'client' }],
  modules: ['@pinia/nuxt', '@nuxt/test-utils/module', '@nuxtjs/google-fonts', '@nuxtjs/tailwindcss', '../src/module'],
  pinia: {
    storesDirs: ['./src-nuxt/stores/**'],
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      Poppins: true,
    },
  },
})
