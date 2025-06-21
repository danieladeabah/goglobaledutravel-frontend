export default defineNuxtConfig({
  srcDir: 'src/',
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  modules: ['nuxt-icon', '@nuxt/ui', '@nuxtjs/color-mode'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  colorMode: {
    preference: 'light'
  },
  runtimeConfig: {
    public: {
      GOOGLE_GEMINI_API_KEY: process.env.GOOGLE_GEMINI_API_KEY ?? '',
      googleMapClientId: process.env.GOOGLE_MAPS_API_KEY ?? ''
    }
  }
})
