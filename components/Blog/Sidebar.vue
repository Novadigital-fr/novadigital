<template>
    <div class="right">
        <div v-for="(blogPost, index) in blogPostList.slice(-3)" :key="index" class="card">
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
          </div>
        </div>
      </section>
    </NuxtLink>
  </div>
  <NuxtLink to="/notreblog">
  <Button text="Nos articles" />
</NuxtLink>
    </div>
</template>

<script setup>
const { data: blogPostList } = useAsyncData("blogPostList", () => {
  return queryContent("/blog").find();
});
</script>

<style lang="scss" scoped>

.right{
    height: 100%;
    width: 30%;
    position: fixed;
    right: 0;
    border-left: solid 1px var(--color-bg);
    padding: 10% 4%;
    margin-top: -5%;
    @media (max-width: 867px) {
      position: relative;
      width: 100%;
      border-left: none;

    }
}
.articles{
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    gap: 10%;
    margin-bottom: 10%;
}
.media{
    width: 55%;
    flex-wrap: wrap;
    
}
.image{
    width: 35%;
    height:100px;
    
}
.imageliste{
    width: 100%;
    height: 100%;
}
</style>