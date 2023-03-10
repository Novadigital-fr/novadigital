<template>
  <div>
    <header>
      <nav>
        <ul>
          <li class="link link--metis">
            <NuxtLink to="/nosprojets">Projets</NuxtLink>
          </li>
          <li class="link link--metis">
            <NuxtLink to="/">Agence web</NuxtLink>
          </li>
          <li class="link link--metis">
            <NuxtLink to="/notreblog">Articles</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<style scoped>


ul {
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  animation: slide-in-from-top 1s ease-in-out;
  }
  
  /* définir l'animation de fondu enchaîné */
  @keyframes slide-in-from-top {
from {
transform: translateY(-50px);
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
}
</style>
