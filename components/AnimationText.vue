<template>
    <div>
        
    </div>
</template>
<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {

let titleheader = document.querySelectorAll('.animationHeader');
let title = document.querySelectorAll(".animation");

for (let index = 0; index < title.length; index++) {
        const element = title[index];
        // const ourText = new SplitType(element, { types: 'chars' })
        // const chars = ourText.chars
    
        gsap.fromTo(
            element,
            { 
            y: 100,
            opacity: 0
            },
            {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: element,
                start: 'center+=40% bottom',
                end: '+=50%',
                scrub: true
            },
            }
        )
    };
    for (let index = 0; index < titleheader.length; index++) {
        const element = titleheader[index];
        // const ourText = new SplitType(element, { types: 'chars' })
        // const chars = ourText.chars

        gsap.fromTo(
            element,
            { 
            y: 200,
            opacity: 0
            },
            {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 2,
            ease: 'power4.out',
            }
        )
    };
  }
  }
</script>

<style scoped>
.animation, .animationHeader{
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}
</style>