export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'y',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/tailwind.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxt/postcss8'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['nuxt-twa-module', {
      /* module options */
      defaultUrl: 'https://pooriavakili.ir//',
      hostName: 'pooriavakili///',
      applicationId: 'pooria',
      launcherName: 'ََpooria',
      versionCode: 1,
      versionName: '1.0',
      statusBarColor: '#EB384D',
      // The sha256Fingerprints by is an array with one SHA-256 key string.
      // But if you have multiple you can add them to the array. More information about the website asociation:
      // https://developer.android.com/training/app-links/verify-site-associations#web-assoc
      sha256Fingerprints: ['C9:01:6D:BF:CE:EF:A1:10:83:5C:30:EE:2A:5F:6E:34:0C:F5:30:80:B3:2D:E9:95:55:3E:36:0A:86:8A:D6:42'],
      /* optional */
      /* overwrite default location for icon */
      iconPath: '/static/icon.png',
      /* Overwrite folder where to put .wellknown */
      distFolder: '.nuxt/dist/client'
    }],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },

  }
}
