<script setup>
const { path } = useRoute()

const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})
</script>

<template>

<div class="pagearticle">

  <div class="article">
    <ContentDoc />
  </div>

  <div class="otherarticle">
  <BlogArticleDroite />
  </div>


</div>

</template>

<style>

.pagearticle{
  display: flex;
}
.article{
  width: 75%;
  padding: 5% 15%;
}
.article h1{
  font-size: 45px;
  margin: 2vh 0;
}
.article h2{
  font-size: 30px;
  margin: 2vh 0;
}
.article h3{
  font-size: 25px;
  margin: 2vh 0;
  text-decoration: underline;
}
.article h4{
  font-size: 25px;
  margin: 2vh 0;
  text-decoration: underline;
}
.article h5{
  font-size: 25px;
  margin: 2vh 0;
  text-decoration: underline;
}
.article img{
  width: 100%;
}
.article p{
  margin-bottom: 5vh;
}
.otherarticle{
  width: 25%;
}
.articles{
  flex-direction: column;
}
@media screen and (max-width: 1024px) {
  /* tablettte */

  .pagearticle{
flex-direction: column;
}
.article{
  width: 100%;
  padding: 5% 10%;
}
.article h1{
  font-size: 30px;
}
.otherarticle{
  width: 100%;
}
}

@media screen and (max-width: 767px) {
  /* mobile */
}

</style>

