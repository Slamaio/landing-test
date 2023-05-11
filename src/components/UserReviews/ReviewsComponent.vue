<template>
  <section class="grid--main">
    <div class="container--flex">
      <div class="title">
        <div class="title--main">
          <h2>
            <span></span>
            See Our Review
          </h2>
          <h1>What Our User Say About Us</h1>
        </div>
      </div>
      <CarouselComponent v-model="reviews" ref="carousel" :autoplay="5000">
        <template #slides>
          <div class="slide" v-for="(review, index) in reviews" :key="index">
            {{ review.text }}
          </div>
        </template>
      </CarouselComponent>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import CarouselComponent from '@/components/CarouselComponent.vue'

@Component({
  components: {
    CarouselComponent,
  },
})
export default class ReviewsComponent extends Vue {
  reviews = [
    {
      image: '',
      title: '',
      text: 'Review 1',
      user: {
        avatar: '',
        name: '',
        details: '',
      },
      stars: 0,
    },
    {
      image: '',
      title: '',
      text: 'Review 2',
      user: {
        avatar: '',
        name: '',
        details: '',
      },
      stars: 0,
    },
    {
      image: '',
      title: '',
      text: 'Review 3',
      user: {
        avatar: '',
        name: '',
        details: '',
      },
      stars: 0,
    },
  ]
}
</script>

<style scoped lang="scss">
.container--flex {
  grid-column: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

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
</style>
