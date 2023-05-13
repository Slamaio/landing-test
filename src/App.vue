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

<style scoped lang="scss">
.container--flex {
  display: flex;
  flex-wrap: wrap;
  gap: 7.5rem;
  max-width: calc(100vw - (100vw - 100%));

  > * {
    width: 100%;
  }
}
</style>
