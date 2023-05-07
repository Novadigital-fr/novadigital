<template>
    <main>
      <!-- <TheHero> A Nuxt Content v2 Blog with Bulma </TheHero> -->
      <NosservicesHeader 
      text="Votre agence video par drone"
      description="Notre agence de vidéo par drone est spécialisée dans la production de vidéos aériennes uniques et captivantes. Nous sommes fiers de fournir à nos clients des vidéos aériennes sur mesure qui répondent à leurs besoins spécifiques. Que ce soit pour des projets de marketing, des événements spéciaux, des vidéos promotionnelles, ou simplement pour capturer des moments inoubliables, notre équipe est là pour vous aider à réaliser votre vision." 
       image ="/img/novacharpente/novacharpente1.png"
       />
       <video class="Video-principal" autoplay playsinline muted loop>
      <source src="../assets/img/video-drone.mp4" type=video/mp4>
         </video>
      <NosservicesReveal
      reveal="Nos vidéos aériennes en drone offrent une visualisation immersive et détaillée des lieux, offrant ainsi une perspective à la fois plus large et plus détaillée. Nous sommes en mesure de capturer des images aériennes spectaculaires de votre propriété, entreprise ou événement, aidant à susciter l'intérêt des spectateurs et à rendre votre promotion plus captivante et mémorable." 
      />
      <BackImage backImage ="/img/drone1.jpg"/>
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
    </main>
</template>
  
  <script setup>
  definePageMeta({
  layout: "custom",
});
  useHead({
  title: 'Votre agence de référencement naturel SEO - Novadigital',
  meta: [
    { name: 'description', content: " Notre agence de référencement naturel SEO situé à Lyon développe votre site web en tenant compte du SEO afin que vous ayez une bonne visibilité sur les moteurs de recherche. Dès la conception du site, nous tenons compte du référencement naturel. Notre agence web agit sur la ville de Lyon et ses alentours. L’agence de référencement intervient également sur des sites existants, afin de référencer votre site web pour votre cible. L’agence de référencement naturel SEO Novadigital développe votre site web en tenant compte du référencement naturel. Pour des résultats concrets, nous vous accompagnons sur la durée, notamment pour vous permettre d’être positionné en tête des résultats de recherche pour les termes les plus pertinents. Le résultat du référencement naturel (SEO) peut se traduire par une augmentation du trafic qualifié sur votre site web, potentiellement de nouvelles opportunités commerciales et une augmentation du chiffre d’affaires. Nous sommes ouverts à toutes vos interrogations concernant l’accompagnement SEO." }
  ],
  })
  
  </script>
  
  <style scoped>
  .Video-principal {
    background-color: var(--color-bg);
    padding: 5vh 1%;
    width: 100%;
    margin-bottom: -20px;
    }
  </style>