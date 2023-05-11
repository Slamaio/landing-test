<template>
  <div class="container--flex">
    <!-- <HighlightsItemComponent
      v-for="(highlight, index) in highlightsItems"
      :key="index"
      :img="highlight.img"
      :title="highlight.title"
      :text="highlight.text"
    /> -->
    <CarouselComponent ref="carousel" v-model="highlightsItems">
      <template #slides>
        <div
          class="slide"
          v-for="(item, index) in highlightsItems"
          :key="index"
          style="background-color: red; margin-right: 5px"
        >
          <article class="card">
            <img :src="item.img" alt="" class="image" />
            <div class="details">
              <h1>{{ item.title }}</h1>
              <p>{{ item.text }}</p>
            </div>
          </article>
        </div>
      </template>
    </CarouselComponent>
  </div>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'vue-facing-decorator'
import HighlightsItemComponent from './HighlightsItemComponent.vue'
import CarouselComponent from '@/components/CarouselComponent.vue'

@Component({
  components: {
    HighlightsItemComponent,
    CarouselComponent,
  },
})
export default class HighlightsComponent extends Vue {
  highlightsItems = [
    {
      img: 'https://picsum.photos/56',
      title: '1K+ People',
      text: 'Successfully Getting Home',
    },
    {
      img: 'https://picsum.photos/56',
      title: '56 Houses',
      text: 'Sold Monthly',
    },
    {
      img: 'https://picsum.photos/56',
      title: '4K+',
      text: 'People Looking for New Homes',
    },
  ]

  @Ref('carousel') carousel!: any
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
  /* max-width: fit-content; */

  margin: 3rem -2rem 3rem 1rem;
}

@media (min-width: 75rem) {
  .container--flex {
    grid-column: 3/5;
    margin: 3rem 0rem 3rem 3rem;
  }
}
</style>
