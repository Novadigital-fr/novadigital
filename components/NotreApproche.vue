<template>
  <div class="full">
    <div class="dots dots1"></div>

    <div class="proceder">
      <div class="image">
        <img src="/img/novalingo/novalingo2.png" alt="" />
      </div>
      <div class="content">
        <h2 class="animation">
          Agence de création <br> de site vitrine
        </h2>
        <p>
          Notre agence web située à Lyon s’occupe de la création de site vitrine sur mesure en vous offrant une solution personnalisée pour représenter aux mieux votre entreprise.
<br><br>
Nous mettons à votre disposition notre expertise pour concevoir un site web unique et professionnel qui répondra aux besoins spécifiques de vos utilisateurs.
          <NuxtLink to="/creation-site-web-lyon">
        <Button text="Site vitrine" />
        </NuxtLink>
        </p>
        
      </div>
    </div>
    <div class="proceder2">
      <div class="content2">
        <h2 class="animation">
          Agence de création <br> de site e-commerce
        </h2>
        <p>
          Créer votre site e-commerce vous permettra de vendre efficacement vos produits en ligne. Nous vous offrons une solution personnalisée de création afin de maximiser l’expérience de votre boutique e-commerce et de grossir vos ventes.
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
          Agence de référencement <br> naturel SEO
        </h2>
        <p>
          Nous développons votre site web en tenant compte du SEO afin que vous ayez une bonne visibilité sur les moteurs de recherche. Nous pouvons également intervenir sur des sites existants, afin de référencer votre site web pour votre cible.
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
  /* font-weight: 300; */
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
  /* font-weight: 300; */
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
