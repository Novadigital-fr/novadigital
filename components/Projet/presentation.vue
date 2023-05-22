<template>
  <div class="presentation">
    <div class="left">
      <p class="h3">Date</p>
      <p>Octobre 2022</p>
      <p class="h3">Services</p>
      <p>Web design</p>
      <p>Developpement</p>
      <p>Référencement seo</p>
      <p class="h3">Acteurs</p>
      <p>Novadigital</p>
    </div>
    <div class="right">
      <p
        class="content__title content__title--left"
        data-splitting
        data-effect16
      >
     {{ projetReveal }}
      </p>

    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  props: {
    projetReveal: {
      type: String,
      required: true,
    },
  },

  mounted() {
    const titles = [
      ...document.querySelectorAll(".content__title[data-effect16]"),
    ];

    titles.forEach((title) => {
      // Divise chaque titre en mots pour les animer individuellement
      const words = title.textContent.split(" ");
      title.innerHTML = words
        .map((word) => {
          return `<span class="word">${word}</span>`;
        })
        .join(" ");

      // Configure les animations pour chaque titre
      gsap.fromTo(
        title,
        {
          transformOrigin: "0% 50%",
        },
        {
          ease: "none",
          rotate: 0,
          scrollTrigger: {
            trigger: title,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        title.querySelectorAll(".word"),
        {
          "will-change": "opacity",
          opacity: 0.1,
        },
        {
          ease: "none",
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: title,
            start: "top bottom-=20%",
            end: "center top+=20%",
            scrub: true,
          },
        }
      );
    });
  },
};
</script>

<style lang="scss" scoped>
.presentation {
  background-color: var(--color-bg);
  color: var(--color-text);
  display: flex;
  min-height: 120vh;
  align-items: center;
  @media (max-width: 900px) {
        flex-direction: column-reverse;
        align-items: flex-start;

    }
}
.left {
  width: 40%;
  padding-left: 2vw;
  @media (max-width: 900px) {
width: 100%;
padding: 0 4vw 10vh 4vw;

    }
  .h3 {
    color: var(--color-secondaire);
    padding: 2vh 0 1vh 0;
  }
}
.right {
  width: 60%;
  padding: 0 2vw 0 0;
  @media (max-width: 900px) {
width: 100%;
padding:10vh 4vw;

    }
  .content__title {
    font-size: 45px;
    @media (max-width: 900px) {
        font-size: 20px;


    }
  }

}
</style>
