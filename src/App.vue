<template>
  <div class="container--flex">
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
.container--flex {
  /* grid-column: span 3; */

  display: flex;
  flex-wrap: wrap;

  gap: 7.5rem;
}

.container--flex > * {
  width: 100%;
}
</style>
