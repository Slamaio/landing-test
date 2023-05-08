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

<style scoped>
article {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 1.5rem;
  gap: 1rem;

  background: var(--vt-c-white);
  box-shadow: 0px 0.75rem 3rem rgba(51, 51, 51, 0.06);
  border-radius: 2rem;
}

img {
}

.container--flex {
  display: flex;
  flex-direction: column;
  gap: 2px;
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
  align-self: stretch;
}
</style>
