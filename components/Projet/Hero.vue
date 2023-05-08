<template>
  <div class="hero">
    <div class="backimage" :style="{ backgroundImage: `url(${image})` }">
    <h1 ref="title" class="animated-title">{{ text }}</h1>

    </div>
    <!-- <img :src="image" alt="Mon image" /> -->
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
  },
  mounted() {
    gsap.from(this.$refs.title, {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power4.out",
      delay: 0.5,
    });
  },
};
</script>

<style lang="scss" scoped>
.hero {
  height: 100vh;  
  overflow: hidden;


}
.animated-title {
  font-size: 15vw;
  font-weight: 500;
  color: white;
  padding-bottom: 5vh;
  transform: scale(0.8);

  // mix-blend-mode: difference;
}
.backimage {

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  z-index: -1;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  transform: scale(1.1);
  animation: 2s back;
}

@keyframes back {
  0% {
    transform: scale(1);
  }
  100% {
  }
}
@media screen and (max-width: 1024px) {
  /* tablettte */



  
}

@media screen and (max-width: 767px) {
  /* mobile */
  
  .animated-title {
    font-size: 18vw;
    padding-bottom: 18vh;
  }
}
</style>
