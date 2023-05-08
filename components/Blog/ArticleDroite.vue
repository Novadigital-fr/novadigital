<script setup>
const { data: blogPostList } = useAsyncData("blogPostList", () => {
  return queryContent("/blog").find();
});
</script>

<template>
  <div class="partie_blog">
    <h3 class="title_blog">Nos articles</h3>

  <div class="blog">

 
    <div v-for="(blogPost, index) in blogPostList.slice(-2)" :key="index" class="card">
    <NuxtLink :to="blogPost._path">

      <section class="articles">
      <div class="image">
      </div>
        <div class="media">
          <div class="">
            <h3 class="titleArticle link link--metis">
              {{ blogPost.title }}
            </h3>
            <div class="content">
              {{ blogPost.description.length > 150 ? blogPost.description.substring(0, 150) + '...' : blogPost.description }}
          </div>
          </div>
        </div>
       
      </section>
    </NuxtLink>
  </div>
</div>
<div class="bottom">
<div class="left">
<p>Tenez-vous informé des dernières actualités grâce au blog de Novadigital, qui propose des articles, des conseils approfondies et des contenus exclusifs </p>
<NuxtLink to="/notreblog" class="link link--metis"> Nos articles</NuxtLink>
</div>
<div class="right"></div>
</div>
</div>
</template>

<style lang="scss" scoped>

.partie_blog{
  padding: 10vh 1vw;
  // background-color: var(--color-bg);
  // color: var(--color-text);
}
.title_blog{
  font-size: 4vw;
}
.blog{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 30px;
  align-content: flex-start;

}
.bottom{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 30px;
  align-content: flex-start;
}
.bottom div{
  margin: 5% 0;
  width: 35vw;
  // align-items: baseline;
  padding: 50px;

  .link{
    font-size: 25px;
  }

}
.left{
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.articles {
  margin: 5% 0;
  display: flex;
  // background-color: var(--color-secondaire);
  width: 35vw;
  align-items: baseline;
}

.media{
  width: 35vw;
  padding: 50px;
}
.titleArticle{
  font-size: 25px;
  margin-bottom: 4%;
}
.link {
  cursor: pointer;
  position: relative;
  // white-space: nowrap;
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

@media screen and (max-width: 1024px) {
  /* tablettte */

  .articles {
  
  width: 100%;
}
.media{
  width: 100%;
  padding: 5%;
}
.title_blog{
  font-size: 40px;
  padding: 0 5%;
}
.bottom div{
  margin: 5% 0;
  width: 100%;
  padding: 5%;

  .link{
    font-size: 25px;
  }

}

}

@media screen and (max-width: 767px) {
  /* mobile */
}
</style>
