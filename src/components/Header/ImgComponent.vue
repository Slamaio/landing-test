<template>
  <figure><img src="@/assets/images/image 6.svg" /></figure>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'

@Component({})
export default class ImgComponent extends Vue {}
</script>

<style scoped>
figure {
  margin: -2rem;
  width: calc(100% + 4rem);
  height: calc(100% + 2rem);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;

  border-radius: 0rem 0rem 0rem 5rem;

  filter: brightness(90%);
}

@media (min-width: 75rem) {
  figure {
    grid-column: 3;
    margin: 0rem 0rem 0rem 0rem;
    width: calc(100%);
    height: calc(100%);
  }

  img {
    border-radius: 0rem 0rem 0rem 5rem;
  }
}

/* figure {
  position: absolute;
  top: 0;
  right: 0;
  grid-column: 3/5;
  z-index: -1;
}
img {
  border-radius: 0px 0px 0px 5rem;
  max-width: calc(100% + 4rem);
  object-fit: cover;
}

@media (max-width: 64rem) {
  figure {
    opacity: 0.4;
    background-color: #000;
    grid-column: 1;
  }
  img {
    margin: -2rem;
  }
} */
</style>
