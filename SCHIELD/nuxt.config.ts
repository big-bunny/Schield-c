
export default {
    
    ssr: false,
  
    
    target: 'static',
  
    
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
   ,
        {
        src: 'https://www.paypalobjects.com/donate/sdk/donate-sdk.js',
        body: true,
        charset: 'UTF-8'
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
    
  
    
    
  
    
    plugins: [],
  
    
    components: true,
  
    
    buildModules: [
      
      '@nuxtjs/eslint-module',
      
      '@nuxtjs/tailwindcss',
    ],
  
    
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
  
  
    
    build: {},
    
  }
  