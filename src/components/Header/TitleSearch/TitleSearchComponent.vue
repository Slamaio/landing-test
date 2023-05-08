<template>
  <article>
    <TitleComponent />
    <SearchComponent />
    <PartnershipComponent />
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import TitleComponent from './TitleComponent.vue'
import SearchComponent from './SearchComponent.vue'
import PartnershipComponent from './PartnershipComponent.vue'

@Component({
  components: {
    TitleComponent,
    SearchComponent,
    PartnershipComponent,
  },
})
export default class TitleSearchComponent extends Vue {}
</script>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-top: 3rem;

  max-width: 31rem;
  grid-column: 2/3;
}

@media (min-width: 75rem) {
  article {
    margin-top: 6rem;
  }
}
</style>
