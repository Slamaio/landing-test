<template>
  <div class="container">
    <HeaderComponent />
    <RouterView />
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import { RouterView } from 'vue-router'
import { Component, Vue } from 'vue-facing-decorator'

import HeaderComponent from '@/components/Header/HeaderComponent.vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'

@Component({
  components: {
    RouterView,
    HeaderComponent,
    FooterComponent,
  },
})
export default class App extends Vue {}
</script>

<style scoped>
.container {
  grid-row: 1;

  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
}

.container > * {
  width: 100%;
}

:nth-child(2) {
  flex-grow: 1;
}
</style>
