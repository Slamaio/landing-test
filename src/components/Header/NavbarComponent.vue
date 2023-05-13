<template>
  <nav class="container--flex">
    <div class="title">
      <img alt="Hounter logo" src="@/assets/logo.svg" width="36" height="36" />
      <h1>Hounter</h1>
    </div>
    <div class="nav__buttons">
      <button class="nav__button">About Us</button>
      <button class="nav__button">Article</button>
      <button class="nav__button nav__button--dropdown">
        Property <IconArrowDown />
        <div class="dropdown-content">
          <a href="#">House</a>
          <a href="#">Villa</a>
          <a href="#">Apartment</a>
        </div>
      </button>
      <button class="nav__button nav__button--sign-up">Sign Up!</button>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'

import IconArrowDown from '@/components/icons/IconArrowDown.vue'

@Component({
  components: {
    IconArrowDown,
  },
})
export default class NavbarComponent extends Vue {}
</script>

<style scoped lang="scss">
.container--flex {
  display: flex;
  flex-wrap: wrap;

  .title {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    h1 {
      color: var(--vt-c-blue);
      font-weight: 700;
      line-height: 1.25rem;
      text-transform: capitalize;
    }
  }

  nav {
    justify-content: space-between;
    row-gap: 1rem;

    .nav__buttons {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.5rem;

      .nav__button {
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

        &--dropdown {
          position: relative;

          .dropdown-content {
            display: none;
            position: absolute;
            top: calc(2.25rem - 2px);
            left: -1px;
            background-color: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-top: none;
            width: calc(100% + 2px);
            z-index: 1;
          }

          &:hover,
          &:focus {
            border-radius: 1.25rem 1.25rem 0rem 0rem;
            background: rgba(255, 255, 255, 0.1) !important;
            border-color: rgba(255, 255, 255, 0.3) !important;
            border-bottom: none !important;

            .dropdown-content {
              display: block;

              a {
                display: block;
                padding: 0.5rem 1rem;

                text-decoration: none;
                font-weight: 600;
                font-size: 0.875rem;
                line-height: 1.125rem;

                text-transform: capitalize;

                color: #f0f3fd;

                &:hover {
                  background-color: var(--vt-c-gray);
                }
              }
            }
          }
        }

        &--sign-up {
          align-items: center;
          background: #d1fae5;
          padding: 0.75rem 1.5rem;
          border: none;
          line-height: 1.375rem;
          color: #047857;
        }
      }
    }
  }

  @media (min-width: 32rem) {
    nav {
      .nav__button--sign-up {
        margin-left: 2rem;
      }
    }
  }

  @media (min-width: 75rem) {
    nav {
      margin-top: 2.5rem;
    }

    grid-column: 2/4;

    .nav__buttons {
      gap: 1.5rem;
    }
  }
}
</style>
