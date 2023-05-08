<template>
  <main>
    <!-- <TheHero> A Nuxt Content v2 Blog with Bulma </TheHero> -->
    <NosservicesHeader 
    text="Votre agence de création de site e-commerce à Lyon"
    description="Notre agence web, située à Lyon, s’occupe de la réalisation de site e-commerce personnalisé pour représenter au mieux votre entreprise. C’est-à-dire la création de boutique en ligne. L’expertise de l’agence comprend la création de site e-commerce unique et professionnelle qui répondra aux besoins spécifiques de vos utilisateurs. Du webdesign, parcours client et utilisateur, intégration de la base de données, développement web, nous vous accompagnement tout au long de la création de la boutique en ligne." 
     image ="/img/gellini/gellini2.png"
     />
     <BackImage backImage ="/img/gellini/gellini1.png"/>
     <NosservicesReveal
     title_reveal="Création de site sur mesure"
      reveal="L’agence web à Lyon qui vous propose des sites innovants et créatifs qui répondent aux besoins de vos utilisateurs. Grâce à Novadigital, vous allez pouvoir digitaliser votre boutique, en ayant un site e-commerce dont vous pouvez posséder l’entière gestion. Nous vous accompagnons tout au long de la création de votre site e-commerce jusqu’à la gestion de votre boutique. Nous vous accompagnons dans la gestion de vos produits, et vous formons pour être totalement indépendants." 
      />
      <BackImage backImage ="/img/gellini/gellini2.png"/>
      <NosservicesNotreplus
      title="Développement de votre site e-commerce"
      sous_title1="Création de site full code"
      text1="Lorsque les clients naviguent sur un site e-commerce, la rapidité et la performance sont essentielles pour leur expérience utilisateur. En écrivant tout le code du site e-commerce, il est possible d'optimiser chaque ligne de code pour des performances optimales, ce qui se traduit par un temps de chargement plus rapide et une expérience utilisateur plus fluide."
      sous_title2="Un site e-commerce sans limite"
      text2=" Les plates-formes de création de sites web et les CMS ont des limites en termes de personnalisation et d'évolution, ce qui peut rendre difficile la maintenance du site e-commerce. En écrivant tout le code du site e-commerce, il n'y a pas de limite à la manière dont le site peut être amélioré et mis à jour. Les développeurs peuvent facilement ajouter de nouvelles fonctionnalités, effectuer des mises à jour de sécurité et de maintenance pour garantir que le site reste à jour et sécurisé."
      sous_title3="Webdesign unique"
      text3="Les clients recherchent une expérience d'achat en ligne personnalisée, et cela peut être difficile à réaliser avec des plates-formes de création de sites web et des CMS. En écrivant tout le code du site e-commerce, il est possible de personnaliser chaque aspect du site en fonction des besoins spécifiques de l'utilisateur. Cela permet de créer un site e-commerce unique et personnalisé qui se démarque de la concurrence."
      />
     <NosservicesHorizontal 
     title1="Définir vos objectifs"
     text1="Avec un membre de l’agence digitale, nous définissons ensemble vos besoins et attentes afin d'en conclure des objectifs communs. Cette phase d'introduction nous est essentielle pour vous proposer le développement qui vous correspond au mieux. Nous sommes ouverts à toutes vos interrogations concernant la création de votre site web"
     title2="Création et webdesign du site web"
     text2="Chaque projet est unique. C'est pour cela que notre agence web effectue des recherches afin de bien comprendre votre future cible. Par la suite, nous vous présenterons un webdesign sur mesure, adapté au brief vu en amont. Ce prototype, personnalisé de votre futur site internet, est la première ébauche du projet."
     title3="Développement du site e-commerce"
     text3="L’intégration web, l’une des grandes étapes de votre projet. Cela consiste à développer votre site internet, intégrer votre base de données, gérer votre nom de domaine, puis mettre votre site en ligne afin qu'il soit utilisable. Vous pouvez maintenant accéder à votre site web sur les moteurs de recherche."
     title4="Gestion du site e-commerce"
     text4="Nous vous accompagnons tout au long de la création de votre site e-commerce jusqu’à la gestion de votre boutique. Nous mettons en place un système de gestion de produit, de stock, de prix pour avoir une gestion complète de votre e-commerce. Nous vous accompagnons dans cette gestion et vous pouvons vous former pour être totalement indépendant sur la plateforme."
     title5="Accompagnement référencement SEO"
     text5="Nous développons votre site web en tenant compte du référencement. Pour des résultats concrets, nous vous accompagnons sur la durée, notamment pour vous permettre de vous positionner en tête des résultats de recherche pour les termes les plus pertinents. Le référencement naturel (SEO) peut se traduire par une augmentation du trafic qualifié sur votre site web, donc de nouvelles opportunités commerciales."
     />
     <PresentationProjet/>
     <BlogArticleDroite/>

  </main>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});
useHead({
title: 'Votre agence de création de site e-commerce à Lyon - Novadigital',
meta: [
  { name: 'description', content: "Novadigital est spécialisée dans la création et dans le développement du site e-commerce. C’est-à-dire la création de boutique en ligne. Notre agence web agit sur la ville de Lyon et ses alentours. Notre agence web met à disposition son expertise pour concevoir des boutiques en ligne qui reflètent votre identité et qui répondent aux besoins spécifiques de vos utilisateurs. Du webdesign, intégration de la base de données, développement web, parcours client et utilisateur. Comment notre agence procède ? Nous vous présenterons un webdesign sur mesure, adapté au brief vue en amont. Ce prototype, personnalisé de votre futur site internet, est la première ébauche du projet. Cela consiste à développer votre site internet, gérer votre nom de domaine, votre hébergement, puis mettre votre site en ligne afin qu'il soit utilisable. Créer votre site e-commerce grâce à notre agence web situé à Lyon vous permettra de vendre efficacement vos produits en ligne. Novadigital vous offre une solution personnalisée de création afin de maximiser l’expérience de votre boutique e-commerce et de grossir vos ventes." }
],
})

</script>

<style>

</style>