<template>
  <nav class="container--flex">
    <div class="title">
      <img alt="Hounter logo" src="@/assets/logo.svg" width="36" height="36" />
      <h1>Hounter</h1>
    </div>
    <div class="nav__buttons">
      <button class="nav__button">About Us</button>
      <button class="nav__button">Article</button>
      <button class="nav__button">Property</button>
      <button class="nav__button nav__button--sign-up">Sign Up!</button>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'

@Component({})
export default class NavbarComponent extends Vue {}
</script>

<style scoped>
.container--flex {
  display: flex;
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

.nav__buttons {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
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

  color: #f0f3fd;

  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.nav__button:active {
  color: #f0f3fd;
  background: var(--vt-c-gray);
}

.nav__button--sign-up {
  align-items: center;
  background: #d1fae5;
  padding: 0.75rem 1.5rem;
  border: none;
  line-height: 1.375rem;

  color: #047857;
}

@media (min-width: 32rem) {
  .nav__button--sign-up {
    margin-left: 2rem;
  }
}

@media (min-width: 75rem) {
  nav {
    margin-top: 2.5rem;
  }

  .container--flex {
    grid-column: 2/4;
  }

  .nav__buttons {
    gap: 1.5rem;
  }
}
</style>
