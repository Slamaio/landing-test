<template>
  <article>
    <img :src="img" />
    <div class="container--flex">
      <h1>{{ title }}</h1>
      <p>{{ text }}</p>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator'

@Component({})
export default class HighlightsItemComponent extends Vue {
  @Prop() img!: string
  @Prop() title!: string
  @Prop() text!: string
}
</script>

<style scoped lang="scss">
article {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  gap: 1rem;
  width: max-content;

  background: var(--vt-c-white);
  box-shadow: 0px 0.75rem 3rem rgba(51, 51, 51, 0.06);
  border-radius: 2rem;

  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 1.5rem;
  }

  .container--flex {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }

  h1 {
    font-size: 1rem;
    font-weight: 600;
    line-height: 150%;
    color: var(--vt-heading);
    align-self: stretch;
  }

  p {
    font-size: 0.75rem;
    line-height: 167%;
    color: #68799f;
  }
}
</style>
