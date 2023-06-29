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
.blog {
  display: flex;
  flex-flow: column wrap;
  align-content: space-between;
  /* Your container needs a fixed height, and it 
   * needs to be taller than your tallest column. */
   padding: 0 2%;
  height: 4000px; 
}

.card {
  width: 32%;
  margin-bottom: 2%; /* Optional */
  background-color: var(--color-bg);
  color: var(--color-text);
}

/* Re-order items into 3 rows */
.card:nth-child(3n+1) { order: 1; }
.card:nth-child(3n+2) { order: 2; }
.card:nth-child(3n)   { order: 3; }

/* Force new columns */
.blog::before,
.blog::after {
  content: "";
  flex-basis: 100%;
  width: 0;
  order: 2;
}
.imageliste{
  width: 100%;
}
.media{
  width: 100%;
  padding: 8%;
}
.titleArticle{
  font-size: 30px;
  margin-bottom: 4%;
}
@media screen and (max-width: 1024px) {
  /* tablettte */


}

@media screen and (max-width: 767px) {
  /* mobile */

  .blog {
  display: flex;
  flex-direction: column;
  flex-flow:  wrap;
  align-content: flex-start;
  gap: 30px;
  padding: 0 5%;
  height: 4000px; 
}

.card {
  width: 100%;
  margin-bottom: 0; /* Optional */
}
}
</style>
