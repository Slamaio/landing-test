<template>
  <article>
    <div class="image">
      <img :src="item.img" />
      <div class="tag">{{ item.tag }}</div>
    </div>
    <div class="info">
      <h1>{{ item.title }}</h1>
      <h2>$ {{ item.price }}</h2>
    </div>
    <!-- <div class="seller">
      <img class="seller__avatar" :src="item.seller.avatar" />
      <div class="seller__info">
        <h3>{{ item.seller.name }}</h3>
        <p>{{ item.seller.location }}</p>
      </div>
    </div> -->
    <UserCardComponent
      :avatar="item.seller.avatar"
      :title="item.seller.name"
      :subtitle="item.seller.location"
    />
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator'

import UserCardComponent from '@/components/UserCardComponent.vue'

@Component({
  components: {
    UserCardComponent,
  },
})
export default class RecommendationCardComponent extends Vue {
  @Prop() item!: {
    img: string
    title: string
    price: string
    tag: string
    seller: {
      avatar: string
      name: string
      location: string
    }
  }

  @Prop() index!: number
}
</script>

<style scoped>
article {
  position: relative;

  display: flex;
  flex-direction: column;

  flex-shrink: 0;
  gap: 1.5rem;
  border-radius: 2px;
}

.image {
  height: 382px;
  width: 340px;
}

.image > img {
  border-radius: 1.5rem;
  z-index: -1;
}

.tag {
  display: flex;
  padding: 0.5rem 1rem;
  gap: 0.625rem;

  background: #fee2e2;
  border-radius: 2rem;

  position: absolute;
  left: 1rem;
  bottom: 1rem;

  font-size: 0.875rem;
  line-height: 1.125rem;

  text-transform: capitalize;

  color: #ef4444;
}

h1,
h2,
h3,
p {
  align-self: stretch;
}

h1 {
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 133%;

  color: #0e1735;
}

h2 {
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 160%;

  color: #3c4563;
}

h3 {
  font-size: 1.125rem;
  line-height: 133%;

  color: #0e1735;
}

p {
  font-size: 0.875rem;
  line-height: 157%;

  color: #888b97;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-self: stretch;
}

.seller {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.seller__avatar {
  border-radius: 50%;
}
</style>
