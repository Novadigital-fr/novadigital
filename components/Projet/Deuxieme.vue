<template>
    <div class="full">
        <div class="top" :style="{ backgroundImage: `url(${image})` }"></div>
        <div class="bottom">
        <div class="left">
            <h3>{{title}}</h3>
        </div>
        <div class="right">
            <p>
            {{ p1 }}
            <br><br>
            {{ p2 }}
            <br><br>
            {{ p3 }}
            <br><br>
            {{ p4 }}
            </p>
        </div>
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
    p1: {
      type: String,
    },
    p2: {
      type: String,
    },
    p3: {
      type: String,
    },
    p4: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.full{
    background-color: var(--color-bg);
  color: var(--color-text);
}
.top{
height: 80vh;
  background-position: center ;
  background-size: cover;
  background-repeat: no-repeat;
 
}
.bottom{
    display: flex;
padding: 25vh 10vw;
@media (max-width: 900px) {
  padding: 25vh 4vw;
  flex-direction: column;

  }
    .left{
        width: 40%;
        @media (max-width: 900px) {
          width: 100%;
          margin-bottom: 5vh;

  }
        h3{
            font-size: 60px;
            @media (max-width: 900px) {
              font-size: 40px;

            }
        }
    }
    .right{
        width: 60%;
        padding-left: 5vw;
        @media (max-width: 900px) {
          width: 100%;
          padding-left: 0vw;


        }
    }
}
</style>