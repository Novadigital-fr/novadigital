---
title: Comment installer Wordpress en local en 2023 ?
description: Voici comment installer Wordpress en local sur votre ordinateur. L’installation de wordpress en local n’a jamais été aussi simple ! L’installation avec Xampp, wamp ou mamp.
image: /img/blog/DEV-installer-wordpress-2023/wordpress-en-local.png
date: "2023-06-09"
author: "Alexis Rittimann"
categorie: "Developpement"
motscles: "comment installer wordpress en local, comment installer wordpress"
---

# Comment installer Wordpress en local en 2023 ?

![Exemple d’un site web conçu avec le CMS Wordpress](/img/blog/DEV-installer-wordpress-2023/wordpress-en-local.png)


Si vous êtes un blogueur débutant ou un développeur qui souhaite créer un nouveau site, WordPress est une solution formidable. La version la plus récente de WordPress nécessite des exigences minimales pour être installée sur un serveur web, il n'y a donc rien de plus simple que d'installer wordpress en local.

Si vous voulez expérimenter et tester WordPress avant de le mettre en ligne votre site web, vous pouvez l'installer wordpress sur votre ordinateur en entamant une installation avec un serveur local web tel que Wamp, Xampp ou Mamp.

Dans cet article, nous allons vous guider étape par étape pour installer manuellement WordPress en local sur votre environnement et tout ça, gratuitement !

<br>

## Qu’est-ce que Wordpress ?

WordPress est une plateforme populaire qui vous permet de créer des sites internet qui fonctionne correctement sans utiliser de connaissances techniques en développement web. Cet outil vous permet une gestion efficace de votre contenu en quelques clic grâce au drag and drop et aux différents modules disponibles en téléchargement.

Wordpress est adapté pour des designers, développeurs, comme pour les débutants ! C'est une super alternative pour créer un site internet.

<br>

## Pourquoi faire une installation Wordpress en local ?

Travailler sur WordPress en local présente de nombreux avantages. Cette étape permet de procéder tester votre site en toute tranquillité. En installant WordPress en local, vous pouvez expérimenter différentes configuration, thèmes et plugins sans risquer de perturber votre site en ligne. Wordpress étant un environnement open-source, permet à quiconque de procédé à l'installation manuelle sur son propre ordinateur. Automatiquement, c'est un avantage clé que possède le CMS comparé plateforme tel que Prestashop, Wix, Webflow... qui non seulement n'est pas gratuit, et demande que de travailler directement sur l'hébergeur de ses CMS-ci.

Grâce à ce tutoriel, vous allez suivre le guide des grandes ligne à exécuter pour installer Wordpress sur votre machine.

<br>

## 1. Télécharger et installer un logiciel de serveur web

La première étape de ce guide est la clé pour que tout le déroulement s'effectue au mieux. Il est important de comprendre que cela nécessite l'utilisation d'un logiciel de serveur web.

### Qu'est-ce qu'un serveur web ?

Un serveur web comme MAMP est une application qui permet de créer un environnement de développement local pour la création et le test de sites web. Le serveur écoute les demandes faites par les navigateurs web (comme Chrome, Firefox, etc.) et envoie les fichier nécessaires pour afficher les pages web. Il interprète les requêtes HTTP ou HTTPS et renvoie les réponses appropriées, comme les fichier HTML, CSS, JavaScript, images, etc.

Vous aurez également besoin de PHP, Apache et MySQL. Php permet de gérer tout le back-end du site. C'est donc indispensable pour installer wordpress.

L'installation de ces éléments est une tâche relativement simple, et nous allons vous guider tout au long du processus.

### L'installation d'un serveur web

Comme annoncé plus haut, la première étape pour l’installation WordPress en local est de télécharger et d'installer un logiciel de serveur web. Il existe plusieurs options, mais nous vous recommandons d'utiliser WAMP, MAMP ou XAMPP. Ce sont des logiciels sont gratuits et faciles à installer pour gérer son site local.

Voici les avantages de chaque outil, et vous pouvez cliquer automatiquement sur le serveur web qui correspond au mieux à votre environnement pour lancer son téléchargement :

#### Pour Windows : WAMP

Si vous utilisez Windows, vous pouvez télécharger [WAPM](https://www.wampserver.com/) en visitant le site officiel. Cliquez sur le bouton de téléchargement, choisissez la dernière version, et suivez les instructions pour installer le fichier.

#### Pour Mac : MAMP

Si vous utilisez un Mac, vous pouvez télécharger [MAMP](https://www.mamp.info/en/windows/) en visitant le site officiel. Cliquez sur le bouton de téléchargement, choisissez la dernière version, et suivez les instructions pour installer le fichier.

#### Pour les deux : XAMPP

Si vous utilisez Windows, Mac, ou Linux, vous pouvez télécharger [WAMPP](https://www.apachefriends.org/fr/index.html) en visitant le site officiel. Il suffit d'un clic pour lancer le téléchargement. Choisissez votre système d'exploitation, choisissez la dernière version et suivez les instructions pour installer le fichier.

Il existe d'autres serveurs web tel que [Local](https://localwp.com/), nous avons fait [un tutoriel vidéo spécifique](https://www.youtube.com/watch?v=YXsdWHr93n4&t=455s) que vous pouvez consulter dès maintenant !

<br>

## 2. Télécharger WordPress

Une fois que vous avez installé votre logiciel de serveur web, il vous suffit de vous rendre sur le site officiel de WordPress org et de télécharger le fichier au format zip.

Vous allez obtenir par défaut un fichier au format zip. Il faudra l'extraire manuellement.
Pensez bien à télécharger la [dernière version de WordPress](https://fr.wordpress.org/download/) !

![télécharger wordpress en local](/img/blog/DEV-installer-wordpress-2023/comment-installer-wordpress-en-local.png)

<br>

## 3. Ouvrez votre serveur web

Que vous utilisez Mamp, Wamp ou n'importe quel serveur, vous pouvez l'exécuter. Il est important de le lancer "en tant qu'administrateur" pour que tout fonctionne correctement (cela ne se fait pas automatiquement malheureusement !).

Vérifier que votre serveur est bien activé.
Par exemple, sur Wamp vous pouvez visualiser l'état de votre serveur en un coup d'oeil. En bas de votre ordinateur se trouve l'icône de Wamp. Il doit être impérativement de couleur verte. Si l’icône est de couleur orange ou rouge, c’est qu’il y a un problème avec votre serveur.

Il faudra alors redémarrer l'application et si le problème persiste c'est qu'il y a du avoir une erreur dans le téléchargement, il faudrait alors le désinstaller et procéder à la réinstallation du système.

<br>

## 4. Configurer vos dossiers

Maintenant que vous avez téléchargé WordPress et ouvert votre serveur web, nous allons placé le dossier Wordpress pour pouvoir créer un nouveau projet.
- Aller dans le dossier "téléchargement"
- Extrayez le fichier ZIP de WordPress
- Copier votre fichier Wordpress


![installer wordpress en local](/img/blog/DEV-installer-wordpress-2023/site-wordpress.png)


- Allez dans le dossier de votre serveur web 
- Aller dans ".../wamp64/www" 
- Coller le fichier Wordpress dans le dossier
- Placez y votre fichier Wordpress


![créer un site wordpress](/img/blog/DEV-installer-wordpress-2023/serveur-web.png)


Voici le chemin pour accéder au projet Wordpress “wamp64/www/wordpress”. 
Vous allez bientôt pouvoir utiliser Wordpress sur votre ordinateur !

<br>

## 5. Comment ouvrir un site en local ?

Afin de vérifier que cela existe bien, il suffit de d'ouvrir un onglet type Google Chrome et copiez y le lien suivant : "127.0.0.1/wordpress"

Cette adresse correspond à :
- "127.0.0.1/" : url permettant à ouvrir un site en local grâce à Wamp
- "wordpress/" : le nom du fichier présent dans le répertoire de Wamp

<br>

## 6. Créer une base de données MySQL

WordPress utilise MySQL pour stocker les données, il est donc primordiale de créer une base de données MySQL pour l'installer en local. La plupart des logiciels de serveur web ont une interface qui vous permet de créer une base de données MySQL facilement.

Nous allons entamer la création et la configuration de la base de donnée php de votre futur site internet Wordpress. En utilisant WAMP, MAMP ou XAMPP, vous pouvez accéder à l'interface de MySQL en ouvrant votre navigateur et en entrant l'adresse "127.0.0.1/phpmyadmin" dans la barre de recherche. Pour faire cette manipulation vous pouvez utiliser un nouvel onglet pour conserver l'autre page qui affichera votre Wordpress.

Par défaut, il y aura déjà des choses pré-écrites. Il va falloir les modifier. A cette étape, il va falloir nommé comme sur l'image ci-dessous :
- L'utilisateur : "root"
- Mot de passe : 
- Choix du serveur : "MySQL"


En cliquant sur exécuter vous allez visualiser l'interface de "phpMyAdmin". Voici un exemple ci-dessous.


![comment installer wordpress sur son ordinateur](/img/blog/DEV-installer-wordpress-2023/derniere-version-wordpress.png)


Maintenant, nous allons passer à la création d'une nouvelle base donnée pour notre site wordpress.

Cliquer sur : 
- "Nouvelle base de données"
- Nommé votre base par : "wordpress", comme vous pouvez voir ci-dessous.
- Cliquer sur "créer"



![base de données mysql](/img/blog/DEV-installer-wordpress-2023/cr%C3%A9er-un-site-wordpress.png)

<br>

## 7. Configurer WordPress en local

Vous avez ouvert sur un navigateur pour site Wordpress en local. Maintenant, vous pouvez simplement configurer tous les paramètres par défaut.

Voici la liste des modules à structurer :
- Vous allez pouvoir modifier la langue principal de votre Wordpress
- Le système va vous demander de configurer votre base de donnée. Cliquer sur "C'est partie".
- Il va falloir remplir les informations sur la base de donnée (similaire à ce que vous avez rempli précédemment lors de la mise des données mysql) :
    - nom de la base : "wordpress"
    - identifiant : "root"
    - mot de passe : 
    - adresse de la BDD : "localhost"
    - préfixe des tables : "wp_"
- Cliquer sur "Envoyer"
- En cliquant sur 'Lancer l'installation", vous allez finaliser l'installation. Vérifiez si toutes les informations sont correctes, puis effectuer la manœuvre pour lancer l'installation


![installation wordpress manuellement](/img/blog/DEV-installer-wordpress-2023/installation-manuelle-wordpress.png)


Après avoir configuré la connexion des bases de données de WordPress, vous pouvez commencer à configurer votre site afin de finir l'installation de wordpress en local.
Tout d'abord, entrez le nom de votre site, choisissez un nom d'utilisateur et un mot de passe pour l'administrateur. Ensuite, entrez votre adresse email et cliquez sur le bouton "Installer WordPress".
Dernière étape : L'installation étant fini, vous pouvez vous connecter sur la prochaine page.
Pour se connecter il suffit d'une chose : entrer votre identifient et mot de passe.

Vous avez maintenant accès à votre wordpress directement via le lien suivant : "localhost/wordpress/". A vous de voir, aller effectuer des tests, créer des pages ou des articles et configurer tout un tas de chose. Vous pouvez même effectuer du multisite !
Lorsque vous aurez fini avec wordpress, il suffit de fermer les pages puis quitter votre serveur web.

<br>

## 8. Se connecter à WordPress sur votre ordinateur

Le jour d'après vous avez envie de faire d'autres modifications ?
Rien de plus simple comme la configuration a déjà été faites !
- Exécuter votre serveur web type Mamp
- Vérifier bien qu'il soit de couleur verte (normalement c'est automatique)
- Ouvrez une page navigateur web, entrez le lien : "localhost/wordpress/". 
- Connectez vous en un instant, en entrant vos identifiants

<br>

## 9. Créer du contenu

Une fois que vous êtes connecté à WordPress sur votre machine, vous pouvez commencer à travailler dessus ! Vous pouvez ajouter des pages, des articles de blog, des images, des vidéos, etc. Pour ajouter du contenu, cliquez sur l'onglet correspondant dans le menu de gauche de l'interface d'administration.

WordPress offre un large choix de personnalisation pour l'apparence de votre site ou multisite.
Vous êtes prêt pour choisir un thème, ajouter des widgets et des menus, personnaliser les couleurs et les polices. Pour personnaliser l'apparence de votre site, cliquez sur l'onglet "Apparence" dans le menu de gauche de l'interface d'administration.

Vous avez la possibilité d’ajouter des extension pour ajouter des fonctionnalités à votre site. Vous pouvez ajouter des plugins pour améliorer la sécurité, la performance, l'optimisation des moteurs de recherche, la sauvegarde de données, etc. Ces extension peuvent être gratuites ou payantes. Cela va dépendre du module choisi.
Pour ajouter un plugin, cliquez sur l'onglet "Plugins" dans le menu de gauche de l'interface d'administration.

<br>

## Tuto vidéo : installation de Wordpress en local

Dans cette vidéo Youtube, vous retrouvez l'installation Wordpress en local avec une autre solution. Le serveur web utilisé n'est pas Wamp, Mamp ou Wampp, le serveur web est Local. Celui-ci fonctionne un peu différemment des autres. Pour l'utiliser, je vous conseille de voir cette vidéo :

<iframe width="100%" height="315" src="https://www.youtube.com/embed/YXsdWHr93n4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<br>

## 10. Wordpress local à la mise en ligne

Vous avez fini cette dernière et tout vous convient ? Vous allez pouvoir exporter votre wordpress installé sur votre environnement.

### Exportation de votre site

Vous pouvez exporter votre site local pour le mettre en ligne. Pour exporter votre site wordpress, allez dans l'onglet "outils" dans le menu de gauche de l'interface d'administration, puis cliquez sur "exporter".

### Choix de l'hébergement

Pour mettre votre site WordPress en ligne, vous devez d'abord acheter un nom de domaine et un hébergement web. Etant donné que wordpress est pour l'instant sur votre serveur web local, cette dernière est obligatoire pour diffuser quelque chose sur le web.

### Transfère de wordpress

Ensuite, vous pouvez transférer votre site WordPress en ligne en utilisant un logiciel FTP. Vous pouvez également utiliser une extension de WordPress pour transférer votre site.


<br><br>

---

## Vous avez encore des questions sur l’installation de Wordpress ?

#### 1. Qu'est-ce que l'installation locale de WordPress ?

L'installation locale de WordPress est le processus d'installation de WordPress sur votre propre ordinateur plutôt que sur un serveur distant. Cela vous permet de développer et de tester votre site WordPress en mode hors ligne, sans avoir besoin d'une connexion Internet.

<br>

#### 2. Quels sont les avantages de l'installation locale de WordPress ?

L'installation locale de WordPress présente plusieurs avantages. Vous pouvez travailler sur votre site sans avoir besoin d'une connexion Internet, ce qui peut accélérer le processus de développement. De plus, vous pouvez expérimenter et tester de nouvelles fonctionnalités sans risquer de perturber votre site en ligne. Enfin, cela vous permet de créer un environnement de développement isolé pour tester des thèmes, des plugins et des mises à jour de WordPress en toute sécurité.

<br>

#### 3. Comment puis-je installer WordPress en local en 2023 ?

Pour installer WordPress en local en 2023, vous pouvez utiliser des logiciels tels que XAMPP, WampServer, ou Local by Flywheel. Ces outils vous permettent de créer un serveur local sur votre ordinateur et d'installer WordPress sur celui-ci. Vous devrez suivre les instructions spécifiques de chaque outil pour configurer le serveur et installer WordPress.

<br>

#### 4. Quelles sont les exigences système pour installer WordPress en local en 2023 ?

Les exigences système pour installer WordPress en local en 2023 sont généralement les mêmes que celles recommandées pour une installation WordPress standard. Vous aurez besoin d'un ordinateur équipé d'un système d'exploitation compatible (Windows, macOS ou Linux), d'un serveur web (comme Apache), d'une base de données MySQL ou MariaDB, ainsi que de PHP. Vérifiez les recommandations spécifiques de l'outil que vous utilisez pour vous assurer que votre système répond aux exigences.

<br>

#### 5. Puis-je migrer mon site WordPress en local vers un serveur en ligne ?

Oui, vous pouvez migrer votre site WordPress en local vers un serveur en ligne une fois que vous avez terminé le développement et les tests. Pour cela, vous devez exporter votre base de données locale, transférer les fichiers WordPress vers le serveur en ligne, créer une nouvelle base de données sur le serveur en ligne, importer les données de la base de données locale sur le serveur en ligne, et mettre à jour les fichiers de configuration de WordPress avec les informations de connexion à la nouvelle base de données.



