<script setup>
const { data: blogPostList } = useAsyncData("blogPostList", () => {
  return queryContent("/blog").find();
});
</script>

<template>
  <div class="blog">
 
  <div v-for="blogPost in blogPostList" :key="blogPost._path" class="card">
    <NuxtLink :to="blogPost._path">

      <section class="articles">
      <div class="image">
      <img class="imageliste" :src="blogPost.image" alt="">
      </div>
        <div class="media">
          <div class="">
            <h3 class="titleArticle">
              {{ blogPost.title }}
            </h3>
            <div class="content">
            {{ blogPost.description }}
          </div>
          </div>
        </div>
       
      </section>
    </NuxtLink>
  </div>
</div>
</template>

<style scoped>
.blog{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;

}

.articles {
  /* padding: 1%; */
  margin: 5% 0;
  display: flex;
  background-color: var(--color-secondaire);
  color: var(--color-bg);
  width: 32vw;
  align-items: baseline;

}
.imageliste{
  width: 32vw;
}
.media{
  width: 32vw;
  padding: 8%;
}
.titleArticle{
  font-size: 30px;
  margin-bottom: 4%;
}
@media screen and (max-width: 1024px) {
  /* tablettte */

  .articles {
  
  width: 100%;
}
.imageliste{
  width: 100%;
}
.media{
  width: 100%;
  padding: 8%;
}

}

@media screen and (max-width: 767px) {
  /* mobile */
}
</style>
