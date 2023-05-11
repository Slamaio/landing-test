<template>
  <section class="grid--main">
    <div class="container--flex">
      <div class="title">
        <div class="title--main">
          <h2>
            <span></span>
            See tips and trick from our partnership
          </h2>
          <h1>
            Find out more about <br />
            selling and buying homes
          </h1>
        </div>
        <button class="title__button">More Artikel</button>
      </div>
      <div class="container--grid">
        <div class="articles">asdf</div>
        <article class="main-article">asdf</article>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'

@Component({})
export default class TipsAndTricksComponent extends Vue {}
</script>

<style scoped lang="scss">
.container--flex {
  grid-column: 2;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    &--main {
      @extend .title;
      gap: 0.75rem;

      h1 {
        font-weight: 600;
        font-size: 2rem;
        line-height: 2.5rem;
        text-transform: capitalize;
        text-align: center;
        color: var(--color-heading);
      }

      h2 {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1.125rem;
        text-transform: capitalize;
        text-align: center;
        color: var(--vt-c-yellow);

        span {
          width: 2rem;
          height: 0.0625rem;
          background-color: var(--vt-c-yellow);
        }
      }
    }

    &__button {
      display: flex;
      align-items: center;
      padding: 0.75rem 1rem;
      gap: 1rem;
      background: #10b981;
      border-radius: 2rem;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 157%;
      color: #ffffff;
    }
  }

  .container--grid {
    display: grid;
    grid-auto-flow: column;
    gap: 4.25rem;
  }
}
</style>
