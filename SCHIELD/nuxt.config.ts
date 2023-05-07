
export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,
  
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
  
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      title: 'Schield Center ',
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
        src: "https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js",
        body: true,
      },
      {
        src: "https://www.gstatic.com/firebasejs/8.6.1/firebase-auth.js",
        body: true,
      },
      {
        src: "https://www.gstatic.com/firebasejs/ui/4.8.1/firebase-ui-auth.js",
        body: true,
      },
        {
        src: 'https://www.paypalobjects.com/donate/sdk/donate-sdk.js',
        body: true,
        charset: 'UTF-8'
      },
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://www.gstatic.com/firebasejs/ui/4.8.1/firebase-ui-auth.css",
      },
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
    css: [
        '@fortawesome/fontawesome-free/css/all.min.css'
    ],
    modules: ['@nuxtjs/tailwindcss', '@sidebase/nuxt-auth'],
    auth: {
        origin: process.env.ORIGIN,
        enableGlobalAppMiddleware: true
    },
  
    tailwindcss: {
      jit: true,
    },
  
    publicRuntimeConfig: {
      schoolLogo: '/images/SCHIELD-CENTER1.svg',
      schoolName: 'SCHIELD CENTER',
  
      schoolEmail: 'schieldcenter1@gmail.com',
      schoolTelephone: '+2547 1194 3579',
      schoolLocation: 'Noosiyan Rd off isinya namanga highway',
      schoolWhatsapp: '0737856908', 
      schoolFacebook: 'https://facebook.com/people/Schield-Centre/',
      schoolTwitter: 'https://twitter.com/',
      schoolInstagram: 'https://instagram.com/',
      schoolYoutube: 'https://youtube.com/',
    },
  
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
  }
  