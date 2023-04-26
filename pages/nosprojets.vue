<template>
  <div class="home7" ref="container">
    <div id="container" class="container">
      <div class="slider-inner">
        <section class="panel">
          <NuxtLink to="projet/novagraphy">
            <div
              class="img"
              style="background-image: url(./img/novagraphy/novagraphy3.png)"
            ></div>
          </NuxtLink>
        </section>
        <section class="panel">
          <NuxtLink to="projet/novacharpente">
            <div
              class="img"
              style="
                background-image: url(./img/novacharpente/novacharpente1.png);
              "
            ></div>
          </NuxtLink>
        </section>
        <section class="panel">
          <NuxtLink to="projet/gellini">
            <div
              class="img"
              style="background-image: url(./img/gellini/gellini1.png)"
            ></div>
          </NuxtLink>
        </section>
        <section class="panel">
          <NuxtLink to="projet/novalinguo">
            <div
              class="img"
              style="background-image: url(./img/novalingo/novalingo2.png)"
            ></div>
          </NuxtLink>
        </section>
        <section class="panel">
          <NuxtLink to="projet/studiodino">
            <div
              class="img"
              style="background-image: url(./img/studiodino/studiodino3.png)"
            ></div>
          </NuxtLink>
        </section>
        <section class="panel">
          <NuxtLink to="projet/inflib">
            <div
              class="img"
              style="background-image: url(./img/inflib/inflib4.png)"
            ></div>
          </NuxtLink>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const scrollTween = ref(null);

definePageMeta({
  layout: "custom",
});

onMounted(() => {
  let images = [...document.querySelectorAll(".img")];

  window.addEventListener("scroll", () => {
    images.forEach((img) => {
      img.style.backgroundPosition = -0 - window.scrollY / 7 + "px center";
    });
  });

  const container = document.querySelector(".container");

  if (window.matchMedia("(min-width: 1024px)").matches) {
    let sections = gsap.utils.toArray(".panel");

    scrollTween.value = gsap.to(sections, {
      xPercent: -100 * (sections.length - 2.5),
      ease: "none", // <-- IMPORTANT!
      scrollTrigger: {
        trigger: "#container",
        pin: true,
        scrub: 0.1,
        //snap: directionalSnap(1 / (sections.length - 1)),
        end: "+=3000",
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
  background-color: var(--color-bg);
  width: 200vw;
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
  overscroll-behavior: none;
}

.slider-inner {
  position: absolute;
  top: 15%;
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.panel {
  position: relative;
  width: 30vw;
  height: 100%;
  overflow: hidden;
}

.img {
  position: absolute;
  left: 0px;
  width: 800px;
  height: 100%;
  background-position: 0px center;
  background-size: cover;
  background-repeat: no-repeat;
}

@media screen and (max-width: 1024px) {
  /* tablettte */

  .home7 {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .container {
    position: relative;
    width: 100%;
    height: auto;
    padding: 8vh 0;
  }
  .slider-inner {
    position: relative;
    height: auto;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    gap: 30px;
  }
  .panel {
    position: relative;
    z-index: 4;
    width: 100vw;
    height: 40vh;
    /* margin: 15vh 10vw 10vh 3vw; */
    font-weight: 300;
    overflow: hidden;
  }
  .img {
    position: relative;
    left: 0px;
    width: 800px;
    height: 100%;
    background-position: 0px center;
    background-size: cover;
    background-repeat: no-repeat;
  }
}

@media screen and (max-width: 767px) {
  /* mobile */
}
</style>
