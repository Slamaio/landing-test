<template>
  <article class="review">
    <img :src="review.image" alt="" class="cover" />
    <div class="review__content">
      <div class="details">
        <h1 class="title">{{ review.title }}</h1>
        <p class="text">{{ review.text }}</p>
      </div>
      <div class="info">
        <UserCardComponent
          class="user"
          :avatar="review.user.avatar"
          :title="review.user.name"
          :subtitle="review.user.details"
        />
        <div class="stars">
          <IconStar />
          {{ review.stars }}
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator'
import UserCardComponent from '@/components/UserCardComponent.vue'
import IconStar from '../icons/IconStar.vue'

@Component({
  components: {
    UserCardComponent,
    IconStar,
  },
})
export default class ReviewCardComponent extends Vue {
  @Prop() review!: {
    image: string
    title: string
    text: string
    user: {
      avatar: string
      name: string
      details: string
    }
    stars: number
  }
}
</script>

<style scoped lang="scss">
.review {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 100%;
}

.cover {
  max-width: 90svw;
  z-index: -1;
  background: #c4c4c4;
  opacity: 0.7;
  border-radius: 0.5rem;

  object-fit: cover;
}

.review__content {
  margin-top: -9rem;

  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1.5rem;

  background: #ffffff;

  box-shadow: 0px 9px 32px rgba(89, 92, 219, 0.05);
  border-radius: 16px;

  @media (min-width: 32rem) {
    margin-inline: 4rem;
  }

  .details {
    display: flex;
    flex-direction: column;

    gap: 1rem;

    .title {
      font-weight: 600;
      font-size: 1.25rem;
      line-height: 25px;

      text-transform: capitalize;

      color: #1b1c57;
    }

    .text {
      font-size: 0.875rem;
      line-height: 171%;

      color: #626687;

      opacity: 0.75;
    }
  }

  .info {
    display: flex;

    justify-content: flex-end;
    align-items: flex-end;

    gap: 1.5rem;

    .user {
      flex-grow: 1;
    }
    .stars {
      display: flex;
      align-items: center;
      gap: 1rem;

      font-weight: 600;
      font-size: 1.25rem;
      line-height: 140%;
      color: #3c4563;
    }
  }
}
</style>
