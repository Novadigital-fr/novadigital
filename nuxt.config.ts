// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content','@nuxtjs/robots',],
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
          src: "https://www.googletagmanager.com/gtag/js?id=G-C0TSJ56BWV",
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C0TSJ56BWV');
          `,
          type: "text/javascript",
        },

      ],
      
    }
  },
  
  
})
