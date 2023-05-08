<template>
  <div class="container--flex">
    <HighlightsItemComponent
      v-for="(highlight, index) in highlightsItems"
      :key="index"
      :img="highlight.img"
      :title="highlight.title"
      :text="highlight.text"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import HighlightsItemComponent from './HighlightsItemComponent.vue'

@Component({
  components: {
    HighlightsItemComponent,
  },
})
export default class HighlightsComponent extends Vue {
  highlightsItems = [
    {
      img: '',
      title: '1K+ People',
      text: 'Successfully Getting Home',
    },
    {
      img: '',
      title: '56 Houses',
      text: 'Sold Monthly',
    },
    {
      img: '',
      title: '4K+',
      text: 'People Looking for New Homes',
    },
  ]
}
</script>

<style scoped>
.container--flex {
  display: flex;
  align-self: flex-end;
  overflow: hidden;
  padding: 0px;
  gap: 1rem;

  max-height: 6.5rem;

  margin: 3rem -2rem 3rem 1rem;
}

@media (min-width: 75rem) {
  .container--flex {
    grid-column: 3/5;
    margin: 3rem 0rem 3rem 3rem;
  }
}
</style>
