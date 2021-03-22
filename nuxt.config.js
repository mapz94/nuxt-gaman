export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - nuxt-gaman',
    title: 'nuxt-gaman',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],
  vuetify: {
    theme: {
      isDark: false,
      themes: {
        dark: {
          primary: '#66D8C4',
          accent: '#D9C0EC',
          secondary: '#8E73AD',
          info: '#26A69A',
          warning: '#FFC107',
          error: '#DD2C00',
          success: '#00E676',
        },
        light: {
          primary: '#66D8C4',
          accent: '#D9C0EC',
          secondary: '#8E73AD',
          info: '#26A69A',
          warning: '#FFC107',
          error: '#DD2C00',
          success: '#00E676',
        },
      },
    },
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ['~/components', '~/components/typography'],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@blokwise/dynamic',
    '@pnodev/nuxt-directus',
    'cookie-universal-nuxt',
  ],
  directus: {
    apiUrl: 'https://directus.senlie.cl',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
