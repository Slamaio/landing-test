<template>
  <figure><img src="@/assets/images/image 6.svg" width="720" height="720" /></figure>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'

@Component({})
export default class ImgComponent extends Vue {}
</script>

<style scoped>
img {
  border-radius: 0px 0px 0px 5rem;
  position: absolute;
  top: 0;
  right: 0;
  max-width: calc(100% + 4rem);
}

@media (max-width: 64rem) {
  img {
    margin: -2rem;
    object-fit: cover;
  }
}
</style>
