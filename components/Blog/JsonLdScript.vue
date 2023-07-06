<template>
    <div />
</template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const props = defineProps({
    headline: String,
    description: String,
    image: String,
    datePublished: String,
    author: String,
    categorie: String,
    motscles: String

  })
  
  let script
  
  onMounted(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": props.headline,
      "description": props.description,
      "image": props.image,
      "datePublished": props.datePublished,
      "author": {
        "@type": "Person",
        "name": props.author
    },
        "publisher": {
        "@type": "Organization",
        "name": "Novadigital",
        "logo": {
        "@type": "ImageObject",
        "url": "https://votre-site-web.com/chemin/vers/logo.jpg"
        }
    },
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.novadigital.fr/blog/"
    },
    "articleSection": props.categorie,
    "keywords": props.motscles,
    "inLanguage": "fr-FR", 
    "potentialAction": [{
        "@type": "ReadAction",
        "target": ["https://www.novadigital.fr/blog/"]
    }],
    "sameAs": [
        "https://www.instagram.com/novadigital.fr/",
        "https://www.linkedin.com/company/agence-web-novadigital",
        "https://www.youtube.com/channel/UC0AKtJGUj_ZfyCGIasar32w",
        "https://www.facebook.com/Agence.novadigital/"
    ]

    }
    
    script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(jsonLd)
    document.head.appendChild(script)
  })
  
  onUnmounted(() => {
    if (script) {
      document.head.removeChild(script)
    }
  })
  </script>
  
  