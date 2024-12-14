import type { Config } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
export default <Partial<Config>>{
  content: ['./src-nuxt/pages/**/*.vue', './src-nuxt/components/**/*.vue', './src-nuxt/layouts/**/*.vue', './app.vue'],
  theme: {
    extend: {
      colors: {
        gray: {
          400: '#35424D',
          500: '#1B232D',
        },
        light: {
          300: 'rgba(255, 255, 255, 0.3)',
        },
        primary: {
          400: '#8472F3',
        },
      },
    },
  },
  plugins: [],
}
