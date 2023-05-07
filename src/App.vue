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

import HeaderComponent from '@/components/HeaderComponent.vue'
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
  grid-column: 2;
  grid-row: 1;

  display: flex;
  flex-direction: column;
}

:nth-child(2) {
  flex-grow: 1;
}
</style>
