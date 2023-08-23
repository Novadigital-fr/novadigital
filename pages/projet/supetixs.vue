<template>
    <div>
      <ProjetHero
         text="Sup'etixs"
         image ="/img/supetixs/supetixs-4.png"
      />
      <ProjetPresentation
      projetReveal="Nous avons contribué de manière significative autour du lancement de l’école Sup’etixs. Nous avons pris en charge la conception, le développement et la mise en œuvre du site web complet à partir de zéro, tout en intégrant des fonctionnalités clé pour améliorer l'expérience utilisateur et faciliter la gestion des données client."
      />
      <a href="https://supetixs.fr/">
        <Button class="bouton_projet" text="Site web" />
    </a>
      <ProjetDeuxieme
      image ="/img/supetixs/supetixs-3.png"
      title ="Développement du site web from scratch"
      p1="En partenariat avec Studio Nineteen, une agence de communication, nous avons participé au design globale du site. Nous avons ensuite développé le site web en partant de zéro. Tout cela a impliqué la conception et la mise en place de l'architecture, du système de navigation, des pages et des éléments visuels. "
      />
      <ProjetDeuxieme
      image ="/img/supetixs/supetixs-2.png"
      title="Intégration d’un CRM HubSpot "
      p1="Pour optimiser la gestion des relations avec la clientèle, nous avons intégré de manière transparente le CRM Hubspot au site web. Cela permet une collecte efficace des données client, ainsi qu'une meilleure compréhension des besoins et des comportements des utilisateurs."
     />
      <ProjetDeuxieme
      image ="/img/supetixs/supetixs-1.png"
      title="Mis en place de fonctionnalités avancées"
      p1="Nous avons intégré des fonctionnalités interactives cruciales pour l'engagement des visiteurs. Les formulaires intégrés ont simplifié la collecte d'informations précieuses, tandis que le chat bot a offert aux utilisateurs une assistance en temps réel, renforçant ainsi leur confiance dans les services offerts par Sup’etixs."
      />
  
    </div>
</template>
  
  <script setup>
  definePageMeta({
    layout: "custom",
  });
  useHead({
  title: "Développement du site vitrine Sup'etixs",
  meta: [
    { name: 'description', content: "Présentation du projet Sup'etixs. Projet dont l'on était en charge du développement du site vitrine." }
  ],
  })
  </script>
  
  <style lang="scss" scoped>
  
  </style>