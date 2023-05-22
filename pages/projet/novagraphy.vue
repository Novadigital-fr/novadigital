<template>
    <div>
      <ProjetHero
         text="novagraphy"
         image ="/img/novagraphy/novagraphy3.png"
      />
      <ProjetPresentation
      projetReveal="Le projet a consisté en la création d'un site web sur mesure pour le studio de photographie 'Novagraphy'. L'objectif principal était de concevoir un site web créatif, original et inspirant qui mettrait en avant le travail et le talent des photographes du studio."
      />
      <a href="https://alexisrittimann.com/">
        <Button class="bouton_projet" text="Site web" />
    </a>
      <ProjetDeuxieme
      image ="/img/novagraphy/novagraphy1.png"
      title ="Développement Créatif"
      p1="Tout d'abord, nous avons commencé par comprendre les besoins et les attentes du client en termes de design et de fonctionnalités. Nous avons également étudié les sites web d'autres studios de photographie pour identifier les meilleures pratiques et les tendances actuelles en matière de design."
      p2="Ensuite, nous avons commencé à travailler sur le développement créatif du site web. Nous avons proposé plusieurs concepts créatifs pour le design du site web, en utilisant des images inspirantes, des couleurs vibrantes et des effets visuels innovants. Nous avons travaillé en étroite collaboration avec les photographes de 'Novagraphy' pour nous assurer que le design du site web reflétait leur style et leur vision artistique."
      p3="Une fois le concept créatif validé par le client, nous avons procédé à la phase de conception du site web. Nous avons utilisé des outils modernes pour la création des maquettes et avons travaillé en étroite collaboration avec le client pour affiner les détails du design."  
  
      />
      <ProjetDeuxieme
      image ="/img/novagraphy/novagraphy2.png"
      title="Optimisation pour le référencement naturel"
      p1="Une fois la phase de conception terminée, nous avons procédé à la mise en production du site web. Nous avons utilisé les dernières technologies pour assurer la compatibilité avec les différents navigateurs web et les appareils mobiles."
      p2="Après la mise en production du site web, nous avons procédé à une phase de tests approfondis pour nous assurer que le site fonctionnait parfaitement et répondait aux exigences du client. Nous avons également effectué un travail de référencement SEO pour améliorer la visibilité du site web sur les moteurs de recherche."
      />
      <ProjetDeuxieme
      image ="/img/novagraphy/novagraphy4.png"
      title="Résultats"
      p1="Enfin, une fois que le site web a été terminé et validé par le client, nous avons assuré une formation complète pour permettre au client de gérer et de mettre à jour le site web de manière autonome."
      p2="Dans l'ensemble, le projet a été un succès et le client a été très satisfait du résultat final. Le site web est maintenant en ligne et permet au studio de photographie 'Novagraphy' de présenter son travail de manière créative et inspirante, en reflétant parfaitement leur vision artistique."
  
      />
  
    </div>
</template>
  
  <script setup>
  definePageMeta({
    layout: "custom",
  });
  useHead({
  title: "Création sur mesure d'un site sur mesure pour Novagraphy",
  meta: [
    { name: 'description', content: " Projet de création d'un site sur mesure pour l'entreprise novagraphy. " }
  ],
  })
  </script>
  
  <style lang="scss" scoped>
  
  </style>