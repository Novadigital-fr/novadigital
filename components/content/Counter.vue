<script setup>
const { data: projetList } = useAsyncData("projetList", () => {
  return queryContent("/projet").find();
});
</script>

<template>
  <div>
    <img class="imageliste" :src="projet.image" alt="">
  </div>
</template>

<style scoped>
img{
    position: absolute;
top: 0;
left: 0;
z-index: 4;
  width: 100%;
  height: 50%;
}
</style>