<template>
    <main>
      <!-- <TheHero> A Nuxt Content v2 Blog with Bulma </TheHero> -->
      <NosservicesHeader 
      text="Votre agence de création de site web à Lyon"
      description=" Notre agence web située à Lyon s’occupe de la réalisation de site internet personnalisée pour représenter aux mieux votre entreprise. L’expertise de l’agence comprend la création de site web unique et professionnel qui répondra aux besoins spécifiques de vos utilisateurs. Du webdesign au développement, nous faisons de la conception de site vitrine et e-commerce." 
       />
       
      <BackImage backImage ="/img/novagraphy/novagraphy3.png"/>
       <NosservicesReveal
       title_reveal="Création de site sur mesure"
      reveal="L’agence web à Lyon qui vous propose des sites innovants et créatifs qui répondent aux besoins de vos utilisateurs. Nous répondons à vos problématiques en vous créant une vitrine virtuelle. Novadigital vous accompagne tout au long de la création de votre site web jusqu’au référencement SEO pour garantir une vie longue terme à votre site vitrine. Il est important d’alimenter régulièrement en termes de contenu votre site web pour le maintenir en forme et optimiser ses chances d’être visible." 
      />
      <BackImage backImage ="/img/studiodino/studiodino3.png"/>
      <NosservicesNotreplus
      title="Développement de votre site"
      sous_title1="Création de site full code"
      text1="L'utilisation de plates-formes de création de sites web ou de CMS peut souvent entraîner une surcharge de code et des temps de chargement plus lents. En écrivant tout le code du site web, il est possible d'optimiser chaque ligne de code pour des performances optimales, ce qui se traduit par un temps de chargement plus rapide et une expérience utilisateur plus fluide."
      sous_title2="Un site web sans limite"
      text2="En écrivant tout le code du site web, il n'y a pas de limite à la manière dont le site web peut être amélioré et mis à jour. Les développeurs peuvent facilement ajouter de nouvelles fonctionnalités et effectuer des mises à jour pour garantir que le site web reste à jour et pertinent."
      sous_title3="Webdesign unique"
      text3="Les plates-formes de création de sites web et les CMS offrent souvent des options limitées en termes de personnalisation. En écrivant tout le code du site web, il est possible de personnaliser chaque aspect du site web en fonction des besoins spécifiques de l'utilisateur. Cela permet de créer un site web unique et personnalisé."
      />
       <NosservicesHorizontal 
       title1="Définir vos objectifs"
       text1="Avec un membre de l’agence digitale, nous définissons ensemble vos besoins et attentes afin d'en conclure des objectifs communs. Cette phase d'introduction nous est essentielle pour vous proposer le développement qui vous correspond au mieux. Nous sommes ouverts à toutes vos interrogations concernant la création de votre site web."
       title2="Création et webdesign du site web"
       text2="Chaque projet est unique. C'est pour cela que notre agence web effectue des recherches afin de bien comprendre votre future cible. Par la suite, nous vous présenterons un webdesign sur mesure, adapté au brief vu en amont. Ce prototype, personnalisé de votre futur site internet, est la première ébauche du projet."
       title3="Développement du site internet"
       text3="L’intégration web, l’une des grandes étapes de votre projet. Cela consiste à développer votre site internet, gérer votre nom de domaine, puis mettre votre site en ligne afin qu'il soit utilisable. Vous pouvez maintenant accéder à votre site web sur les moteurs de recherche."
       title4="Accompagnement référencement SEO"
       text4="Nous développons votre site web en tenant compte du référencement. Pour des résultats concrets, nous vous accompagnons sur la durée, notamment pour vous permettre de vous positionner en tête des résultats de recherche pour les termes les plus pertinents. Le référencement naturel (SEO) peut se traduire par une augmentation du trafic qualifié sur votre site web, donc de nouvelles opportunités commerciales."
       title5="Hébergement et maintenance du site web"
       text5="Créer un site internet inclut la question de l’hébergement. Nous sommes évidemment présentes pour vous conseiller. Choisir un hébergeur adéquat est impératif pour une bonne expérience sur votre site. Les équipes de l’agence Novadigital s’occupent également des mises à jour récurrentes et assurent la protection et la sécurité de votre site internet."
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
  title: 'Votre agence de création de site web à Lyon - Novadigital',
  meta: [
    { name: 'description', content: "Novadigital, agence digitale spécialisée pour création de site vitrine, site e-commerce et d’application mobile situé à Lyon et alentours " }
  ],
})

</script>

<style>

</style>