<template>
  <section class="grid--main">
    <div class="title">
      <div class="title--main">
        <h2>
          <span></span>
          See Our Review
        </h2>
        <h1>What Our Users Say About Us</h1>
      </div>
    </div>
    <div class="reviews">
      <CarouselComponent
        v-model="reviews"
        ref="carousel"
        :autoplay="5000"
        :pauseAutoplayOnHover="true"
        gap="3.5rem"
      >
        <template #slides>
          <div class="slide" v-for="(review, index) in reviews" :key="index">
            <ReviewCardComponent :review="review" />
          </div>
        </template>
        <template #navigation="activeSlide">
          <div class="pagination">
            <button
              @click="carousel.goToSlide(index)"
              v-for="(review, index) in reviews"
              :key="index"
              :class="{ active: index === activeSlide.slotScope }"
            ></button>
          </div>
        </template>
      </CarouselComponent>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'vue-facing-decorator'
import CarouselComponent from '@/components/CarouselComponent.vue'
import ReviewCardComponent from './ReviewCardComponent.vue'
import { useAppStore } from '@/store/app'

@Component({
  components: {
    CarouselComponent,
    ReviewCardComponent,
  },
})
export default class ReviewsComponent extends Vue {
  @Ref('carousel') carousel!: any

  store = useAppStore()

  reviews = this.store.reviews
}
</script>

<style scoped lang="scss">
section {
  display: grid;
  gap: 2.5rem;
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  grid-column: 2;

  &--main {
    @extend .title;
    gap: 0.75rem;

    h1 {
      font-weight: 600;
      font-size: 2rem;
      line-height: 2.5rem;
      text-transform: capitalize;
      text-align: center;
      color: var(--color-heading);
    }

    h2 {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 1.125rem;
      text-transform: capitalize;
      text-align: center;
      color: var(--vt-c-yellow);

      span {
        width: 2rem;
        height: 0.0625rem;
        background-color: var(--vt-c-yellow);
      }
    }
  }
}

.reviews {
  overflow: hidden;
  grid-column: 1/4;
  margin: 0rem -2rem;
  max-width: calc(100vw + 2rem);

  :deep(.inner) {
    margin-left: 2rem;
  }

  @media (min-width: 64rem) {
    .slide {
      margin-left: 2.5rem;
    }
  }
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.pagination button {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: #e0e3eb;
}

.pagination button.active {
  background: #3c4563;
}
</style>
