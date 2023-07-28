// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content','@nuxtjs/robots','@nuxt/image','nuxt-schema-org',],
  content: {
    highlight: {
      themes: 'github-light',
    }
  },
  build: {
    transpile: ['gsap'],
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.novadigital.fr/',
    }
  },
  // ...
  schemaOrg: {
    host: 'https://www.novadigital.fr/',
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      title: 'Agence web | Novadigital ',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'Agence web lyon Novadigital' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' }],
      script: [
        {  src: "//js-eu1.hs-scripts.com/26471288.js"},
        {
          async: true,
          src: "https://www.googletagmanager.com/gtag/js?id=G-8G1Q0GP79E",
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8G1Q0GP79E');
          `,
          type: "text/javascript",
        },

      ],
      
    }
  },
  
  
})
