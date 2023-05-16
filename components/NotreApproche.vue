<template>
  <div class="full">
    <div class="dots dots1"></div>

    <div class="proceder">
      <div class="image">
        <img src="/img/novalingo/novalingo2.png" alt="" />
      </div>
      <div class="content">
        <h2 class="animation">
          Création de site vitrine <br />
          sur mesure
        </h2>
        <p>
          Notre agence web propose des <b> création de site vitrine </b> sur mesure vous offre une solution personnalisée pour représenter votre entreprise en ligne. <br><br> Nous mettons à votre disposition notre expertise pour concevoir un <b>site web unique et professionnel</b>  qui répondra aux besoins spécifiques de votre entreprise.
          <NuxtLink to="/creation-site-web-lyon">
        <Button text="Site vitrine" />
        </NuxtLink>
        </p>
        
      </div>
    </div>
    <div class="proceder2">
      <div class="content2">
        <h2 class="animation">
          Solution e-commerce <br />
          sur mesure
        </h2>
        <p>
          Notre service de <b> création de site e-commerce sur mesure</b> vous permet de vendre vos produits en ligne de manière efficace et professionnelle. <br> <br> Nous vous offrons une solution personnalisée qui vous permettra de gérer facilement votre <b> boutique en ligne </b>et de maximiser vos ventes
          <NuxtLink to="/creation-de-site-e-commerce">
        <Button text="E-commerce" />
        </NuxtLink>
        </p>
      </div>
      <div class="image">
        <img src="/img/novagraphy/novagraphy3.png" alt="" />
      </div>
    </div>
    <div class="proceder">
      <div class="image">
        <img src="/img/gellini/gellini1.png" alt="" />
      </div>
      <div class="content">
        <h2 class="animation">
          Augmenter votre visibilité <br />
          grace au SEO
        </h2>
        <p>
          Notre service de <b>référencement SEO</b>  vous permet d'améliorer la visibilité de votre site web sur les moteurs de recherche tels que Google. <br> <br>Avec notre service, vous pouvez être sûr que votre <b> site web </b>sera bien positionné pour atteindre votre public cible.
          <NuxtLink to="/agence-de-referencement-seo">
        <Button text="Visibilité" />
        </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.full {
  position: relative;
}
.dots:before,
.dots:after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.5;
  background-image: linear-gradient(var(--color-bg) 50%, transparent 0);
  background-size: 100% 10px;
  background-position: 0 0;
  animation: movebg 0.2s linear infinite;
  will-change: transform;
  width: 2px;
}
.dots1:before {
  left: 35%;
}
.dots1:after {
  left: 65%;
}
.dots:after {
  animation-direction: reverse;
}
@keyframes movebg {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, 10px, 0);
  }
}
.proceder {
  display: flex;
  padding: 10% 0;
}
.proceder2 {
  display: flex;
  padding: 20% 0;
}
.image {
  margin: 0 10%;
}
.image img {
  width: 30vw;
}
.content {
  width: 50vw;
}
.content h2 {
  font-size: 50px;
  background-color: var(--color-text);
  margin-left: 5vw;
  font-weight: 300;
}
.content p {
  margin: 5% 0 0 20vw;
  width: 25vw;
}
.content2 {
  width: 50vw;
}
.content2 h2 {
  font-size: 50px;
  background-color: var(--color-text);
  margin-left: 15vw;
  font-weight: 300;
}
.content2 p {
  margin: 5% 0 0 38vw;
  width: 19vw;
}

@media screen and (max-width: 1024px) {
    /* tablettte */
    .content h2 {
  font-size: 40px;
}
.content2 h2 {
  font-size: 40px;
}
    
}
  

@media screen and (max-width: 767px) {
    /* mobile */
    .proceder {
  display: flex;
  flex-direction: column;
}
.proceder2 {
  display: flex;
  flex-direction: column-reverse;
}
.content {
  width: 100%;
  padding: 0 4vw;

}
.content h2 {
  font-size: 30px;
  margin: 0 0 5% 0;
}
.content p {
  margin: 0;
  width: 100%;
}
.content2 {
  width: 100%;
  padding: 0 4vw;

}
.content2 h2 {
  font-size: 30px;
  margin: 0 0 5% 0;
}
.content2 p {
  margin: 0;
  width: 100%;
}
.image {
  margin: 10% 0%;
}
.image img {
  width: 100%;
}
.dots{
  display: none;
}
}
</style>
