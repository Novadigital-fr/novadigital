<template>
  <div>
    <div class="menu">
      <NuxtLink :to="link" class="link">
        <div>
          <p class="MnotreProcede">En savoir plus</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="57.657"
            height="57.657"
            viewBox="0 0 57.657 57.657"
          >
            <defs></defs>
            <g transform="translate(-13057.099 -5086.941)">
              <path
                class="a"
                d="M52,4H-4V-4H52Z"
                transform="translate(13062.756 5090.941)"
              />
              <path
                class="a"
                d="M51.766,4H-4V-4H51.766Z"
                transform="translate(13110.756 5091.059) rotate(90)"
              />
              <path
                class="a"
                d="M0,47.657-5.657,42,42-5.657,47.657,0Z"
                transform="translate(13062.756 5096.941)"
              />
            </g>
          </svg>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.menu {
  margin-top: 5%;
  width: 100%;
}
.menu:hover {
  transition: 0.5s;
  background-color: var(--color-secondaire);
}
.menu div {
  border-bottom: solid 1px;
  display: flex;
  justify-content: space-between;
  padding: 20px 0 10px 0;
  z-index: 5;
  fill: currentColor;
}
.menu div svg {
  width: 20px;
  height: 20px;
}
</style>
