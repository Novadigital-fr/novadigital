<template>
  <div class="full">
    <div class="header">
      <div class="titre">
        <h3 class="title">NOVADIGITAL</h3>
        <h1>Agence web lyon novadigital</h1>
      </div>
      <div class="categorie">
        <h2>Agence web lyon</h2>
        <p>
          Nous sommes une agence web jeune et dynamique proposant des sites
          innovants
        </p>
        <h2 class="soustitre">Création sur mesure</h2>
        <p>
          Création de site web créatifs qui représentent les valeurs de nos clients.
        </p>
      </div>
    </div>
    <video class="Video-principal" autoplay playsinline muted loop>
      <source src="../assets/img/vidéo-novasite.mp4" type=video/mp4>
    </video>
  </div>
</template>

<script setup>

</script>

<style scoped>
.header {
  height: 50vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 5vh;
  padding-top: 22vh;
}
.title {
  font-size: 100px;
}

.Video-principal {
  margin-top: 5vh;
  width: 100%;
}
.categorie {
  margin-right: 5vw;
  margin-top: 2vh;
}
.categorie h2 {
  font-size: 20px;
  margin-bottom: 1vh;
  font-weight: BOLD;
}
.categorie p {
  width: 20vw;
}
.soustitre {
  margin-top: 4vh;
}


@media screen and (max-width: 1024px) {
  /* tablettte */

  .title {
    font-size: 60px;
  }
  .categorie p {
    width: 30vw;
  }
}

@media screen and (max-width: 767px) {
  /* mobile */
  .title {
    font-size: 40px;
  }
  .categorie p {
    width: 90vw;
  }
  .header {
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 5vh;
    padding-top: 22vh;
  }
}
</style>
