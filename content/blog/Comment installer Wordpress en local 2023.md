---
title: Comment installer Wordpress en local en 2023 ?
description: Voici comment installer Wordpress en local sur votre ordinateur. L’installation de wordpress en local n’a jamais été aussi simple ! L’installation avec Xampp, wamp ou mamp.
image: /img/blog/DEV-installer-wordpress-2023/wordpress-en-local.png
---

# Comment installer Wordpress en local en 2023 ?

![Exemple d’un site web conçu avec le CMS Wordpress](/img/blog/DEV-installer-wordpress-2023/wordpress-en-local.png)


Si vous êtes un blogueur débutant ou un développeur qui souhaite créer un site web, WordPress est une solution formidable. La version la plus récente de WordPress nécessite des exigences minimales pour être installée sur un serveur web. 

Cependant, si vous voulez expérimenter et tester WordPress avant de le mettre en ligne, vous pouvez l'installer en local sur votre ordinateur en entamant une installation avec Wamp, Xampp ou Mamp. Dans cet article, nous allons vous guider pas à pas pour installer WordPress en local sur votre ordinateur.

<br>

## Qu’est-ce que Wordpress ?

WordPress est une plateforme de gestion de contenu populaire et largement utilisée pour la création de sites Web. Elle permet à quiconque, sans connaissances techniques en développement, de créer un site Web. 

<br>

## Pourquoi faire une installation Wordpress en local ?

L'installation de WordPress en local avant de mettre le site en ligne présente de nombreux avantages. Cette étape permet de procéder tester votre site en toute tranquillité. En installant WordPress en local, vous pouvez expérimenter différentes configurations, thèmes et plugins sans risquer de perturber votre site en ligne. Vous pouvez effectuer des tests de sécurité, des mises à jour et des corrections de bugs. 

Si vous souhaitez installer WordPress sur votre ordinateur, il est important de comprendre que cela nécessite l'utilisation d'un logiciel de serveur web tel que [WAMP](https://www.wampserver.com/), [MAMP](https://www.mamp.info/en/downloads/) ou [XAMPP](https://www.apachefriends.org/fr/index.html). Vous aurez également besoin d'un environnement de développement local tel que PHP, Apache et MySQL. L'installation de ces éléments est une tâche relativement simple, et nous allons vous guider tout au long du processus.

<br>


## 1. Télécharger et installer un logiciel de serveur web

Comme annoncé plus haut, la première étape pour l’installation WordPress en local est de télécharger et d'installer un logiciel de serveur web. Il existe plusieurs options, mais nous vous recommandons d'utiliser WAMP (Windows), MAMP (Mac), ou XAMPP (Windows, Mac, Linux). Ces logiciels sont gratuits et faciles à installer.

![Interface de l’outil Mamp pour installer Wordpress en local](/img/blog/DEV-installer-wordpress-2023/wordpress-local.png)


### a. Pour Windows : WAMP

Si vous utilisez Windows, vous pouvez télécharger WAMP en visitant le site officiel. Cliquez sur le bouton de téléchargement, choisissez votre version de Windows, et suivez les instructions pour installer le logiciel.

### b. Pour Mac : MAMP

Si vous utilisez un Mac, vous pouvez télécharger MAMP en visitant le site officiel. Cliquez sur le bouton de téléchargement, choisissez votre version de Mac, et suivez les instructions pour installer le logiciel.

### c. Pour les deux : XAMPP

Si vous utilisez Windows, Mac, ou Linux, vous pouvez télécharger XAMPP en visitant le site officiel. Cliquez sur le bouton de téléchargement, choisissez votre système d'exploitation, et suivez les instructions pour installer le logiciel.

<br><br>


## 2. Télécharger WordPress

Une fois que vous avez installé votre logiciel de serveur web, vous devez [télécharger WordPress](https://fr.wordpress.org/download/). 
Pensez bien à télécharger la dernière version !

![télécharger wordpress en local](/img/blog/DEV-installer-wordpress-2023/comment-installer-wordpress-en-local.png)

<br><br>


## 3. Créer une base de données MySQL

WordPress utilise [MySQL](https://www.apachefriends.org/fr/index.html) pour stocker les données, il est donc important de créer une base de données MySQL pour l'installer en local. La plupart des logiciels de serveur web ont une interface qui vous permet de créer une base de données MySQL facilement. 

![installer wordpress en local MySQL](/img/blog/DEV-installer-wordpress-2023/installer-wordpress-wamp.png)


Si vous utilisez WAMP, MAMP ou XAMPP, vous pouvez accéder à l'interface en ouvrant votre navigateur et en entrant "localhost" dans la barre de recherche. Cliquez ensuite sur l'onglet "phpMyAdmin", et suivez les instructions pour créer une base de données.

![Installation BDD MySQL pour wordpress en local](/img/blog/DEV-installer-wordpress-2023/installer-wordpress.png)


<br><br>

## 4. Ouvrez votre serveur web

Votre serveur doit être activé. Par exemple, sur Wamp vous pouvez le visualiser en bas de votre ordinateur. 
Wamp doit être impérativement de couleur Vert. Si l’icon est de couleur orange ou rouge, c’est qu’il y a un problème avec votre serveur. Redémarrez-le ou réinstallez l’application.

![comment installer wordpress en local](/img/blog/DEV-installer-wordpress-2023/wamp-wordpress.png)

<br><br>

## 5. Configurer vos dossiers

Maintenant que vous avez téléchargé WordPress et créé une base de données MySQL, nous allons placé le dossier Wordpress au bon endroit :

- Extrayez le fichier ZIP de WordPress
- Allez dans le dossier de votre serveur web (j’ai utilisé wamp pour l’exemple)
- Créez un nouveau dossier pour y placer tous vos projets en local (nommé “www” pour l’exemple)
- Placez-y votre fichier Wordpress
- Nommer votre fichier comme bon vous semble


Dans mon exemple, je l’ai nommé “wordpress”. Voici le chemin pour accéder à mon projet Wordpress “wamp64/www/wordpress”
Vous allez pouvoir utiliser Wordpress sur votre ordinateur !

![Installer wordpress sur son ordinateur](/img/blog/DEV-installer-wordpress-2023/xampp-mamp-wamp.png)




<br><br>

## 6. Configurer WordPress en local

Ouvrez votre navigateur web et tapez *"localhost/[nom du fichier avec tous vos projets]/[nom de votre projet]"* dans la barre de recherche. 
Dans mon exemple, cela serait “*localhost/www/wordpress*”

Cela devrait vous amener à la page d'installation de WordPress.
Choisissez votre langue, entrez le nom de votre base de données, le nom d'utilisateur et le mot de passe. Ensuite, cliquez sur le bouton "Envoyer". 
Si tout est correct, WordPress devrait se connecter à votre base de données.

Après avoir configuré la connexion de base de données de WordPress, vous pouvez commencer à configurer votre site WordPress. Tout d'abord, entrez le nom de votre site, choisissez un nom d'utilisateur et un mot de passe pour l'administrateur. 
Ensuite, entrez votre adresse email et cliquez sur le bouton "Installer WordPress".

<br><br>

## 7. Se connecter à WordPress sur votre ordinateur

Maintenant que vous avez installé WordPress en local, vous pouvez vous connecter à l'interface d'administration. 

- Tapez toujours *"localhost/[nom du fichier avec tous vos projets]/[nom de votre projet]* et ajoutez-y “/wp-admin”
- Cela donne “*localhost/[nom du fichier avec tous vos projets]/[nom de votre projet]/wp-admin”*
- Dans mon exemple : “*localhost/www/wordpress/wp-admin*”
- Entrez vos informations pour vous connecter

<br>

![se connecter a wordpress sur le navigateur](/img/blog/DEV-installer-wordpress-2023/installation-wamp-mamp-xampp.png)

<br>

## 8. Créer du contenu

Une fois que vous êtes connecté à WordPress, vous pouvez commencer à créer du contenu. Vous pouvez ajouter des pages, des articles de blog, des images, des vidéos, etc. Pour ajouter du contenu, cliquez sur l'onglet correspondant dans le menu de gauche de l'interface d'administration.

WordPress offre des options de personnalisation pour l'apparence de votre site. 

Vous pouvez choisir un thème, ajouter des widgets et des menus, et personnaliser les couleurs et les polices. Pour personnaliser l'apparence de votre site, cliquez sur l'onglet "Apparence" dans le menu de gauche de l'interface d'administration.

![comment faire l’installation de wordpress](/img/blog/DEV-installer-wordpress-2023/installation-wordpress-local.png)


Vous avez la possibilité d’ajouter des plugins pour ajouter des fonctionnalités à votre site. Vous pouvez ajouter des plugins pour améliorer la sécurité, la performance, l'optimisation des moteurs de recherche, la sauvegarde de données, etc. Pour ajouter un plugin, cliquez sur l'onglet "Plugins" dans le menu de gauche de l'interface d'administration.

![comment installer wordpress en local](/img/blog/DEV-installer-wordpress-2023/installation-wordpress-wamp.png)

<br>

### Bravo, vous avez installé Wordpress en local !

Vous pouvez à présent modifié autant de fois que possible votre site internet. Profitez de cette opportunité pour tester de nouvelles fonctionnalités.

<br>

---

<br><br>

### Tuto vidéo : installation de Wordpress en local
Dans cette vidéo Youtube, vous retrouvez l'installation Wordpress en local avec une autre solution. Le serveur web utilisé est Local et non Wamp.
 
<iframe width="100%" height="315" src="https://www.youtube.com/embed/YXsdWHr93n4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


<br><br>


---

<br>

## Wordpress local à la mise en ligne

### Exportation de votre site

Une fois que vous avez créé votre site WordPress en local, vous pouvez l'exporter pour le mettre en ligne. Pour exporter votre site, allez dans l'onglet "Outils" dans le menu de gauche de l'interface d'administration, puis cliquez sur "Exporter". 
Suivez les instructions pour exporter votre site !

<br>

### Mise en ligne du site

Pour mettre votre site WordPress en ligne, vous devez d'abord acheter un nom de domaine et un hébergement web. 
Ensuite, vous pouvez transférer votre site WordPress en ligne en utilisant un logiciel FTP. Vous pouvez également utiliser une extension de WordPress pour transférer votre site.

<br><br>

---

<br><br>

## Vous avez des questions sur l’installation de Wordpress ?

### Qu'est-ce que l'installation locale de WordPress ?

L'installation locale de WordPress est le processus d'installation de WordPress sur votre propre ordinateur plutôt que sur un serveur distant. Cela vous permet de développer et de tester votre site WordPress en mode hors ligne, sans avoir besoin d'une connexion Internet.

<br>

### Quels sont les avantages de l'installation locale de WordPress ?

L'installation locale de WordPress présente plusieurs avantages. Vous pouvez travailler sur votre site sans avoir besoin d'une connexion Internet, ce qui peut accélérer le processus de développement. De plus, vous pouvez expérimenter et tester de nouvelles fonctionnalités sans risquer de perturber votre site en ligne. Enfin, cela vous permet de créer un environnement de développement isolé pour tester des thèmes, des plugins et des mises à jour de WordPress en toute sécurité.

<br>

### Comment puis-je installer WordPress en local en 2023 ?

Pour installer WordPress en local en 2023, vous pouvez utiliser des logiciels tels que XAMPP, WampServer, ou Local by Flywheel. Ces outils vous permettent de créer un serveur local sur votre ordinateur et d'installer WordPress sur celui-ci. Vous devrez suivre les instructions spécifiques de chaque outil pour configurer le serveur et installer WordPress.

<br>

### Quelles sont les exigences système pour installer WordPress en local en 2023 ?

Les exigences système pour installer WordPress en local en 2023 sont généralement les mêmes que celles recommandées pour une installation WordPress standard. Vous aurez besoin d'un ordinateur équipé d'un système d'exploitation compatible (Windows, macOS ou Linux), d'un serveur web (comme Apache), d'une base de données MySQL ou MariaDB, ainsi que de PHP. Vérifiez les recommandations spécifiques de l'outil que vous utilisez pour vous assurer que votre système répond aux exigences.

<br>

### Puis-je migrer mon site WordPress en local vers un serveur en ligne ?

Oui, vous pouvez migrer votre site WordPress en local vers un serveur en ligne une fois que vous avez terminé le développement et les tests. Pour cela, vous devez exporter votre base de données locale, transférer les fichiers WordPress vers le serveur en ligne, créer une nouvelle base de données sur le serveur en ligne, importer les données de la base de données locale sur le serveur en ligne, et mettre à jour les fichiers de configuration de WordPress avec les informations de connexion à la nouvelle base de données.



