<template>
  <div class="header">
    <h1 ref="title" class="animated-title">{{ text }}</h1>
    <p ref="description" class="description">{{ description }}</p>
    <img :src="image" alt="Mon image" />
  </div>
</template>
  
  <script>
  import gsap from 'gsap';
  
  export default {
    props: {
      text: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true
      },
    },
    mounted() {
      gsap.from(this.$refs.title, {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: 'power4.out',
        delay: 0.5,
      });
    },
  };
  </script>
  
  <style scoped>
  .header{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding-bottom: 10%;
    width: 50vw;
  }
  .animated-title {
  font-size: 60px;
  color: var(--color-text);

  }
  .description{
    font-size: 25px;
  color: var(--color-text);
  }
  img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: -1;
    height: 100vh;
  }
  @media screen and (max-width: 1024px) {
  /* tablettte */
  .header{
    padding-bottom: 15%;
    width: 70vw;
  }
  img{
    left: -200px;
    width: auto;
    height: 100vh;
  }
  

}

@media screen and (max-width: 767px) {
  /* mobile */
  .header{
    padding-bottom: 20%;

  width: 80vw;
}
  .animated-title {
  font-size: 30px;
  color: var(--color-text);

  }
  .description{
    font-size: 16px;
  color: var(--color-text);
  }
}
  </style>