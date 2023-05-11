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
        <button class="category__button button--green">House</button>
        <button class="category__button">Villa</button>
        <button class="category__button">Apartment</button>
      </div>
      <div class="arrow">
        <button class="arrow__button"><IconArrowBack /></button>
        <button class="arrow__button"><IconArrowForward /></button>
      </div>
    </div>
    <div class="house" ref="house">
      <!-- <RecommendationCardComponent
        v-for="(slide, index) in recommendationsList"
        :key="index"
        class="carousel__item"
        :item="slide"
      /> -->
    </div>
    <!-- <div class="house" ref="house">
      <Carousel :items-to-show="itemsToShow" :wrap-around="true" :snapAlign="'start'">
        <Slide v-for="(slide, index) in recommendationsList" :key="index">
          <RecommendationCardComponent class="carousel__item" :item="slide" />
        </Slide>
      </Carousel>
    </div> -->
  </section>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'vue-facing-decorator'
import IconArrowBack from '@/components/icons/IconArrowBack.vue'
import IconArrowForward from '@/components/icons/IconArrowForward.vue'
import RecommendationCardComponent from './RecommendationCardComponent.vue'

import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

@Component({
  components: {
    IconArrowBack,
    IconArrowForward,
    RecommendationCardComponent,

    Carousel,
    Slide,
    Navigation,
  },
})
export default class RecommendationsComponent extends Vue {
  @Ref('house') house!: HTMLDivElement

  itemsToShow = 0

  currIndex = 0
  type = 'house'
  recommendationsList = [
    {
      img: 'https://picsum.photos/340/382',
      title: 'Title_test',
      price: 'Price_test',
      tag: 'Tag_test',
      seller: {
        avatar: 'https://picsum.photos/40',
        name: 'Name_test',
        location: 'Location_test',
      },
    },
    {
      img: 'https://picsum.photos/340/382',
      title: 'Title_test',
      price: 'Price_test',
      tag: 'Tag_test',
      seller: {
        avatar: 'https://picsum.photos/40',
        name: 'Name_test',
        location: 'Location_test',
      },
    },
    {
      img: 'https://picsum.photos/340/382',
      title: 'Title_test',
      price: 'Price_test',
      tag: 'Tag_test',
      seller: {
        avatar: 'https://picsum.photos/40',
        name: 'Name_test',
        location: 'Location_test',
      },
    },
    {
      img: 'https://picsum.photos/340/382',
      title: 'Title_test',
      price: 'Price_test',
      tag: 'Tag_test',
      seller: {
        avatar: 'https://picsum.photos/40',
        name: 'Name_test',
        location: 'Location_test',
      },
    },
  ]

  get displayRecommendations() {
    return this.recommendationsList
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
.container--flex {
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;
}

section {
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

  margin: 0rem -2rem;
  /* margin-right: 0rem; */
}

.carousel {
  max-width: calc(100vw - 2rem);
}

@media (min-width: 75rem) {
  .featured-house > h1 {
    margin-left: 2.5rem;
  }
  .house {
    margin-left: 2.5rem;
    margin-right: 0rem;
  }

  .carousel {
    max-width: calc(100vw - 4.5rem);
  }

  .carousel__slide {
    width: 340px !important;
  }
}
</style>
