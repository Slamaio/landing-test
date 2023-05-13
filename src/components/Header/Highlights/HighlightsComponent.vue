<template>
  <div class="container--flex">
    <CarouselComponent
      ref="carousel"
      v-model="highlightsItems"
      :drag="false"
      :autoplay="3000"
      :gap="'1rem'"
    >
      <template #slides>
        <div class="slide" v-for="(item, index) in highlightsItems" :key="index">
          <HighlightsItemComponent :img="item.img" :title="item.title" :text="item.text" />
        </div>
      </template>
    </CarouselComponent>
  </div>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'vue-facing-decorator'
import HighlightsItemComponent from './HighlightsItemComponent.vue'
import CarouselComponent from '@/components/CarouselComponent.vue'
import { useAppStore } from '@/store/app'

@Component({
  components: {
    HighlightsItemComponent,
    CarouselComponent,
  },
})
export default class HighlightsComponent extends Vue {
  @Ref('carousel') carousel!: any

  store = useAppStore()
  highlightsItems = this.store.highlights
}
</script>

<style scoped>
.container--flex {
  display: flex;
  align-self: flex-end;
  overflow: hidden;
  max-width: calc(100vw - 3rem);

  margin: 3rem -2rem 3rem 1rem;
}

@media (min-width: 75rem) {
  .container--flex {
    grid-column: 3/5;
    margin: 3rem 0rem 3rem 3rem;
  }
}
</style>
