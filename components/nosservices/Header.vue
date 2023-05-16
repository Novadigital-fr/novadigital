<template>
  <div class="header">
  <div class="text">
 
    <h1 ref="title" class="animated-title">{{ text }}</h1>
    <p ref="description" class="description">{{ description }}</p>
  </div>

    <!-- <div class="backimage" :style="{ backgroundImage: `url(${image})` }"></div> -->
    <!-- <img :src="image" alt="Mon image" /> -->
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
  .header{
    // height: 100vh;
    background-color: var(--color-bg);
    // display: flex;
    // flex-direction: column;
    // justify-content: flex-end;

  }
  .text{
    height: 60vh;
    display: flex;
    align-items: flex-end;
    color: var(--color-text);
    justify-content: flex-start;
    padding:1vw;

  }
  .animated-title {
  font-size: 3.5vw;
    width: 50%;
    margin-right: 10%;
  }
  .description{
    font-size: 1.10rem;
    width: 50%;

  }
  .backimage{
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    width: 98vw;
    margin: 0 1vw;
    z-index: -1;
    height: 75vh;
    // transform: scale(1.1);
    // animation: 2s back;

    @keyframes back {
      0%{
        transform: scale(1);
      }
      100%{

      }
      
  }
  }
  @media screen and (max-width: 1024px) {
  /* tablettte */
  .header{
    width: 100vw;
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
  width: 100vw;
}
.text{
flex-direction: column;
align-items: flex-start;
justify-content: flex-end;
margin: 0 5%;

}
  .animated-title {
  font-size: 40px;
  width: 100%;
  padding-bottom: 5%;

  }
  .description{
    font-size: 16px;
    width: 100%;
    display: none;
  }
}
  </style>