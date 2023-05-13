<template>
  <div class="search">
    <IconLocation class="search__icon" />
    <input class="search__input" type="text" placeholder="Search for the location you want!" />
    <button class="search__button">
      Search
      <IconArrowForward />
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import IconLocation from '@/components/icons/IconLocation.vue'
import IconArrowForward from '@/components/icons/IconArrowForward.vue'

@Component({
  components: {
    IconLocation,
    IconArrowForward,
  },
})
export default class SearchComponent extends Vue {}
</script>

<style scoped lang="scss">
.search {
  display: flex;
  align-items: center;
  padding: 0.25rem 0.25rem 0.25rem 1.5rem;
  gap: 1rem;

  background: var(--vt-c-white);
  border: 1px solid #e0e3eb;
  border-radius: 2rem;

  &__icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  &__input {
    flex: 1;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 157%;

    width: 0;

    color: var(--vt-c-gray-mute);
    border: none;

    &:focus {
      outline: none;
    }
  }

  &__button {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    gap: 0.4rem;

    background: var(--vt-c-green-soft);
    border: none;
    border-radius: 2rem;

    font-weight: 600;
    font-size: 0.875rem;
    line-height: 157%;

    color: var(--vt-c-white);
  }
}
</style>
