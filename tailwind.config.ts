import type { Config } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
export default (<Partial<Config>>{
  content: [
    './src/runtime/**/*.{js,ts,vue}',
    './src-app/src-nuxt/components/**/*.{vue,js,ts}', // Inclure vos composants
    './stories/**/*.{js,ts,vue,mdx}', // Stories Storybook
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}) as Config
