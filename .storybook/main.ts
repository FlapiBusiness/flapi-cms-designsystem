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
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-designs',
    '@chromatic-com/storybook',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    defaultName: 'Documentation',
  },
  async viteFinal(viteConfig) {
    if (viteConfig.resolve) {
      viteConfig.resolve.alias = {
        '@': resolve(__dirname, '../src-app/src-nuxt'),
        '~': resolve(__dirname, '../src-app/src-nuxt'),
      }
    }

    const { mergeConfig } = await import('vite')
    return mergeConfig(viteConfig, {
      server: {
        cache: false,
        watch: {
          usePolling: true,
          interval: 0,
        },
      },
      hmr: {
        overlay: true,
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
