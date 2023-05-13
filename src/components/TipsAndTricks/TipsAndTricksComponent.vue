<template>
  <section class="grid--main">
    <figure class="color-blur">
      <svg
        class="vector vector--1"
        width="444"
        height="678"
        viewBox="0 0 444 678"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3" filter="url(#filter0_f_1_26)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M301.209 352.001C290.173 386.669 264.914 413.19 242.037 441.462C222.326 465.821 201.32 487.535 176.292 506.373C148.414 527.356 122.122 556.558 87.2732 557.946C52.3115 559.339 22.9507 533.407 -5.93251 513.634C-33.0888 495.044 -52.4251 469.427 -75.8344 446.286C-107.874 414.612 -163.167 396.642 -169.434 352.001C-175.493 308.845 -131.511 275.35 -104.647 241.061C-80.8375 210.671 -54.2616 183.755 -21.5624 163.262C12.0146 142.219 48.0816 115.019 87.2732 120.785C126.401 126.54 143.038 176.499 179.088 192.779C221.116 211.758 283.755 185.58 311.836 222.192C338.703 257.222 314.604 309.919 301.209 352.001Z"
            fill="#82FFE8"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1_26"
            x="-290"
            y="0"
            width="734"
            height="678"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_1_26" />
          </filter>
        </defs>
      </svg>
      <svg
        class="vector vector--2"
        width="472"
        height="678"
        viewBox="0 0 472 678"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3" filter="url(#filter0_f_1_28)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M329.209 352.001C318.173 386.669 292.914 413.19 270.037 441.462C250.326 465.821 229.32 487.535 204.292 506.373C176.414 527.356 150.122 556.558 115.273 557.946C80.3115 559.339 50.9507 533.407 22.0675 513.634C-5.08885 495.044 -24.4251 469.427 -47.8344 446.286C-79.8736 414.612 -135.167 396.642 -141.434 352.001C-147.493 308.845 -103.511 275.35 -76.6469 241.061C-52.8376 210.671 -26.2616 183.755 6.43753 163.262C40.0146 142.219 76.0816 115.019 115.273 120.785C154.401 126.54 171.038 176.499 207.088 192.779C249.116 211.758 311.755 185.58 339.836 222.192C366.703 257.222 342.604 309.919 329.209 352.001Z"
            fill="#C8FF82"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1_28"
            x="-262"
            y="0"
            width="734"
            height="678"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_1_28" />
          </filter>
        </defs>
      </svg>
    </figure>
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
        <button class="title__button">More Articles</button>
      </div>
      <div class="container--grid">
        <ArticleComponent
          class="main"
          :author="articleList[0].author"
          :article="articleList[0].data"
        />

        <div class="articles">
          <ArticleComponent
            v-for="(article, index) in articleList.slice(1)"
            :key="index"
            :author="article.author"
            :article="article.data"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import ArticleComponent from './ArticleComponent.vue'
import { useAppStore } from '@/store/app'

@Component({
  components: {
    ArticleComponent,
  },
})
export default class TipsAndTricksComponent extends Vue {
  store = useAppStore()

  articleList = this.store.articles
}
</script>

<style scoped lang="scss">
.color-blur {
  position: relative;
  z-index: -9999;

  .vector {
    position: absolute;
    left: 0;

    &--1 {
      top: -55px;
    }

    &--2 {
      top: 202px;
    }
  }
  @media (max-width: 75rem) {
    margin-left: -2rem;
  }
}

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
    grid-auto-flow: row;
    gap: 4.25rem;

    .articles {
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
    }

    @media (min-width: 75rem) {
      grid-auto-columns: minmax(0, 1fr);
      grid-auto-flow: column;
      .main {
        order: 1;
      }
    }
  }
}
</style>
