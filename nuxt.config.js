import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false,

  head: {
    titleTemplate: '%s - alaja-kenar',
    title: 'alaja-kenar',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: ''
    },
    {
      name: 'format-detection',
      content: 'telephone=no'
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  css: [{
    src: '~/assets/scss/index.scss',
    lang: 'scss'
  }],
  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  plugins: [
    '~/plugins/aos',
    '~/plugins/device-screen-width',
    '~/plugins/vuetify',
  ],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
    'nuxt-animejs',
  ],

  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/i18n',
  ],

  i18n: {
    locales: [{
      name: "English",
      code: "en-EN",
      iso: "en-EN",
      file: "en-EN.js"
    },
    {
      name: "Russian",
      code: "ru-RU",
      iso: "ru-RU",
      file: "ru-RU.js"
    },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "locale",
      alwaysRedirect: true,
      fallbackLocale: "en-EN"
    },
    strategy: "no_prefix",
    lazy: true,
    langDir: "lang/",
    defaultLocale: "en-EN",
    vuex: {
      moduleName: "i18n",
      syncLocale: true,
      syncMessages: true,
      syncRouteParams: true
    }
  },

  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    theme: {
      dark: false,
      themes: {
        ligth: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build: {}
}
