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
        "@id": "https://votre-site-web.com/chemin/vers/article"
    },
    "articleSection": props.categorie,
    "keywords": props.motscles,
    "articleBody": "Le corps complet de l'article ici..."    }
    
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
  
  