<template>
  <div class="grid--main">
    <section>Reviews</section>

    <div class="carousel">
      <div class="carousel__slide carousel__slide--left"></div>
      <div class="carousel__slide carousel__slide--center"></div>
      <div class="carousel__slide carousel__slide--right"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'

@Component({})
export default class ReviewsComponent extends Vue {}
</script>

<style scoped>
section {
  grid-column: 2;
  text-align: center;
}

.carousel {
  grid-column: span 3;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  overflow: hidden;
}

.carousel__slide {
  position: absolute;
  width: 740px;
  height: 400px;
}

.carousel__slide--left {
  left: -100%;
  transform: translateX(100%);
  background-color: pink;
}

.carousel__slide--center {
  left: 50%;
  transform: translateX(-50%);
  background-color: aquamarine;
}

.carousel__slide--right {
  right: -100%;
  transform: translateX(-100%);
  background-color: khaki;
}
</style>
