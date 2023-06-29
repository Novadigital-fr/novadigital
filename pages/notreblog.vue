<template>
    <main>
      <!-- <TheHero> A Nuxt Content v2 Blog with Bulma </TheHero> -->
      <BlogHeaderNosArticles/>
      <BlogPostList />
    </main>
</template>

<script setup>
useHead({
  title: 'Nos articles web Novadigital',
  meta: [
    { name: 'description', content: 'Découvrez les articles de Novadigital sur le développement web, la création de site web et le référencement SEO.' }
  ],
})

</script>

<style>

</style>