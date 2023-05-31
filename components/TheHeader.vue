<template>
  <div class="header">
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
          <li class="link link--metis service">
          Nos services
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<style lang="scss" scoped>
.header{
  position: fixed;
  width: 100%;
  z-index: 6;
}
nav{
  display: flex;
border-bottom: solid 1px var(--color-bg);
margin: 0 1vw;

}
ul {
  padding:  0.8vw 0;
  list-style-type: none;
  display: flex;
  margin: 0;
  flex-grow: 1;
}


#droite{
  justify-content: flex-end;
  gap: 5vw;
}


header {
	opacity: 1; /* rendre la div visible en changeant l'opacité à 1 */
  background-color: var(--color-text);
  animation: slide-in-from-top 1s ease-in-out;

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

  #droite{
    display: none;
  }
  nav{
    border: none;
  }
  ul {
  padding: 10px 0;
  }
}

@media screen and (max-width: 767px) {
  /* mobile */
  ul{
    margin: 0 5%;
  }
}
</style>
