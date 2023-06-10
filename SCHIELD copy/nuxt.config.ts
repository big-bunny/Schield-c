export default {
  ssr: false,

  target: 'static',

  // Global page headers
  head: {
    title: 'SCHIELD',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' },
    ],
    script: [
      { src: 'https://www.paypalobjects.com/donate/sdk/donate-sdk.js', body: true, charset: 'UTF-8' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap' },
    ],
  },

  // Plugins to run before rendering page
  plugins: [],

  // Auto import components
  components: true,

  // Prisma configuration
  prisma: {
    client: {
      connectionString: process.env.DATABASE_URL,
      connectionOptions: {}
    }
  },

  // Pages configuration
  pages: {
    routes: [
      '/pages/protected/Donate.vue',
      '/pages/Gallery.vue',
      '/pages/Home.vue',
      '/pages/index.vue',
      '/pages/News.vue',
      '/pages/Sponsor-program.vue',
      '/pages/Sponsor.vue',
    ],
  },

  // Build Configuration
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/auth-next', '@nuxtjs/tailwindcss'],

  css: ['@fortawesome/fontawesome-free/css/all.min.css'],
  modules: ['@nuxtjs/tailwindcss', '@sidebase/nuxt-auth' ],

  tailwindcss: {
    jit: true,
  },
  experimentalFeatures: {
    nodeModules: true,
  },
  
  // Router configuration
  router: {
    middleware: [],
    routes: [
      {
        path: '/Register',
        component: '~/components/Register.vue',
      },
    ],
  },
    auth: {
        origin: process.env.ORIGIN,
        enableGlobalAppMiddleware: true
    },
};
