<template>
  <figure><img src="@/assets/images/image_6.svg" /></figure>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'

@Component({})
export default class ImgComponent extends Vue {}
</script>

<style scoped lang="scss">
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
    margin: 0rem;
    width: 100%;
    height: 100%;
  }

  img {
    border-radius: 0rem 0rem 0rem 5rem;
  }
}
</style>
