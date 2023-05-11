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
        <ArticleComponent class="main" :author="mainArticle.author" :article="mainArticle.data" />

        <div class="articles">
          <ArticleComponent
            v-for="(article, index) in articleList"
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

@Component({
  components: {
    ArticleComponent,
  },
})
export default class TipsAndTricksComponent extends Vue {
  mainArticle = {
    data: {
      cover: 'https://picsum.photos/560/280',
      title: '12 Things to know before buying a house',
      summary:
        'Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house',
      timeToRead: 8,
      date: new Date('2021-4-25'),
    },
    author: {
      avatar: 'https://picsum.photos/32',
      name: 'Cameron Williamson',
    },
  }

  articleList = [
    {
      data: {
        cover: 'https://picsum.photos/200/144',
        title: 'The things we need to check when we want to buy a house',
        summary: '',
        timeToRead: 4,
        date: new Date('2021-04-25'),
      },
      author: {
        avatar: 'https://picsum.photos/32',
        name: 'Dianne Russell',
      },
    },
    {
      data: {
        cover: 'https://picsum.photos/200/144',
        title: '7 Ways to distinguish the quality of the house we want to buy',
        summary: '',
        timeToRead: 6,
        date: new Date('2021-04-24'),
      },
      author: {
        avatar: 'https://picsum.photos/32',
        name: 'Courtney Henry',
      },
    },
    {
      data: {
        cover: 'https://picsum.photos/200/144',
        title: 'The best way to know the quality of the house we want to buy',
        summary: '',
        timeToRead: 2,
        date: new Date('2021-04-24'),
      },
      author: {
        avatar: 'https://picsum.photos/32',
        name: 'Darlene Robertson',
      },
    },
  ]
}
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
