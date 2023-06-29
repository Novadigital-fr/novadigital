<template>
    <div>
      <ProjetHero
         text="inf-lib"
         image ="/img/inflib/inflib4.png"
      />
      <ProjetPresentation
      projetReveal="Le projet a consisté en la création d'un site web sur mesure pour le cabinet d'infirmières libérales 'Inf-Lib'. L'objectif principal était de concevoir un site web moderne, attractif et facile à naviguer, qui présenterait les services proposés par le cabinet et permettrait aux patients de prendre rendez-vous en ligne."
      />
      <a href="https://inf-lib.fr/">
        <Button class="bouton_projet" text="Site web" />
    </a>
      <ProjetDeuxieme
      image ="/img/inflib/inflib1.png"
      title ="Conception et développement sur mesure"
      p1="Le déroulement du projet s'est décomposé en plusieurs étapes clés. Tout d'abord, nous avons commencé par comprendre les besoins et les attentes des infirmières en termes de design et de fonctionnalités. Nous avons ensuite élaboré un cahier des charges détaillé qui a été validé par les infirmières avant de commencer la phase de conception."
      p2="La phase de conception a consisté en la création d'un design graphique unique et adapté aux besoins des infirmières. Nous avons utilisé des outils modernes pour la création des maquettes et avons travaillé en étroite collaboration avec les infirmières pour affiner les détails du design."
  
      />
      <ProjetDeuxieme
      image ="/img/inflib/inflib2.png"
      title="Optimisation pour le référencement naturel"
      p1="Une fois la phase de conception terminée, nous avons procédé à la mise en production du site web. Nous avons utilisé les dernières technologies pour assurer la compatibilité avec les différents navigateurs web et les appareils mobiles."
      p2="Après la mise en production du site web, nous avons procédé à une phase de tests approfondis pour nous assurer que le site fonctionnait parfaitement et répondait aux exigences des infirmières. Nous avons également effectué un travail de référencement SEO pour améliorer la visibilité du site web sur les moteurs de recherche."
      p3="Enfin, une fois que le site web a été terminé et validé par les infirmières, nous avons assuré une formation complète pour permettre aux infirmières de gérer et de mettre à jour le site web de manière autonome."
      />
      <ProjetDeuxieme
      image ="/img/inflib/inflib3.png"
      title="Résultats"
      p1="Dans l'ensemble, le projet a été un succès et les infirmières ont été très satisfaites du résultat final. Le site web est maintenant en ligne et permet au cabinet d'infirmières libérales 'Inf-Lib' de présenter ses services de manière professionnelle et attractive, tout en offrant la possibilité aux patients de prendre rendez-vous en ligne."
      />
  
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    layout: "custom",
  });
  useHead({
  title: "Création sur mesure d'un site vitrine pour inf-lib",
  meta: [
    { name: 'description', content: " Projet de création d'un site vitrine pour inf-lib " }
  ],
  })
  </script>
  
  <style lang="scss" scoped>
  
  </style>