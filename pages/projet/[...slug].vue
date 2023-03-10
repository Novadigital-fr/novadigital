<script setup>
const { path } = useRoute()

const { data: projetList } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})


</script>

<template>

<div class="pageprojet">

  <div class="contentP">
    <ContentDoc />
  </div>

  <div class="otherarticle">
  </div>


</div>

</template>

<style>

.pageprojet{
  display: flex;
    background-color: var(--color-secondaire);
}
.contentP{
  width: 75%;
  margin-left: 15%;

}
.contentP h1{
  font-size: 45px;
  margin: 2vh 0;
}
.contentP h2{
  font-size: 30px;
  margin: 2vh 0;
}
.contentP img{
  width: 98vw;
  margin-left: -20%;
}


.contentP p{
  margin-bottom: 5vh;
}
.articles{
  flex-direction: column;
}


@media screen and (max-width: 1024px) {
  /* tablettte */

  .pageprojet{
flex-direction: column;
}

.contentP h1{
  font-size: 30px;
}

}

@media screen and (max-width: 767px) {
  /* mobile */
}

</style>