<template>
  <div class="body">

  <div class="main">
    <div class="slider">
      <div class="slider-inner">
        <div class="item">
          <div class="img"></div>
        </div>
        <div class="item">
          <div class="img"></div>
        </div>
        <div class="item">
          <div class="img"></div>
        </div>
        <div class="item">
          <div class="img"></div>
        </div>
      
      
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

onMounted(() => {

let images = [...document.querySelectorAll('.img')];
let slider = document.querySelector('.slider');
let body = document.querySelector('.body');
let sliderWidth;
let imageWidth;
let current = 0;
let target = 0;
let ease = .05;

images.forEach((img, idx) => {
  img.style.backgroundImage = `url(./img/gellini${idx+1}.png)`
})

function lerp(start, end, t){
  return start * (1-t) + end * t
}
function setTransform(el, transform){
  el.style.transform = transform;
}
function init(){
  sliderWidth = slider.getBoundingClientRect().width;
  imageWidth = sliderWidth / images.length;
  body.style.height = `${sliderWidth - (window.innerWidth = window.innerHeight)}px`
}

function animate(){
  current = parseFloat(lerp(current, target, ease)).toFixed(2);
  target= window.scrollY;
  setTransform(slider, `translateX(-${current}px)`)
  requestAnimationFrame(animate);
}
init();
animate()

})

</script>

<style lang="scss" scoped>

.main{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  // background-color: var(--color-text);

}
.slider{
  position: absolute;
  top: 0;
  left: 0;
  width: 2800px;
  height: 100%;
}
.slider-inner{
  position: absolute;
  top: 15%;
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: space-around;

}

.item{
  position: relative;
  width: 400px;
  height: 100%;
  overflow: hidden;
}
.img{
  position: absolute;
  left: -100px;
  width: 600px;
  height: 100%;
  background-position: center;
  background-size: cover;

}


</style>
