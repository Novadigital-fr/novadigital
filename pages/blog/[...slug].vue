<script setup>
const { path } = useRoute()

const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})
definePageMeta({
  layout: "blog",
});
</script>

<template>

<div class="pagearticle">

  <div class="article">
    <ContentDoc />
    <script type="application/ld+json" id="schema-org-graph">
        {{
          JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": blogPost.title,
            "description": blogPost.description,
            "image": blogPost.image,
            "datePublished": blogPost.date,
            "author": {
              "@type": "Person",
              "name": blogPost.author
            }
          })
        }}
      </script>
  </div>

  <!-- <div class="otherarticle">
  <BlogArticleDroite />
  </div> -->
<BlogSidebar/>

</div>

</template>

<style>

.pagearticle{
  display: flex;
}
.article{
  width: 45%;
  margin: 5% 0 5% 10%;
  /* padding: 5% 15%; */
}
.article img,.article video{
 width: 100%;
  
}
.article p a{
color: var(--color-secondaire);
}
.article pre{
  background-color: var(--color-bg);
  padding: 2%;
  border-radius: 4px;
  overflow: overlay;
}
.article h1{
  font-size: 35px;
  margin: 5vh 0;
  /* font-weight: 500; */
  /* text-align: center; */
}
.article h2{
  font-size: 35px;
  margin: 3vh 0;
  font-weight: 500;

}
.article h3{
  font-size: 25px;
  margin: 2vh 0;
  font-weight: 500;

  /* text-decoration: underline; */
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

.article p{
  margin-bottom: 5vh;
  line-height: 26px;
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
  margin: 0;

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
  .article h1{
  font-size: 25px;
}
.article h2{
  font-size: 25px;
  margin: 3vh 0;
  font-weight: 500;

}
.article h3{
  font-size: 22px;
  margin: 2vh 0;
  font-weight: 500;

  /* text-decoration: underline; */
}
}

</style>

