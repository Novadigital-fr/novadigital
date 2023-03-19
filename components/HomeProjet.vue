<template>
    <div class="full">
      <div class="menu">
    <a href="#notreProcede" class="link" >
            <div>
                <p class="MnotreProcede">PROJETS SELECTIONNÉS</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="57.657" height="57.657" viewBox="0 0 57.657 57.657"><defs></defs><g transform="translate(-13057.099 -5086.941)"><path class="a" d="M52,4H-4V-4H52Z" transform="translate(13062.756 5090.941)"/><path class="a" d="M51.766,4H-4V-4H51.766Z" transform="translate(13110.756 5091.059) rotate(90)"/><path class="a" d="M0,47.657-5.657,42,42-5.657,47.657,0Z" transform="translate(13062.756 5096.941)"/></g></svg>						
            </div>
        </a>
    </div>
  <div class="content">

    <figure v-for="projet in projetList" :key="projet._path" class="item">
      
      <figcaption class="item__caption">
        <span class="item__caption-number oh"
          ><span class="oh__inner">01</span></span
        >
        <h2 class="item__caption-title oh">
          <span class="oh__inner">{{ projet.categorie }}</span>
        </h2>
        <p class="item__caption-description">
          {{ projet.description }}
        </p>
      </figcaption>
      <div class="item__image-wrap">
        <NuxtLink :to="projet._path">
        <div class="item__image">
          <img class="parallax-image imageliste" :src="projet.image" :alt="projet.title">
        </div>
      </NuxtLink>
      </div>
 
    </figure>
   
  </div>
</div>
</template>

<script setup>

const { data: projetList } = useAsyncData("projetList", () => {
  return queryContent("/projet").find();
});


</script>

<style scoped>

img{
  height: 50vh;
  width: 50vw;
}
html {
	scroll-behavior: initial;
}


.full {
    width: 100%;
	min-height: 100vh;
	margin: 0;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

body #cdawrap {
	justify-self: start;
}

.oh {
	position: relative;
	overflow: hidden;
}

.oh__inner {
	will-change: transform;
	display: inline-block;
}

.content {
	position: relative;
	/* padding: 20vh 13.25vw 2.5rem; */
}

.item {
	grid-gap: 5vh;
	grid-template-columns: 100%;
	align-content: center;
	justify-content: center;
	display: grid;
	grid-template-areas: 'caption' 'img';
	margin: 0 auto 2.5vh;
}

.item__image-wrap {
	grid-area: img;
	width: 100%;
	aspect-ratio: 800/500;
	justify-self: center;
}

.item__image {
	width: 100%;
	aspect-ratio: 800/500;
	position: relative;
	overflow: hidden;
	will-change: transform;
}

.item__image img {
	width: 100%;
	height: 100%;
	background-size: cover;
	will-change: transform;
}

.item__caption {
	grid-area: caption;
	position: relative;
	z-index: 10;
}

.item__caption-title {
	white-space: nowrap;
	width: min-content;
	line-height: 1.2;
	font-size: clamp(2rem, 6vw, 3.5rem);
	font-weight: 300;
	margin: 0;
	color: var(--color-title);
}

.item__caption-description {
	max-width: 200px;
	line-height: 1.2;
}

.item__caption-number {
	display: inline-block;
}
.menu{
    text-transform: uppercase;
    width: 98vw;
    position: absolute;
}
.menu div{
    border-bottom: solid 1px;
    display: flex;
    justify-content: space-between;
    padding: 20px 0 10px 0;
	z-index: 5;
	fill: currentColor;
}
.menu div svg{
	width: 20px;
	height: 20px;
}
.content {
		padding-top: 20vh;
	}

@media screen and (min-width: 53em) {


	.item {
		grid-gap: 1vw;
		grid-template-columns: 25vw 1fr;
		grid-template-areas: 'caption img';
	}

	.content {
		padding-top: 40vh;
	}

	.content .item__image {
		grid-column: 2 / span 2;
	}


}

</style>
