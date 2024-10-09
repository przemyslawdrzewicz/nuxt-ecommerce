import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  build: {
    transpile: ['vuetify']
  },

  vite: {
    plugins: [vuetify({ autoImport: true })]
  },
  css: ['vuetify/styles', '~/assets/scss/main.scss'],
  modules: ['@nuxt/eslint'],

  compatibilityDate: '2024-10-09'
})
