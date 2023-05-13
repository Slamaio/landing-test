<template>
  <figure>
    <figcaption>Our Partnership</figcaption>
    <div class="partnerships">
      <img src="@/assets/images/traveloka_logo.svg" />
      <img src="@/assets/images/tiket_logo.svg" />
      <img src="@/assets/images/airbnb_logo.svg" />
      <img src="@/assets/images/tripadvisor_logo.svg" />
    </div>
  </figure>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'

@Component({})
export default class PartnershipComponent extends Vue {}
</script>

<style scoped lang="scss">
figcaption {
  line-height: 200%;
  color: var(--vt-c-gray-mute);
}

.partnerships {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0;
  column-gap: 2rem;
}
</style>
