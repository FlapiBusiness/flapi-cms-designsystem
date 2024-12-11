import type { StorybookConfig } from '@storybook/vue3-vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { resolve } from 'path'

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../**/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-designs',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    defaultName: 'Documentation',
  },
  async viteFinal(config) {
    if (config.resolve) {
      config.resolve.alias = {
        '@': resolve(__dirname, '../src-app/src-nuxt'),
        '~': resolve(__dirname, '../src-app/src-nuxt'),
      }
    }

    const { mergeConfig } = await import('vite')
    return mergeConfig(config, {
      server: {
        cache: false, // Disable cache
        watch: {
          usePolling: true,
          interval: 100,
        },
      },
      optimizeDeps: {
        include: ['../src-app/src-nuxt'],
      },
      hmr: {
        overlay: true, // Ensures errors are displayed
      },
      css: {
        postcss: {
          plugins: [tailwindcss({ config: resolve(__dirname, '../tailwind.config.ts') }), autoprefixer()],
        },
      },
      plugins: [vue()],
    })
  },
}
export default config
