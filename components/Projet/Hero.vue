<template>
  <div class="header">
    <h1 ref="title" class="animated-title">{{ text }}</h1>

    <div class="backimage" :style="{ backgroundImage: `url(${image})` }"></div>
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
.header {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 70%;
}
.animated-title {
  font-size: 15vw;
  font-weight: 500;
  color: white;
  // mix-blend-mode: difference;
}
.description {
  font-size: 25px;
  color: var(--color-text);
}
.backimage {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100%;
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
  .header {
    padding-bottom: 15%;
    width: 70vw;
  }

  img {
    left: -200px;
    width: auto;
    height: 100vh;
  }
  
}

@media screen and (max-width: 767px) {
  /* mobile */
  .header {
    padding-bottom: 20%;

    width: 80vw;
  }
  .animated-title {
    font-size: 18vw;
  }
}
</style>
