<template>
  <header>
    <!-- <div class="color-blur">
      <figure class="vector vector--1"></figure>
      <figure class="vector vector--2"></figure>
    </div> -->
    <ImgComponent />
    <NavbarComponent />
    <TitleSearchComponent />
    <!-- <HighlightsComponent /> -->
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import ImgComponent from './ImgComponent.vue'
import NavbarComponent from './NavbarComponent.vue'
import TitleSearchComponent from './TitleSearch/TitleSearchComponent.vue'
import HighlightsComponent from './Highlights/HighlightsComponent.vue'

@Component({
  components: {
    ImgComponent,
    NavbarComponent,
    TitleSearchComponent,
    HighlightsComponent,
  },
})
export default class HeaderComponent extends Vue {}
</script>

<style scoped lang="scss">
header {
  position: relative;

  .color-blur {
    position: relative;

    .vector {
      position: absolute;
      width: 438px;
      height: 494px;

      opacity: 0.3;
      transform: rotate(90deg);

      &--1 {
        background: #82ffd2;
      }

      &--2 {
        background: #82f7ff;
      }
    }
  }

  @media (min-width: 75rem) {
    display: grid;
    grid-template-columns: 7.5rem 1fr 1fr 7.5rem;
  }
}
</style>
