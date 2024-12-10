import type { Config } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
export default (<Partial<Config>>{
  content: ['./src/runtime/**/*.{js,ts,vue}'],
  theme: {
    extend: {},
  },
  plugins: [],
}) as Config
