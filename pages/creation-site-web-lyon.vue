<template>
    <main>
      <!-- <TheHero> A Nuxt Content v2 Blog with Bulma </TheHero> -->
      <NosservicesHeader 
      text="Votre agence de création de site vitrine à Lyon"
      description="Notre agence web située à Lyon s’occupe de la conception ou refonte de site vitrine entièrement personnalisée afin de représenter au mieux l'image de votre entreprise. Cette expertise comprend le design de votre site, la création et le développement. Notre agence vous assure un site web unique et professionnel qui répondra à vos besoins et à ceux de vos utilisateurs. " 
       />
       
      <BackImage backImage ="/img/novagraphy/novagraphy3.png"/>
       <NosservicesReveal
       title_reveal="Création de site sur mesure"
      reveal="Notre agence web à Lyon vous propose des sites innovants et créatifs qui vous correspondent. Nous transposons votre société en une vitrine de marque en ligne. Novadigital vous accompagne tout au long de la création d'un site web jusqu’au référencement naturel SEO, pour garantir une vie longue terme à votre site vitrine. Il est important de l'alimenter régulièrement en terme de contenu pour le maintenir en forme et optimiser ses chances d’être visible." 
      />
      <BackImage backImage ="/img/studiodino/studiodino3.png"/>
      <NosservicesNotreplus
      title="Développement de votre site"
      sous_title1="La clé d'une site vitrine efficace"
      text1="Créer son site vitrine peut être fastidieux. C'est pour cela que nous mettons en oeuvre nos compétences pour vous aiguiller et vous accompagner dans la mise en place de votre visibilité en ligne. Au delà de participer à la création votre site web, nous nous plaçons en tant que consultant pour vous orienter dans les choix techniques en fonction de vos stratégies. La communication entre vous et nous est impérative et c'est celle-ci, qui pourra nous faire avancer ensemble. "
      sous_title2="Solution de site full code"
      text2="Nous vous proposons le développement de chaque page en full-code. Ceci présente plusieurs avantages tel que la personnalisation intégrale de la prestation. Ce service vous permet de personnaliser tous les aspects de votre site de manière efficace. Toutes les fonctionnalités peuvent être envisager pour répondre à vos clients. Une source infini de technique peuvent être installé pour booster et donner une plus value à votre site."
      sous_title3="Solution de site personnalisé avec Wordpress"
      text3="Notre agence vous propose également de développer votre site avec un CMS tel que Wordpress. En alliant CMS et code, la compatibilité des deux peut s'avérer très compétente en terme d'optimisation. En ajoutant du code dans Wordpress, il permet d'ajouter une grande personnalisation tout en gardant des interfaces graphiques faciles à utiliser. "
      />
       <NosservicesHorizontal 
       title1="Définir vos objectifs"
       text1="Avec un membre de l’agence digitale, nous définissons ensemble vos besoins et attentes afin d'en conclure des objectifs communs. Cette phase d'introduction nous est essentielle pour vous proposer le développement qui vous correspond au mieux. La communication est la clé de la réussite d'un projet. Pendant tout le long du projet, vous pouvez nous faire part d'informations ou changements autours de votre activité."
       title2="Création et webdesign du site web"
       text2="Chaque projet est unique. C'est pour cela que notre agence web effectue des recherche afin de bien comprendre votre future cible et ainsi vous présenter une solution de qualité. Par la suite, nous vous présenterons un webdesign sur mesure, adapté à nos recherche et briefs communs. Ce prototype est la première ébauche du projet. Cet outil va nous permettre à échanger autour du futur site web jusqu'à atteindre une prototype optimisé."
       title3="Développement du site internet"
       text3="L’intégration web est l’une des plus grandes étapes du projet. Elle consiste à développer votre site internet, grâce à l'utilisation d'une CMS ou en full-code. Nos développeurs experts se chargeront de coder votre site et de le mettre en ligne afin qu'il soit utilisable par tous les internautes. Si besoin, nous pouvons nous occuper de la gestion de l'hébergement de site."
       title4="Accompagnement référencement naturel SEO"
       text4="Nous développons votre site web en tenant compte du référencement. Pour des résultats concrets, nous vous accompagnons sur la durée, notamment pour vous permettre de vous positionner en tête des résultats de moteur recherche. Pour assurer une bonne performance, il est préférable de commencer l'optimisation Google dès la conception digitale de votre site internet. Cette présence et visibilité en ligne se traduire par une augmentation du trafic qualifié sur votre site web, donc de nouvelles opportunités commerciales."
       title5="Hébergement et maintenance du site web"
       text5="Créer un site internet inclut la question de l’hébergement. Nous sommes évidemment présent pour vous conseiller dans ce choix. Choisir un hébergeur adéquat est impératif pour une bonne expérience sur votre site. Un hébergeur bien optimisé garantie une navigation fluide en matière d'expérience et permet à ce que le site n'est d'accident à cause d'un éventuel surplus de trafic. Notre agence Novadigital s’occupent de la maintenance de votre site, des mises à jour récurrentes et assurent la protection et la sécurité de votre site internet."
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
    { name: 'description', content: "Novadigital, agence digitale spécialisée dans la création de site vitrine, site e-commerce et d’application mobile situé à Lyon et alentours " }
  ],
})

</script>

<style>

</style>