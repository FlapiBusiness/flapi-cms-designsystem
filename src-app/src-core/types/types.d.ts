import '@nuxt/schema'

declare module '@nuxt/schema' {
  /**
   * Nuxt Config
   */
  interface NuxtConfig {
    myModule?: Record<string, any>
    pinia?: {
      storesDirs?: string[]
    }
    tailwindcss?: {
      exposeConfig?: boolean
      viewer?: boolean
      [key: string]: any
    }
    googleFonts?: {
      families?: Record<string, boolean | number | string>
      display?: string
      subsets?: string[]
      text?: string
      prefetch?: boolean
      preconnect?: boolean
      preload?: boolean
      download?: boolean
      base64?: boolean
      [key: string]: any
    }
  }
  /**
   * Nuxt Options
   */
  interface NuxtOptions {
    myModule?: Record<string, any>
    pinia?: {
      storesDirs?: string[]
    }
    tailwindcss?: {
      exposeConfig?: boolean
      viewer?: boolean
      [key: string]: any
    }
    googleFonts?: {
      families?: Record<string, boolean | number | string>
      display?: string
      subsets?: string[]
      text?: string
      prefetch?: boolean
      preconnect?: boolean
      preload?: boolean
      download?: boolean
      base64?: boolean
      [key: string]: any
    }
  }
}
