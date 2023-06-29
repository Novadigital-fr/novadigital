<template>
  <div class="contour_image">
    <div
      class="backimage"
      :style="{ backgroundImage: `url(${backImage})` }"
    ></div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  props: {
    backImage: {
      type: String,
      required: true,
    },
  },
  mounted() {
    let backimages = [...document.querySelectorAll(".backimage")];
    if (window.matchMedia("(min-width: 1024px)").matches) {

    window.addEventListener("scroll", () => {
      backimages.forEach((img) => {
        img.style.backgroundPositionY = -window.scrollY / 7 + "px";
      });
    });
  }
  },
};
</script>

<style lang="scss" scoped>
.contour_image {
  background-color: var(--color-bg);
}
.backimage {
  background-color: var(--color-bg);
  background-size: cover;
  // background-position: center;
  background-repeat: no-repeat;
  width: 98vw;
  margin: 0 1vw;
  z-index: -1;
  height: 75vh;
}
@media screen and (max-width: 1024px) {
  .backimage {

  background-position: center;
 
  width: 90%;
  margin: 0 5%;
  z-index: -1;
  height: 65vh;
}

}
</style>
