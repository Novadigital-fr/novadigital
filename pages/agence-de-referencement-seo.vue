<template>
    <main>
      <!-- <TheHero> A Nuxt Content v2 Blog with Bulma </TheHero> -->
      <NosservicesHeader 
      text="Votre agence de référencement SEO à Lyon"
      description="Dès la conception de sites, nous tenons compte du référencement naturel. Pour des résultats concrets, nous vous accompagnons sur la durée, notamment vous permettre de vous positionner en tête des résultats de recherche pour les termes les plus pertinents. Notre agence, située à Lyon, vous propose d’améliorer votre visibilité sur Internet grâce au référencement SEO" 
       image ="/img/novacharpente/novacharpente1.png"
       />
       <BackImage backImage ="/img/inflib/inflib3.png"/>

       <NosservicesReveal
      title_reveal="Augmenter sa visibilité "
      reveal="Le SEO est une stratégie à long terme qui nécessite un travail régulier et soutenu pour maintenir un bon positionnement sur les moteurs de recherche. En utilisant des techniques de référencement telles que la recherche de mots-clés, l'optimisation de contenu, la création de backlinks et l'amélioration de la structure de votre site web. Améliorer votre visibilité en ligne grâce au SEO peut vous aider à attirer des visiteurs qualifiés sur votre site web, améliorer votre positionnement sur les moteurs de recherche, augmenter vos chances de conversion et de vente, et offrir un retour sur investissement potentiellement plus élevé à long terme." 
      />
      <BackImage backImage ="/img/gellini/gellini4.png"/>
      <NosservicesNotreplus
      title="Pourquoi avoir un suivi SEO"
      sous_title1="Amélioration de la visibilité en ligne"
      text1="Le suivi SEO permet d'optimiser le site web pour les moteurs de recherche, ce qui peut améliorer sa visibilité en ligne. Les mots clés et les phrases clés peuvent être analysés et optimisés pour mieux se classer dans les résultats de recherche, ce qui peut entraîner une augmentation du trafic organique."
      sous_title2="Suivi de la concurrence"
      text2="Le suivi SEO permet de surveiller les performances des concurrents dans les résultats de recherche. Cela peut fournir des informations précieuses sur les stratégies de marketing numérique des concurrents et aider à identifier les opportunités pour améliorer le classement dans les résultats de recherche."
      sous_title3="Amélioration de l'expérience utilisateur"
      text3="Le suivi SEO peut aider à améliorer l'expérience utilisateur sur le site web en identifiant les pages qui ont un faible taux de rebond et un temps de chargement lent. En optimisant ces pages, l'expérience utilisateur peut être améliorée, ce qui peut entraîner une augmentation de la durée de visite et une réduction du taux de rebond."
      />
       <NosservicesHorizontal 
       title1="Définir vos objectifs"
       text1="Avec l’équipe de notre agence de référencement naturel, définissons ensemble les besoins et attentes afin d'en conclure des objectifs communs. Cette phase d'introduction nous est essentielle pour vous proposer le référencement qui vous correspond au mieux. Nous sommes ouverts à toutes vos interrogations concernant l’accompagnement SEO"
       title2="Recherche de vos mots-clefs SEO"
       text2="Chaque projet est unique. C'est pour cela que notre agence SEO effectue des recherches afin de bien comprendre votre domaine. Cela est indispensable pour vous proposer les mots-clefs adéquats à votre secteur d’activité. Si vous en possédez déjà un site web, nous élaborons un audit de votre site existant et examinons vos concurrents."
       title3="Elaboration de la stratégie de référencement"
       text3="Afin d’améliorer sa visibilité sur internet, nous vous proposons une stratégie personnalisée. Nous regardons ensemble ce qui est le plus avantageux en prenant en compte vos objectifs, votre secteur d’activité et notre expertise. Cette stratégie va vous permettre de maximiser votre référencement naturel"
       title4="Mise en place sur votre site"
       text4="La première partie de mise en place s’effectue sur du court terme, mais le plus grand travail se compte en plusieurs mois. C’est pourquoi, il nous tient à cœur de vous accompagner sur du long terme pour avoir des résultats plus optimaux tels que votre positionnement en tête des résultats de recherche."
       title5="Résultats du référencement naturel"
       text5="Le résultat du référencement naturel (SEO) peut se traduire par une augmentation du trafic qualifié sur votre site web, potentiellement de nouvelles opportunités commerciales et une augmentation du chiffre d’affaires. Cela varie essentiellement en fonction des objectifs validés en amont. Les résultats du référencement SEO apparaissent sur le long terme, c’est pourquoi nous vous accompagnons sur la durée."
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
  title: 'Votre agence de référencement naturel SEO - Novadigital',
  meta: [
    { name: 'description', content: "Notre agence web et de référencement naturel SEO situé à Lyon, développe votre site web avec une stratégie SEO et s’occupe de votre référencement" }
  ],
  })
  
  </script>
  
  <style>
  
  </style>