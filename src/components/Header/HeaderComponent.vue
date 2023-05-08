<template>
  <header class="grid--main">
    <ImgComponent class="img-component" />
    <NavbarComponent />
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import NavbarComponent from './NavbarComponent.vue'
import ImgComponent from './ImgComponent.vue'

@Component({
  components: {
    NavbarComponent,
    ImgComponent,
  },
})
export default class HeaderComponent extends Vue {}
</script>

<style scoped>
header {
  position: relative;
}

.img-component {
  grid-column: span 3;
}
</style>
