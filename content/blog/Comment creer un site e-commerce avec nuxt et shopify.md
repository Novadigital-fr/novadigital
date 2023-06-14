---
title: Comment créer un site e-commerce shopify avec nuxt js (avec une API) ?
description: Pour créer un site e-commerce, vous pouvez utiliser Nuxt et Shopify pour créer une plate-forme performante et facile à utiliser. 
image: /img/blog/DEV-nuxt-et-shopify/nuxt-3-shopify.png
---


# Comment créer un site e-commerce shopify avec nuxt js (avec une API) ?

![Nuxt v3 avec shopify](/img/blog/DEV-nuxt-et-shopify/nuxt-3-shopify.png)

Avec l'essor continu des achats en ligne, de plus en plus d'entreprises cherchent à créer leur propre site e-commerce. Si vous êtes l'un de ceux qui cherchent à créer un site e-commerce en 2023, vous pourriez envisager d'utiliser Nuxt et Shopify pour créer une plate-forme performante et facile à utiliser. Dans cet article, nous allons vous expliquer comment procéder.

Nuxt est un framework open source pour le développement d'applications web basées sur Vue.js. Shopify, quant à lui, est une plate-forme e-commerce populaire qui permet aux entreprises de créer leur propre boutique en ligne. En utilisant Nuxt avec Shopify, vous pouvez créer un site e-commerce puissant et hautement personnalisable.

<br>

Voici les étapes à suivre pour créer un site e-commerce avec Nuxt et Shopify en 2023:

## Étape 1 : Configuration de votre boutique Shopify

La première étape consiste à créer un compte Shopify. Cela vous permettra de créer votre boutique en ligne, d'ajouter des produits, de traiter les paiements, etc. Shopify propose différents plans pour répondre aux besoins de toutes les entreprises, des petites aux grandes.

1. Créez un compte sur Shopify et configurez votre boutique en suivant les instructions sur leur site web.
2. Une fois votre boutique configurée, accédez à votre tableau de bord Shopify.

Vous pouvez commencer à configurer votre boutique en ligne. Cela implique la personnalisation de votre site, la configuration des options de paiement et d'expédition, et l'ajout de produits.

![Création shopify avec nuxt](/img/blog/DEV-nuxt-et-shopify//nuxtjs-shopify.png)

<br>

## Étape 2: Création d'une clé API Shopify

1. Dans votre tableau de bord Shopify, cliquez sur "Paramètres" dans le coin inférieur gauche, puis sélectionnez "Applications".
2. Dans la section "API clients et clés", cliquez sur "Créer un jeton d'accès".
3. Donnez un nom à votre jeton d'accès et assurez-vous que les autorisations nécessaires sont sélectionnées pour l'accès à l'API.
4. Cliquez sur "Générer un jeton d'accès" et copiez la clé générée.

Si besoin, vous pouvez consulter [la documentation de Shopify sur les API.](https://www.patreon.com/shopifydeveloper)

![Nuxt et shopify](/img/blog/DEV-nuxt-et-shopify/shopify-nuxt.png)


<br><br>

## Étape 3: Créez un nouveau projet Nuxt

1. Installez Nuxt en utilisant la commande **`npx create-nuxt-app`** ou **`yarn create nuxt-app`** dans votre terminal, puis suivez les instructions pour configurer votre projet.
    
    ```js
    npx create-nuxt-app my-shop
    ```
    
2. Une fois votre projet créé, ouvrez le fichier **`nuxt.config.js`**.
3. Dans la section **`modules`**, ajoutez le module **`@nuxtjs/axios`** pour effectuer des requêtes HTTP.

Puis configurez l’API de shopify dans votre projet Nuxt

4. Créez un fichier **`.env`** à la racine de votre projet Nuxt.
5. Dans ce fichier **`.env`**, ajoutez la clé d'API Shopify que vous avez générée précédemment :
    
    ```js
    makefileCopy code
    SHOPIFY_API_KEY=votre_clé_d'API
    
    ```
    

6. Dans le fichier **`nuxt.config.js`**, ajoutez la configuration suivante pour utiliser l'API Shopify :
    
    ```js
    javascriptCopy code
    require('dotenv').config();
    
    export default {
      // ...
      env: {
        shopifyApiKey: process.env.SHOPIFY_API_KEY
      },
      // ...
    }
    
    ```
    
  
<br><br>


## Étape 4 : Utilisation de l'API Shopify dans votre projet Nuxt

1. Créez un fichier dans le dossier **`plugins`** de votre projet Nuxt, par exemple **`shopify-api.js`**.
2. Dans ce fichier, ajoutez le code suivant pour configurer l'API Shopify :
    
    ```js
    javascriptCopy code
    import axios from 'axios';
    
    export default ({ env }) => {
      axios.defaults.baseURL = `https://${env.shopifyApiKey}.myshopify.com/api/2021-04`;
      axios.defaults.headers.common['X-Shopify-Storefront-Access-Token'] = env.shopifyStorefrontAccessToken;
    };
    
    ```
    
    Notez que vous devrez remplacer **`2021-04`** par la version de l'API Shopify que vous souhaitez utiliser.
    
3. Dans le fichier **`nuxt.config.js`**, ajoutez le plugin dans la section **`plugins`** :
    
    ```js
    javascriptCopy code
    export default {
      // ...
      plugins: [
        // ...
        { src: '~/plugins/shopify-api', ssr: false },
        // ...
      ],
      // ...
    }
    ```
    
<br>



## Étape 5: Personnalisez votre site Nuxt

Une fois que vous avez connecté votre site Nuxt à votre boutique Shopify, vous pouvez personnaliser votre site en fonction de vos besoins. Cela peut inclure la conception de votre site, l'ajout de fonctionnalités supplémentaires et l'optimisation des performances de votre site.

En utilisant Nuxt, vous pouvez facilement personnaliser le design de votre site en utilisant des composants Vue.js. Vous pouvez également ajouter des fonctionnalités supplémentaires en installant des packages NPM et en les intégrant à votre site Nuxt. Les packages NPM couramment utilisés pour les sites e-commerce incluent vue-stripe-elements-plus, vue-paypal-checkout et vue-carousel.

Enfin, pour optimiser les performances de votre site, vous pouvez utiliser des techniques telles que le chargement paresseux des images, la mise en cache de vos pages et la compression de vos fichiers CSS et JavaScript.


![Shopify et nuxtjs](/img/blog/DEV-nuxt-et-shopify/nuxt-shopify.png)


<br>

---

## Vous avez des questions sur la configuration de Nuxt avec l’API Shopify ?

### Qu'est-ce que le fichier **`.env`** et pourquoi en avons-nous besoin ?

Le fichier **`.env`** est un fichier de configuration qui stocke des variables d'environnement pour votre application. Dans le contexte de ce tutoriel, nous l'utilisons pour stocker la clé API Shopify de manière sécurisée. En utilisant le package **`dotenv`**, nous pouvons accéder à ces variables d'environnement dans notre code Nuxt.

### Comment puis-je effectuer des requêtes vers l'API Shopify depuis mon projet Nuxt ?

En utilisant le module **`@nuxtjs/axios`**, vous pouvez effectuer des requêtes HTTP vers l'API Shopify. Une fois que vous avez configuré le module dans votre projet Nuxt et défini l'URL de base et les en-têtes appropriés pour l'API Shopify, vous pouvez utiliser **`axios`** pour effectuer des appels à l'API Shopify depuis vos pages et composants.

### Existe-t-il des ressources supplémentaires pour approfondir mes connaissances sur Nuxt et l'API de Shopify ?

Oui, il existe de nombreuses ressources disponibles. Vous pouvez consulter la documentation officielle de [Nuxt](https://nuxtjs.org) et de [Shopify](https://shopify.dev/api) pour obtenir des informations détaillées. Il existe également des tutoriels, des vidéos et des exemples de projets disponibles en ligne pour vous aider à approfondir vos connaissances et votre compréhension.