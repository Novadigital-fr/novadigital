<template>
  <div class="horizontal" ref="horizontal">
  <div  id="container1" class="container1" >
    <div class="menu1">
      
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
    
    <section class="panel1">
      <div>
        <img src="../../assets/img/1.svg" alt="" />
        <h2>{{title1}}</h2>
        <p>
          {{text1}}
        </p>
      </div>
    </section>
    <section class="panel1">
      <div>
        <img src="../../assets/img/2.svg" alt="" />
        <h2>{{title2}}</h2>
        <p>
         {{text2}}
        </p>
      </div>
    </section>
    <section class="panel1">
      <div>
        <img src="../../assets/img/3.svg" alt="" />
        <h2>{{title3}}</h2>
        <p>
          {{text3}}
        </p>
      </div>
    </section>
    <section class="panel1">
      <div>
        <img src="../../assets/img/4.svg" alt="" />
        <h2>{{ title4 }}</h2>
        <p>
          {{text4}}
        </p>
      </div>
    </section>
    <section class="panel1">
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
    const container1 = document.querySelector('.container1');

    console.log(container1);

    if (window.matchMedia("(min-width: 1024px)").matches) {
      let sections1 = gsap.utils.toArray(".panel1");

      let scrollTween = gsap.to(sections1, {
        xPercent: -100 * (sections1.length - 1.5),
        ease: "none", // <-- IMPORTANT!
        scrollTrigger: {
          trigger: ".container1",
          pin: true,
          scrub: 0.1,
          //snap: directionalSnap(1 / (sections.length - 1)),
          end: "+=5000",
        },
      });
    }
  },
};
onUnmounted(() => {
  container1.value.revert(); // <- Easy Cleanup!
});
</script>

<style scoped>
.container1 {
  width: 300vw;
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
  overscroll-behavior: none;
}

.panel1 {
  width: 60vw;
  margin-top: 5vh;
}

.panel1 div {
  margin: 20%;
}
.panel1 h2 {
  font-size: 30px;
  margin: 5vh 0;
}
.panel1 img{
  height: 200px;
}

.menu1 {
  text-transform: uppercase;
  width: 100vw;
  position: absolute;
  padding: 0 1vw;
}
.menu1 div {
  border-bottom: solid 1px;
  display: flex;
  justify-content: space-between;
  padding: 20px 0 10px 0;
  z-index: 5;
  fill: currentColor;
}
.menu1 div svg {
  width: 20px;
  height: 20px;
}

@media screen and (max-width: 1024px) {
  /* tablettte */

  .horizontal{
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .container1 {
    width: 600%;
    height: 90vh;
    display: flex;
    flex-wrap: nowrap;
  }
  .panel1 {
    background-color: var(--color-secondaire);
    position: relative;
    z-index: 4;
    width: 70vw;
    margin: 15vh 10vw 10vh 3vw;
    font-weight: 300;
    overflow: hidden;
    border: solid 1px black;
    align-items: center;

  }
  .panel1 div {
    margin: 0 4%;

  }
  .panel1 img{
    margin: 5%;
  height: 200px;
  fill: white;
}
}

@media screen and (max-width: 767px) {
  /* mobile */

  .panel1 {
    position: relative;
    z-index: 4;
    width: 90vw;
    margin: 15vh 10vw 10vh 3vw;
    font-weight: 300;
    overflow: hidden;
    border: solid 1px black;

  }
  .panel1 img{
    margin: 2%;
  height: 15px;
}
}
</style>
