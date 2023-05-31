<template>
  <div class="home7" id="notreProcede" ref="container">
  <div  id="container" class="container" >
    <div class="menu">
      <a href="#notreProcede" class="link">
        <div>
          <p class="MnotreProcede">NOTRE PROCédé</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="57.657"
            height="57.657"
            viewBox="0 0 57.657 57.657"
          >
            <defs></defs>
            <g transform="translate(-13057.099 -5086.941)">
              <path
                class="a"
                d="M52,4H-4V-4H52Z"
                transform="translate(13062.756 5090.941)"
              />
              <path
                class="a"
                d="M51.766,4H-4V-4H51.766Z"
                transform="translate(13110.756 5091.059) rotate(90)"
              />
              <path
                class="a"
                d="M0,47.657-5.657,42,42-5.657,47.657,0Z"
                transform="translate(13062.756 5096.941)"
              />
            </g>
          </svg>
        </div>
      </a>
    </div>
    
    <section class="panel">
      <div>
        <img src="../assets/img/1.svg" alt="" />
        <h3>Compréhension de vos besoins</h3>
        <p>
          Avec un membre de notre agence digitale, nous définissons ensemble vos besoins et attentes afin d'en conclure des objectifs communs. Cette phase d'introduction nous est essentielle pour vous proposer le développement qui vous correspond au mieux. Nous sommes ouverts à toutes vos interrogations concernant la création de votre site web.
        </p>
      </div>
    </section>
    <section class="panel">
      <div>
        <img src="../assets/img/2.svg" alt="" />
        <h3>Création et webdesign du site web</h3>
        <p>
          Chaque projet est unique. C'est pour cela que notre agence effectue des recherches afin de bien comprendre votre future cible. Par la suite, nous vous présenterons un webdesign sur mesure, adapté au brief en vue en amont. Ce prototype, personnalisé de votre futur site internet, est la première ébauche du projet.
        </p>
      </div>
    </section>
    
    <section class="panel">
      <div>
        <img src="../assets/img/4.svg" alt="" />
        <h3>Développement du site internet</h3>
        <p>
          L’intégration web, l’une des grandes étapes de votre projet. Cela consiste à développer votre site internet, intégrer votre base de données, gérer votre nom de domaine, puis mettre votre site en ligne afin qu'il soit utilisable. Vous pouvez maintenant accéder à votre site web sur les différents moteurs de recherche.
        </p>
      </div>
    </section>
    <section class="panel">
      <div>
        <img src="../assets/img/1.svg" alt="" />
        <h3>Accompagnement référencement SEO</h3>
        <p>
          Nous développons votre site web en tenant compte du référencement naturel. Pour des résultats concrets, nous vous accompagnons sur la durée, notamment pour vous permettre d'être positionné en tête des résultats de recherche pour les termes les plus pertinents. Le référencement naturel (SEO) peut se traduire par une augmentation du trafic qualifié sur votre site web, donc de nouvelles opportunités commerciales.
        </p>
      </div>
    </section>
  </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const scrollTween = ref(null);

onMounted(() => {    
  const container = document.querySelector('.container');

  if (window.matchMedia("(min-width: 1024px)").matches) {
    let sections = gsap.utils.toArray(".panel");

    scrollTween.value = gsap.to(sections, {
      xPercent: -100 * (sections.length - 2),
      ease: "none", // <-- IMPORTANT!
      scrollTrigger: {
        trigger: "#container",
        pin: true,
        scrub: 0.1,
        //snap: directionalSnap(1 / (sections.length - 1)),
        end: "+=4000",
      },
    });
  }
});

onUnmounted(() => {
  if (scrollTween.value) {
    scrollTween.value.scrollTrigger.kill();
    scrollTween.value = null;
  }
});
</script>

<style scoped>
.container {
  width: 250vw;
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
  overscroll-behavior: none;
}

.panel {
  width: 50vw;
  margin-top: 5vh;
}

.panel div {
  margin: 20%;
}
.panel h3 {
  font-size: 30px;
  margin: 5vh 0;
}
.panel img{
  height: 200px;
}

.menu {
  text-transform: uppercase;
  width: 100vw;
  position: absolute;
  padding: 0 1vw;
}
.menu div {
  border-bottom: solid 1px;
  display: flex;
  justify-content: space-between;
  padding: 20px 0 10px 0;
  z-index: 5;
  fill: currentColor;
}
.menu div svg {
  width: 20px;
  height: 20px;
}

@media screen and (max-width: 1024px) {
  /* tablettte */

  .home7{
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .container {
    width: 600%;
    height: 90vh;
    display: flex;
    flex-wrap: nowrap;
  }
  .panel {
    position: relative;
    z-index: 4;
    width: 100vw;
    margin: 15vh 10vw 10vh 3vw;
    font-weight: 300;
    overflow: hidden;
  }
  .panel div {
    margin: 0 4%;
  }
  .panel img{
  height: 100px;
}
}

@media screen and (max-width: 767px) {
  /* mobile */
}
</style>
