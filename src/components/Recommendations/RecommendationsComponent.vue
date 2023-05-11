<template>
  <section class="grid--main">
    <div class="title">
      <div class="featured-house">
        <h2>
          <span></span>
          Our Recommendation
        </h2>
        <h1>Featured House</h1>
      </div>
      <div class="category">
        <button
          class="category__button"
          :class="category == 'house' ? 'button--green' : ''"
          @click="category = 'house'"
        >
          House
        </button>
        <button
          class="category__button"
          :class="category == 'villa' ? 'button--green' : ''"
          @click="category = 'villa'"
        >
          Villa
        </button>
        <button
          class="category__button"
          :class="category == 'apartment' ? 'button--green' : ''"
          @click="category = 'apartment'"
        >
          Apartment
        </button>
      </div>
      <div class="arrow">
        <button class="arrow__button" @click="carousel.prev"><IconArrowBack /></button>
        <button class="arrow__button" @click="carousel.next"><IconArrowForward /></button>
      </div>
    </div>
    <div class="house" ref="house">
      <CarouselComponent ref="carousel" v-model="displayRecommendations">
        <template #slides>
          <div class="slide" v-for="(slide, index) in displayRecommendations" :key="index">
            <RecommendationCardComponent :item="slide" />
          </div>
        </template>
      </CarouselComponent>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'vue-facing-decorator'
import IconArrowBack from '@/components/icons/IconArrowBack.vue'
import IconArrowForward from '@/components/icons/IconArrowForward.vue'
import RecommendationCardComponent from './RecommendationCardComponent.vue'
import CarouselComponent from '../CarouselComponent.vue'

@Component({
  components: {
    IconArrowBack,
    IconArrowForward,
    RecommendationCardComponent,
    CarouselComponent,
  },
})
export default class RecommendationsComponent extends Vue {
  @Ref('house') house!: HTMLDivElement
  @Ref('carousel') carousel!: any

  itemsToShow = 0

  currIndex = 0
  category = 'house'
  recommendationsList = [
    {
      category: 'house',
      img: 'https://picsum.photos/id/237/340/382',
      title: 'House 1',
      price: 'price',
      tag: 'tag',
      seller: {
        avatar: 'https://picsum.photos/40',
        name: 'name',
        location: 'location',
      },
    },
    {
      category: 'house',
      img: 'https://picsum.photos/id/236/340/382',
      title: 'House 2',
      price: 'price',
      tag: 'tag',
      seller: {
        avatar: 'https://picsum.photos/40',
        name: 'name',
        location: 'location',
      },
    },
    {
      category: 'house',
      img: 'https://picsum.photos/id/235/340/382',
      title: 'House 3',
      price: 'price',
      tag: 'tag',
      seller: {
        avatar: 'https://picsum.photos/40',
        name: 'name',
        location: 'location',
      },
    },
    {
      category: 'house',
      img: 'https://picsum.photos/id/234/340/382',
      title: 'House 4',
      price: 'price',
      tag: 'tag',
      seller: {
        avatar: 'https://picsum.photos/40',
        name: 'name',
        location: 'location',
      },
    },
    {
      category: 'house',
      img: 'https://picsum.photos/id/233/340/382',
      title: 'House 5',
      price: 'price',
      tag: 'tag',
      seller: {
        avatar: 'https://picsum.photos/40',
        name: 'name',
        location: 'location',
      },
    },
    {
      category: 'villa',
      img: 'https://picsum.photos/id/237/340/382',
      title: 'Villa 1',
      price: 'price',
      tag: 'tag',
      seller: {
        avatar: 'https://picsum.photos/40',
        name: 'name',
        location: 'location',
      },
    },
    {
      category: 'apartment',
      img: 'https://picsum.photos/id/236/340/382',
      title: 'Apartment 2',
      price: 'price',
      tag: 'tag',
      seller: {
        avatar: 'https://picsum.photos/40',
        name: 'name',
        location: 'location',
      },
    },
  ]

  get displayRecommendations() {
    return this.recommendationsList.filter((rec) => rec.category == this.category)
  }

  mounted() {
    const observer = new ResizeObserver(() => {
      this.itemsToShow = this.house?.offsetWidth / 380
    })
    observer.observe(this.house)
  }
}
</script>

<style scoped>
section {
  display: grid;
  row-gap: 2.5rem;
}

.title {
  grid-column: 2;
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  justify-content: space-between;
  row-gap: 1rem;
}

.featured-house {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.featured-house > h1 {
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.5rem;

  text-transform: capitalize;

  color: var(--color-heading);
}

.featured-house > h2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.125rem;

  text-transform: capitalize;

  color: var(--vt-c-yellow);
}

.featured-house > h2 > span {
  width: 2rem;
  height: 0.0625rem;

  background-color: var(--vt-c-yellow);
}

.category {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.category__button {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  gap: 0.5rem;

  background-color: var(--vt-c-white);

  border: 0.0625rem solid #e0e3eb;
  border-radius: 2rem;

  font-weight: 500;
  font-size: 1.125rem;
  line-height: 156%;

  color: #888b97;
}

.button--green {
  background: #d1fae5;
  color: #10b981;
  border: none;
}

.arrow {
  display: flex;
  gap: 1rem;
}

.arrow__button {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  gap: 0.25rem;

  border-radius: 2rem;
}

.arrow__button > * {
  width: 1.75rem;
  height: 1.75rem;
}

.house {
  grid-column: 2/4;
  grid-row: 2;

  display: flex;
  gap: 2.5rem;
  overflow: hidden;
  max-width: calc(100vw - 2rem);

  margin: 0rem -2rem 0rem 0rem;
}

.house:deep(.inner) {
  gap: 2.5rem;
}

@media (min-width: 75rem) {
  .featured-house > h1 {
    margin-left: 2.5rem;
  }
  .house {
    margin-left: 2.5rem;
    margin-right: 0rem;
  }
}
</style>