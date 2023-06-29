import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    hostname: 'https://www.novadigital.fr'
  })

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: 'monthly'
    })
  }
  sitemap.write({
    url: '/',
    changefreq: 'monthly'
  })
  sitemap.write({
    url: '/creation-site-web-lyon',
    changefreq: 'monthly'
  })
  sitemap.write({
    url: '/creation-de-site-e-commerce',
    changefreq: 'monthly'
  })
  sitemap.write({
    url: '/agence-de-referencement-seo',
    changefreq: 'monthly'
  })
  sitemap.write({
    url: '/agence-video-par-drone',
    changefreq: 'monthly'
  })
  sitemap.write({
    url: '/projet/novagraphy',
    changefreq: 'monthly'
  })
  sitemap.write({
    url: '/projet/novacharpente',
    changefreq: 'monthly'
  })
  sitemap.write({
    url: '/projet/gellini',
    changefreq: 'monthly'
  })
  sitemap.write({
    url: '/projet/novalinguo',
    changefreq: 'monthly'
  })
  sitemap.write({
    url: '/projet/studiodino',
    changefreq: 'monthly'
  })
  sitemap.write({
    url: '/projet/inflib',
    changefreq: 'monthly'
  })
  sitemap.end()

  return streamToPromise(sitemap)
})
