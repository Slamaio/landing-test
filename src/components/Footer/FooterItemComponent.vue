<template>
  <article>
    <h1>{{ content.title }}</h1>
    <ul>
      <li v-for="(item, index) in content.items" :key="index">{{ item }}</li>
    </ul>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator'

@Component({})
export default class FooterItemComponent extends Vue {
  @Prop() content!: { title: string; items: string[] }
}
</script>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

h1 {
  color: var(--vt-c-blue-dark);
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.375rem;
  text-transform: capitalize;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 1.125rem;

  list-style-type: none;

  padding: 0;

  font-size: 0.875rem;
  line-height: 1.125rem;

  color: var(--vt-c-gray-mute);
}
</style>
