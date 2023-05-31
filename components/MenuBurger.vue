<template>
    <div class="main">
		<div class="frame">
			<div class="frame__button">
				<button class="unbutton button-menu" aria-label="Open menu">
								
				</button>
			</div>
		</div>
		<div class="menu-wrap">
			
			<nav class="menu">

				<div class="menu__item">
					<NuxtLink to="/creation-site-web-lyon">
						<span class="menu__item-text">Site vitrine</span>
					<span class="menu__item-tiny"> Sur-mesure</span>
				</NuxtLink>
				</div>

				<div class="menu__item">
					<NuxtLink to="/creation-de-site-e-commerce">
					<span class="menu__item-text">E-commerce</span>
					<span class="menu__item-tiny"> Site e-commerce</span>
				</NuxtLink>

				</div>

				<div class="menu__item">
					<NuxtLink to="/agence-de-referencement-seo">
						<span class="menu__item-text">Référencement</span>
					<span class="menu__item-tiny"> SEO</span>
					</NuxtLink>
				</div>
				<div class="menu__item">
					<NuxtLink to="/agence-video-par-drone">
					<span class="menu__item-text">Vidéo</span>
					<span class="menu__item-tiny"> En drone</span>
					</NuxtLink>
				</div>
			</nav>
			<button class="unbutton button-close">
				<svg width="25" height="16" viewBox="0 0 25 16"><path d="M2.238 7.079h2.727M2.482 9.496l-.666-2.7"/><path d="M23.753 5.403s-1.87 16.88-22.03 1.785"/></svg>
			</button>
		</div>
		<!-- From https://codepen.io/sebastien-gilbert/pen/VwLzvGV?editors=1010 -->

		<!-- Edit the paths here: https://yqnn.github.io/svg-path-editor/ -->
		<svg class="overlay" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
			<path class="overlay__path" vector-effect="non-scaling-stroke" d="M 0 100 V 100 Q 50 100 100 100 V 100 z" />
		</svg>
	</div>
</template>

<script setup>
import { gsap } from 'gsap';

onMounted(() => {   
// frame element
const frame = document.querySelector('.frame');

// overlay (SVG path element)
const overlayPath = document.querySelector('.overlay__path');

// menu (wrap) element
const menuWrap = document.querySelector('.menu-wrap');

// menu items
const menuItems = menuWrap.querySelectorAll('.menu__item');

// open menu button
const openMenuCtrl = document.querySelector('button.button-menu');

// close menu button
const closeMenuCtrl = menuWrap.querySelector('.button-close');

// big title elements


let isAnimating = false;

// opens the menu
const openMenu = ()  => {
    
    if ( isAnimating ) return;
    isAnimating = true;
    gsap.timeline({
            onComplete: () => isAnimating = false
        })
        .set(overlayPath, {
            attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
        })
        .to(overlayPath, { 
            duration: 0.8,
            ease: 'power4.in',
            attr: { d: 'M 0 100 V 50 Q 50 0 100 50 V 100 z' }
        }, 0)
        .to(overlayPath, { 
            duration: 0.3,
            ease: 'power2',
            attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' },
            onComplete: () => {
                frame.classList.add('frame--menu-open');
                menuWrap.classList.add('menu-wrap--open');
            }
        })
    
        // now reveal
        .set(menuItems, { 
            opacity: 0
        })
        .set(overlayPath, { 
            attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' }
        })
        .to(overlayPath, { 
            duration: 0.3,
            ease: 'power2.in',
            attr: { d: 'M 0 0 V 50 Q 50 0 100 50 V 0 z' }
        })
        .to(overlayPath, { 
            duration: 0.8,
            ease: 'power4',
            attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' }
        })
        // menu items translate animation
        .to(menuItems, { 
            duration: 1.1,
            ease: 'power4',
            startAt: {y: 150},
            y: 0,
            opacity: 1,
            stagger: 0.05
        }, '>-=1.1');
    

}

// closes the menu
const closeMenu = ()  => {
    
    if ( isAnimating ) return;
    isAnimating = true;
    gsap.timeline({
            onComplete: () => isAnimating = false
        })
        .set(overlayPath, {
            attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' }
        })
        .to(overlayPath, { 
            duration: 0.8,
            ease: 'power4.in',
            attr: { d: 'M 0 0 V 50 Q 50 100 100 50 V 0 z' }
        }, 0)
        .to(overlayPath, { 
            duration: 0.3,
            ease: 'power2',
            attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' },
            onComplete: () => {
                frame.classList.remove('frame--menu-open');
                menuWrap.classList.remove('menu-wrap--open');
            }
        })
        // now reveal
        .set(overlayPath, { 
            attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' }
        })
        .to(overlayPath, { 
            duration: 0.3,
            ease: 'power2.in',
            attr: { d: 'M 0 100 V 50 Q 50 100 100 50 V 100 z' }
        })
        .to(overlayPath, { 
            duration: 0.8,
            ease: 'power4',
            attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
        })
       

}
const closeMenuLien = ()  => {
	isAnimating = false;
console.log(isAnimating);
frame.classList.remove('frame--menu-open');
                menuWrap.classList.remove('menu-wrap--open');
}


// click on menu button
openMenuCtrl.addEventListener('click', openMenu);
// click on close menu button
closeMenuCtrl.addEventListener('click', closeMenu);

menuItems.forEach(element => {
	element.addEventListener('click', closeMenuLien);

});

})
</script>

<style lang="scss" scoped>
body {
	margin: 0;
	--color-text: #FDFBF6;
	--color-text-alt: #3e4843;
	--color-heading-main: #FDFBF6;
	--color-heading-main-alt: #fff;
	--color-heading-sub: #FDFBF6;
	--color-menu: #F8F3E9;
	--color-menu-hover: #e4641a;
	--color-bg: green;
	--color-bg-menu: black;
	--color-link: #FDFBF6;
	--color-link-alt: #FDFBF6;
	--color-link-hover: #000;
	--color-link-alt-hover: #fff;
	--color-button-menu: rgb(229, 11, 11);
	--color-button-menu-hover: #FDFBF6;
	--color-button-close: #fff;
	--color-button-close-hover: #FDFBF6;
	// color: var(--color-text);
	background-color: var(--color-bg);
	font-family: meno-baenner, serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	overflow: hidden;
}

/* Page Loader */


@keyframes loaderAnim {
	to {
		opacity: 1;
		transform: scale3d(0.5,0.5,1);
	}
}

.unbutton {
	z-index: 6;
	background: none;
	color: var(--color-text);
	// background-color: #e4641a;
	width: 150px;
	height: 40px;
	border: 0;
	padding: 0;
	margin: 0;
	cursor: pointer;
    position: absolute;
	font-size: 1rem;
	top: 0.9vw;
    right: 1vw;
    @media (max-width: 840px) {
        left: 90vw;
    }
	
}

.unbutton:focus {
	outline: none;
}

.main {
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: 100vh;
    position: absolute;
    top: 0;
    pointer-events: none;

    // left: 98vw;
}

.frame {
	grid-area: 1 / 1 / 2 / 2;
	z-index: 100;
	display: grid;
	align-content: space-between;
	align-items: center;
	height: 100vh;
	padding: 10px 0vw;
	pointer-events: none;
	font-size: 1rem;
}

.frame a,
.frame button {
	pointer-events: auto;
}



.button-menu svg {
	transition: transform 0.5s ease;
}

.button-menu:focus-visible,
.button-menu:hover {
	fill: var(--color-button-menu-hover);
	border-color: var(--color-button-menu-hover);
}

.button-menu:hover svg {
	transform: scale(1.1);
}

.frame--menu-open .button-menu {
	opacity: 0;
	pointer-events: none;
}


.menu-wrap {
	grid-area: 1 / 1 / 2 / 2;
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: 100vh;
	position: relative;
	background: var(--color-bg-menu);
	pointer-events: none;
	opacity: 0;
}

.menu-wrap.menu-wrap--open {
	pointer-events: auto;
	opacity: 1;
}

.overlay {
	grid-area: 1 / 1 / 2 / 2;
	position: relative;
	z-index: 1000;
	pointer-events: none;
	width: 100vw;
	height: 100vh;
    stroke-width: 0;

}

.menu {
	grid-area: 1 / 1 / 2 / 2;
	display: flex;
	flex-direction: column;
	position: relative;
	// align-items: center;
padding-left: 35%;
	justify-content: center;
	height: 100vh;
    background-color: var(--color-text);
	z-index: 4;

}

.menu__item {
	font-size: 5vw;
	color: #fff;
	cursor: pointer;
	line-height: 1.1;
	font-weight: 300;
    // text-align: right;
    position: relative;
    will-change: opacity, transform;
    @media (max-width: 840px) {
        font-size: 12vw;

    }
}

.menu__item:hover .menu__item-tiny {
	color:  var(--color-bg);
}

.menu__item-tiny {
	font-size: 1rem;
}

.menu__item:nth-child(odd) {
	// margin-left: -10vw;
}

.menu__item-text {
	color: var(--color-bg);
}

.menu__item:hover .menu__item-text {
	// color: var(--color-menu-hover);
}

.button-close {
	position: absolute;
	top: 10px;
	right: 1vw;
	stroke: var(--color-bg);
	fill: none;
}

.button-close:focus-visible,
.button-close:hover {
	stroke: var(--color-bg);
}

@media screen and (min-width: 53em) {
	.frame {
		grid-template-columns: 390px 1fr 390px;
		grid-template-areas: 'author heading button'
							'... ... ...'
							'title links links';	
		font-size: 1.5rem;
	}
	
	.menu__item-tiny {
		font-size: 2rem;
	}
	
}

</style>