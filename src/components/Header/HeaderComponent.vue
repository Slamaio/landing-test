<template>
  <header>
    <ImgComponent />
    <NavbarComponent />
    <TitleSearchComponent />
    <HighlightsComponent />
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

<style scoped>
header {
  position: relative;
  /* min-height: 720px; */
}

@media (min-width: 75rem) {
  header {
    display: grid;
    grid-template-columns: 7.5rem 1fr 1fr 7.5rem;
  }
}
</style>
