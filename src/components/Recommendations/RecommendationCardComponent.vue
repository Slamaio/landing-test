<template>
  <article>
    <div class="image">
      <img :src="item.img" />
      <TagComponent :variation="item.tag" />
    </div>
    <div class="info">
      <h1>{{ item.title }}</h1>
      <h2>$ {{ item.price }}</h2>
    </div>

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
import TagComponent from './TagComponent.vue'

@Component({
  components: {
    UserCardComponent,
    TagComponent,
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

<style scoped lang="scss">
article {
  position: relative;

  display: flex;
  flex-direction: column;

  gap: 1.5rem;
  border-radius: 0.125rem;
}

.image {
  height: 382px;
  max-width: 100%;
}

.image > img {
  max-width: 90svw;
  height: 382px;
  border-radius: 1.5rem;
  z-index: -1;

  object-fit: cover;
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
</style>
