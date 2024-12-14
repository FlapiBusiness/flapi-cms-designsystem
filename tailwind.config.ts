import type { Config } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
export default (<Partial<Config>>{
  content: [
    './src/runtime/**/*.{js,ts,vue}',
    './src-app/src-nuxt/components/**/*.{vue,js,ts}', // a viré des que le fix pour /runtime est dispo
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}) as Config
