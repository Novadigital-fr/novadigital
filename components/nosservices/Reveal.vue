<template>
  <div class="content">
  <h3>{{title_reveal}}</h3>
    <p
      class="content__title content__title--left"
      data-splitting
      data-effect16
    >
      <p class="font-small">
{{ reveal }}    
  </p>
    </p>
    <div class="backimage" :style="{ backgroundImage: `url(${image})` }"></div>

  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {

    props: {
      title_reveal: {
        type: String,
        required: true,
      },
      reveal: {
        type: String,
        required: true,
      },
    },
    
  mounted() {
    const titles = [...document.querySelectorAll('.content__title[data-effect16]')];
   
    console.log(titles);
    titles.forEach((title) => {
      // Divise chaque titre en mots pour les animer individuellement
      const words = title.textContent.split(" ");
      title.innerHTML = words.map((word) => {
        return `<span class="word">${word}</span>`;
      }).join(" ");

      // Configure les animations pour chaque titre
      gsap.fromTo(
        title,
        {
          transformOrigin: "0% 50%",
          // rotate: 3,
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

<style scoped>
.content{
    padding: 15vh 1vw;
    background-color: var(--color-bg);
    color: var(--color-text);
}
.content .content__title{
	max-width: 660px;
	margin: 1.5rem 0 1.5rem 55%;
	font-size: 1.25rem;
	line-height: 1.5;
  /* font-size: 30px;
  width: 80%; */
}
h3{
  font-size: 4vw;
}
@media screen and (max-width: 767px) {
  /* mobile */
  .content .content__title{

	font-size: 1rem;
  	margin: 1.5rem 5%;


}
h3{
  margin:0 5%;
  font-size: 40px;
}
}
</style>
