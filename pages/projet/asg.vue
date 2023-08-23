<template>
    <div>
      <ProjetHero
         text="ASG"
         image ="/img/ASG/asg-1.png"
      />
      <ProjetPresentation
      projetReveal="Nous avons eu l’opportunité de travailler sur un projet captivant en développement le site ASG. Notre rôle principal a été axé sur le développement technique et la création d'une expérience en ligne optimale en utilisant les technologies modernes. "
      />
      <a href="https://www.alexander-strategy.com/">
        <Button class="bouton_projet" text="Site web" />
    </a>
      <ProjetDeuxieme
      image ="/img/ASG/asg-2.png"
      title ="Développement web dynamique"
      p1="Nous avons pris en charge le développement complet du site web “Alexander strategy group” en utilisant les technologies suivantes : Vue.js 3 et Nuxt.js 3. Ce sont des technologies reconnues pour leur capacité à créer des interfaces utilisateur réactives et performantes. Cela est très utilisé pour réaliser des sites internet dynamiques comme peu l’être ASG."
      p2="Grâce à son approche basée sur les composants, j'ai pu concevoir une architecture modulaire qui permet une maintenance simplifiée et une évolutivité aisée."
  
      />
      <ProjetDeuxieme
      image ="/img/ASG/ASG_3.png"
      title="Mis en place d’un formulaire"
      p1="Pour répondre aux besoins d'interaction avec les visiteurs du site, nous avons mis en œuvre une fonctionnalité spécifique. Nous avons créé un formulaire intuitif et convivial. Les utilisateurs peuvent désormais interagir avec ASG en soumettant leurs demandes et leurs informations directement via le formulaire en ligne, créant ainsi une communication fluide entre les parties."
     />
      <ProjetDeuxieme
      image ="/img/ASG/asg-4.png"
      title=""
      p1=""
  
      />
  
    </div>
</template>
  
  <script setup>
  definePageMeta({
    layout: "custom",
  });
  useHead({
  title: "Développement du site vitrine Alexander strategy group",
  meta: [
    { name: 'description', content: "Présentation du projet Alexander strategy group. Projet dont l'on était en charge du développement du site vitrine." }
  ],
  })
  </script>
  
  <style lang="scss" scoped>
  
  </style>