<template>
  <nav class="container--flex">
    <div class="title">
      <img alt="Hounter logo" src="@/assets/logo.svg" width="36" height="36" />
      <h1>Hounter</h1>
    </div>
    <ul>
      <div class="container--flex nav-buttons">
        <li><button class="nav__button">About Us</button></li>
        <li><button class="nav__button">Article</button></li>
        <li><button class="nav__button">Property</button></li>
      </div>
      <li><button class="nav__button nav__button--sign-up">Sign Up!</button></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'

@Component({})
export default class NavbarComponent extends Vue {}
</script>

<style scoped>
.container--flex {
  flex-wrap: wrap;
}
.title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

h1 {
  color: var(--vt-c-blue);
  font-weight: 700;
  line-height: 1.25rem;
  text-transform: capitalize;
}

nav {
  justify-content: space-between;
  row-gap: 1rem;
}

@media (min-width: 64rem) {
  nav {
    margin-top: 2.5rem;
  }
}

nav ul {
  list-style: none;
  padding: 0;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 3.5rem;
  row-gap: 1.5rem;
}

.nav-buttons {
  flex-wrap: wrap;
  column-gap: 1.5rem;
  row-gap: 1rem;
}

.nav__button {
  cursor: pointer;

  display: flex;
  padding: 0.5rem 1rem;
  gap: 0.625rem;

  border-radius: 2rem;

  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.125rem;

  text-transform: capitalize;

  /* color: #f0f3fd; */
  /* color: black; */

  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.nav__button--sign-up {
  align-items: center;
  background: #d1fae5;
  padding: 0.75rem 1.5rem;
  border: none;
  line-height: 1.375rem;

  color: #047857;
}
</style>
