<template>
    <main class="home">
      <HomeHeader />
      <MenuPage />
      <NotreApproche />
      <!-- <HomeHorizontal /> -->
      <PresentationProjet/>
      <HomeProjet />
      <AnimationText />

    </main>
</template>
<script setup>

useHead({
  title: 'Agence web lyon novadigital',
  meta: [
    { name: 'description', content: 'Nous sommes une agence jeune et dynamique proposant des sites innovants et créatifs qui représentent les valeurs et les demandes de nos clients.' }
  ],
})


</script>
<style lang="scss" scoped>
.home{
  // padding: 0 1vw;
}
</style>