<template>
  <div class="home7" ref="container">
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
        <h3>Compréhension des besoins</h3>
        <p>
          Nous définissons avec vous, vos besoins et attentes afin d'en conclure
          des objectifs communs. <br /><br />
          Cette phase d'introduction nous est essentielle pour la m répondre à
          toutes vos questions
        </p>
      </div>
    </section>
    <section class="panel">
      <div>
        <img src="../assets/img/2.svg" alt="" />
        <h3>Recherche, idéation et maquette</h3>
        <p>
          Chaque projet est unique et c'est pour cela qu'on nous passons par une
          phase de recherche afin de bien comprendre vos futurs utilisateurs.
          <br /><br />
          Par la suite, nous entamons une phase d'idéation et nous vous
          procurons un prototype représentatif de votre projet
        </p>
      </div>
    </section>
    <section class="panel">
      <div>
        <img src="../assets/img/3.svg" alt="" />
        <h3>Retours et modifications</h3>
        <p>
          Une fois le prototype réceptionné par vos soins, vous êtes libre de
          nous faire des retours.
          <br /><br />
          Nous procédons aux modifications afin d'améliorer en continuité votre
          projet. Nous mettons en place un maximum d’échange entre vous et nous
          afin que votre projet répond à vos exigences
        </p>
      </div>
    </section>
    <section class="panel">
      <div>
        <img src="../assets/img/4.svg" alt="" />
        <h3>Intégration et développement</h3>
        <p>
          L'une des dernières grandes étapes est l'intégration du prototype une
          fois la validation des deux parties.
          <br /><br />
          Cela consiste développer votre site, intégrer votre base de donnée,
          réaliser des éléments graphiques, puis mettre votre site en ligne afin
          qu'il soit utilisable
        </p>
      </div>
    </section>
    <section class="panel">
      <div>
        <img src="../assets/img/1.svg" alt="" />
        <h3>Accompagnement sur du SEO</h3>
        <p>
          En investissant dans une prestation SEO professionnelle, vous pouvez
          améliorer considérablement la visibilité de votre site Web auprès de
          votre public cible. <br />
          <br />
          Cela peut se traduire par une augmentation du trafic qualifié sur
          votre site, ce qui peut se transformer en de nouvelles opportunités
          commerciales. Avec une optimisation SEO appropriée, vous pouvez vous
          positionner en tête des résultats de recherche pour les termes de
          recherche pertinents.
        </p>
      </div>
    </section>
  </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    // Votre code JavaScript ici
    const container = document.querySelector('.container');

    console.log(container);

    if (window.matchMedia("(min-width: 1024px)").matches) {
      let sections = gsap.utils.toArray(".panel");

      let scrollTween = gsap.to(sections, {
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
  },
};
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
  width: 98vw;
  position: absolute;
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
