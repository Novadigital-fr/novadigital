<template>
  <div>
    <ProjetHero
       text="Gellini"
       image ="/img/gellini/gellini1.png"
    />
    <ProjetPresentation
    projetReveal="Notre agence web a eu l'opportunité de travailler sur un projet passionnant de création d'un site e-commerce pour la marque de vêtements féminins, Gellini. Le défi était de concevoir un site à la hauteur de la réputation de la marque et de fournir une expérience de shopping en ligne unique pour les clients. Nous avons travaillé en étroite collaboration avec l'équipe de Gellini pour comprendre leurs besoins et leurs attentes, afin de créer un site qui reflète l'esthétique de la marque tout en offrant une navigation intuitive."
    />
   <a href="https://gellini.fr/">
        <Button class="bouton_projet" text="Site web" />
    </a>
 
    <ProjetDeuxieme
    image ="/img/gellini/gellini2.png"
    title ="Conception et développement sur mesure"
    p1="Nous avons commencé par travailler en étroite collaboration avec l'équipe de Gellini pour concevoir le design du site, en créant des maquettes pour chaque page. Nous avons pris en compte les commentaires et les suggestions de l'équipe pour nous assurer que le design reflète parfaitement leur vision."
    p2="Notre équipe de designers a créé un design sur mesure pour le site de Gellini en utilisant les dernières tendances de l'industrie et en s'inspirant de l'esthétique de la marque. Nous avons travaillé sur la structure de la page d'accueil, la navigation du site, la mise en page des pages produit et la conception des pages de paiement. Tout cela a été fait en gardant à l'esprit l'objectif de fournir une expérience utilisateur fluide et agréable."
    p3="Ensuite, notre équipe de développeurs a commencé à travailler sur le développement sur mesure du site. Nous avons créé un site convivial et facile à naviguer, mettant en valeur les produits de la marque tout en offrant une expérience de shopping en ligne exceptionnelle pour les clients."
    p4="Nous avons choisi une plateforme e-commerce de qualité pour répondre aux besoins de Gellini et avons personnalisé les fonctionnalités pour répondre aux besoins spécifiques de la marque. Nous avons intégré des options de filtrage de produits, de recherche, d'ajout au panier et de paiement sécurisé pour offrir une expérience utilisateur optimale."


    />
    <ProjetDeuxieme
    image ="/img/gellini/gellini3.png"
    title="Optimisation pour le référencement naturel"
    p1="Une fois le site lancé, nous avons travaillé sur l'optimisation pour le référencement naturel (SEO). Nous avons effectué des recherches sur les mots clés pertinents pour la marque et avons optimisé le site pour améliorer son classement dans les résultats de recherche."
    p2="Nous avons effectué une analyse approfondie de la concurrence et avons identifié les opportunités pour améliorer la présence en ligne de Gellini. Nous avons travaillé sur l'optimisation de la structure du site, la mise en place de balises META, la création de contenu de qualité et la construction de liens de qualité pour améliorer la notoriété de la marque en ligne."
    p3="Notre travail de référencement naturel a porté ses fruits rapidement, car le site de Gellini a commencé à apparaître en haut des résultats de recherche pour des termes pertinents. Cette visibilité accrue a permis à la marque de générer des ventes en ligne dès les premiers jours de lancement du site."
    />
    <ProjetDeuxieme
    image ="/img/gellini/gellini4.png"
    title="Résultats"
    p1="Grâce à notre travail, nous avons réussi à créer un site e-commerce exceptionnel pour la marque de vêtements Gellini. Le site est non seulement esthétiquement plaisant, mais il est également facile à utiliser et fonctionne parfaitement. Les visiteurs peuvent facilement naviguer sur le site, trouver les produits qu'ils cherchent et effectuer des achats en toute sécurité."
    p2="Nous avons également réussi à augmenter la visibilité de la marque en ligne grâce à notre travail de référencement SEO. Le site se classe maintenant en haut des résultats de recherche pour les mots-clés pertinents, ce qui a entraîné une augmentation des visites et des ventes pour la marque. Nous sommes fiers d'avoir pu aider Gellini à atteindre ses objectifs en ligne."

    />

  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});
useHead({
  title: "Projet de création de site e-commerce pour Gellini ",
  meta: [
    { name: 'description', content: "Projet de création d'un site e-commerce pour la marque de veletement gellini." }
  ],
  })
</script>

<style lang="scss" scoped>

</style>