<template>
    <div class="dev">
    <div class="title">
        <h2>{{title}}</h2>
    </div>
    <div class="description">
        <h3>{{sous_title1}}</h3>
        <p>{{text1}}</p>
        <h3>{{sous_title2}}</h3>
        <p>{{text2}}</p>
        <h3>{{sous_title3}}</h3>
        <p>{{text3}}</p>
    </div>
    </div>
</template>

<script>
export default {

props: {
  title: {
    type: String,
    required: true,
  },
  sous_title1: {
    type: String,
    required: true,
  },
  sous_title2: {
    type: String,
    required: true,
  },
  sous_title3: {
    type: String,
    required: true,
  },
  text1: {
    type: String,
    required: true,
  },
  text2: {
    type: String,
    required: true,
  },
  text3: {
    type: String,
    required: true,
  },
}
}
</script>

<style lang="scss" scoped>
.dev{
    display: flex;
    background-color: var(--color-bg);
    color: var(--color-text);
    min-height: 60vh;
    align-items: flex-start;
    padding: 15vh 1vw;
}
.title{
  font-size: 4vw;
  width: 50%;
  margin-right: 14%;
}
.description{
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-right: 10%;

    h3{
        font-size: 25px;
    }
    p{
        margin-bottom: 5vh;
    }
}

@media screen and (max-width: 767px) {
  /* mobile */
  .dev{
    display: flex;
    min-height: 60vh;
    flex-direction: column;
    align-items: flex-start;
    padding: 15vh 5%;
}
.title{
  margin-left: 1vw;
  margin-bottom: 5vh;
  font-size: 40px;
  width: 100%;
}

.description{
    width: 100%;
}
}
</style>