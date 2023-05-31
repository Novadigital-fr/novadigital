<template>
  <div>
    <MenuBurger/>

    <header>
      <nav>
      <ul id="left">
      <li>
        <li class="link link--metis">
            <NuxtLink to="/">NOVADIGITAL</NuxtLink>
          </li>
      </li>
      </ul>
        <ul id="droite" >
          
          <li class="link link--metis">
            <NuxtLink to="/nosprojets">Nos projets</NuxtLink>
          </li>
          <li class="link link--metis">
            <NuxtLink to="/notreblog">Nos articles</NuxtLink>
          </li>
          <li>
          Nos services
          </li>
        </ul>
      </nav>
    </header>
    <slot />
  <TheFooter />
  </div>
</template>

<style lang="scss" scoped>
header{
  // position: fixed;
  width: 100%;
  z-index: 4;

}
nav{
  display: flex;
border-bottom: solid 1px var(--color-bg);
margin: 0 1vw;
animation: slide-in-from-top 1s ease-in-out;


}
ul {
  padding:  0.8vw 0;
  list-style-type: none;
  display: flex;
  margin: 0;
  flex-grow: 1;
}

.unbutton {
	color: var(--color-text) !important;
}
#droite{
  justify-content: flex-end;
  gap: 5vw;
}

.link {
  cursor: pointer;
  position: relative;
  white-space: nowrap;

}

.link::before,
.link::after {
  position: absolute;
  width: 100%;
  height: 1px;
  background: currentColor;
  top: 100%;
  left: 0;
  pointer-events: none;
}
.link::before {
  content: "";
  /* show by default */
}

.link--metis::before {
  transform-origin: 100% 50%;
  transform: scale3d(0, 1, 1);
  transition: transform 0.3s;
}

.link--metis:hover::before {
  transform-origin: 0% 50%;
  transform: scale3d(1, 1, 1);
}

header {
	opacity: 1; /* rendre la div visible en changeant l'opacité à 1 */
  background-color: var(--color-bg);
  color: var(--color-text);
  }
  /* définir l'animation de fondu enchaîné */
  @keyframes slide-in-from-top {
  from {
  transform: translateY(-70px);
  }
  to {
  transform: translateY(0);
  }
}

@media screen and (max-width: 1024px) {
  /* tablettte */
}

@media screen and (max-width: 767px) {
  /* mobile */
  ul{
    margin: 0 5%;
  }
}
</style>
