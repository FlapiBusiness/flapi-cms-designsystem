import type { Config } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
export default (<Partial<Config>>{
  content: ['./src/runtime/**/*.{js,ts,vue}', './stories/**/*.{js,ts,vue,mdx}'],
  theme: {
    extend: {
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        spin: 'spin 1000ms linear infinite',
      },
      colors: {
        gray: {
          200: '#222B39',
          400: '#35424D',
          500: '#1B232D',
          700: '#101623',
        },
        light: {
          300: 'rgba(255, 255, 255, 0.3)',
          400: '#F5F4FB',
        },
        primary: {
          300: '#BDB3FF',
          400: '#8472F3',
        },
      },
    },
  },
  plugins: [],
}) as Config
