<template>
  <div class="title">
    <h1>
      find the place to <br />
      live <span>your dreams</span> <br />
      easily here
    </h1>
    <p>
      Everything you need about finding your place to live will be here, where it will be easier for
      you
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'

@Component({})
export default class TitleComponent extends Vue {}
</script>

<style scoped lang="scss">
.title {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h1 {
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 3.125rem;
    text-transform: capitalize;
    color: var(--color-heading);

    span {
      color: var(--vt-c-yellow);
    }
  }

  p {
    line-height: 175%;
    color: var(--vt-c-text-light-3);
    opacity: 0.75;
  }
}
</style>
