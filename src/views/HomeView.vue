<template>
  <main>
    <RecommendationsComponent />
    <ReadyToSellComponent />
    <ReviewsComponent />
    <TipsAndTricksComponent />
    <SubscribeComponent />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'

import RecommendationsComponent from '@/components/Recommendations/RecommendationsComponent.vue'
import ReadyToSellComponent from '@/components/ReadyToSellComponent.vue'
import ReviewsComponent from '@/components/UserReviews/ReviewsComponent.vue'
import TipsAndTricksComponent from '@/components/TipsAndTricks/TipsAndTricksComponent.vue'
import SubscribeComponent from '@/components/SubscribeComponent.vue'

@Component({
  components: {
    RecommendationsComponent,
    ReadyToSellComponent,
    ReviewsComponent,
    TipsAndTricksComponent,
    SubscribeComponent,
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  gap: 7.5rem;
}
</style>
