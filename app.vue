<template>
  
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <CursorFollower />

  <!-- Début du bloc de code HubSpot -->
  <button
    type="button"
    id="hs_show_banner_button"
    style="
      background-color: #ed5211;
      border: 1px solid #ed5211;
      border-radius: 3px;
      padding: 10px 16px;
      text-decoration: none;
      color: #fff;
      font-family: inherit;
      font-size: inherit;
      font-weight: normal;
      line-height: inherit;
      text-align: left;
      text-shadow: none;
    "
    onClick="(function(){
  var _hsp = window._hsp = window._hsp || [];
  _hsp.push(['showBanner']);
})()"
  >
    Paramètres des cookies
  </button>

  <!-- Fin du bloc de code HubSpot -->
</template>

<script>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);
import Lenis from "@studio-freight/lenis";

export default {
  mounted() {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: "vertical", // vertical, horizontal
      gestureDirection: "vertical", // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  },
};
</script>

<style>
@import url("/assets/css/base.css");
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
