export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Schield Center',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      },
      { hid: 'description', name: 'description', content: '' },
    ],
    script: [
      {
        src: 'https://www.paypalobjects.com/donate/sdk/donate-sdk.js',
        body: true,
        charset: 'UTF-8',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  css: ['@fortawesome/fontawesome-free/css/all.min.css'],
  modules: ['@nuxtjs/tailwindcss', '@sidebase/nuxt-auth'],
  auth: {
    origin: process.env.ORIGIN,
    enableGlobalAppMiddleware: true,
  },

  tailwindcss: {
    jit: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Add a background image to the body tag
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type);
      },
    },
    resourceHints: false,
    static: {
      setHeaders(res) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      },
    },
  },
 
};

