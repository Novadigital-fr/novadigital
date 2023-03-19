<template>
    <div ref="container2">
    <div  id="container2" class="container2" >
      <div class="menu">
        
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
        
      </div>
      
      <section class="panel2">
        <div>
          <img src="../../assets/img/1.svg" alt="" />
          <h2>{{title1}}</h2>
          <p>
            {{text1}}
          </p>
        </div>
      </section>
      <section class="panel2">
        <div>
          <img src="../../assets/img/2.svg" alt="" />
          <h2>{{title2}}</h2>
          <p>
           {{text2}}
          </p>
        </div>
      </section>
      <section class="panel2">
        <div>
          <img src="../../assets/img/3.svg" alt="" />
          <h2>{{title3}}</h2>
          <p>
            {{text3}}
          </p>
        </div>
      </section>
      <section class="panel2">
        <div>
          <img src="../../assets/img/4.svg" alt="" />
          <h2>{{ title4 }}</h2>
          <p>
            {{text4}}
          </p>
        </div>
      </section>
      <section class="panel2">
        <div>
          <img src="../../assets/img/1.svg" alt="" />
          <h2>{{title5}}</h2>
          <p>
            {{text5}}
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

    props: {
      title1: {
        type: String,
        required: true,
      },
      text1: {
        type: String,
        required: true,
      },
      title2: {
        type: String,
        required: true,
      },
      text2: {
        type: String,
        required: true,
      },
      title3: {
        type: String,
        required: true,
      },
      text3: {
        type: String,
        required: true,
      },
      title4: {
        type: String,
        required: true,
      },
      text4: {
        type: String,
        required: true,
      },
      title5: {
        type: String,
        required: true,
      },
      text5: {
        type: String,
        required: true,
      },
      
    },
    mounted() {
      // Votre code JavaScript ici
      const container2 = document.querySelector('.container2');
    
      if (window.matchMedia("(min-width: 1024px)").matches) {
        let sections2 = gsap.utils.toArray(".panel2");
  
        let scrollTween2 = gsap.to(sections2, {
          xPercent: -100 * (sections2.length - 1.5),
          ease: "none", // <-- IMPORTANT!
          scrollTrigger: {
            trigger: "#container2",
            pin: true,
            scrub: 0.1,
            //snap: directionalSnap(1 / (sections2.length - 1)),
            end: "+=5000",
          },
        });
      }
    },
    onUnmounted() {
    scrollTween2.value.revert(); // <- Easy Cleanup!
    console.log(scrollTween2);
},
  };
  </script>
  
  <style scoped>
  .container2 {
    width: 300vw;
    height: 100vh;
    display: flex;
    flex-wrap: nowrap;
    overscroll-behavior: none;
  }
  
  .panel2 {
    width: 60vw;
    margin-top: 5vh;
  }
  
  .panel2 div {
    margin: 20%;
  }
  .panel2 h2 {
    font-size: 30px;
    margin: 5vh 0;
  }
  .panel2 img{
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
    .container2 {
      width: 600%;
      height: 90vh;
      display: flex;
      flex-wrap: nowrap;
    }
    .panel2 {
      position: relative;
      z-index: 4;
      width: 90vw;
      margin: 15vh 10vw 10vh 3vw;
      font-weight: 300;
      overflow: hidden;
    }
    .panel2 div {
      margin: 0 4%;
    }
    .panel2 img{
    height: 100px;
  }
  }
  
  @media screen and (max-width: 767px) {
    /* mobile */
  }
  </style>
  