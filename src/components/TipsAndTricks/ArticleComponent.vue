<template>
  <article>
    <img :src="article.cover" alt="Article cover" class="cover" />
    <div class="content">
      <div class="details">
        <div class="author">
          <img :src="author.avatar" alt="Author avatar" class="avatar" />
          {{ author.name }}
        </div>
        <h1 class="title">{{ article.title }}</h1>
        <p v-if="article.summary" class="summary">{{ article.summary }}</p>
      </div>
      <div class="info">
        <IconClock class="icon" />
        {{ article.timeToRead }} min read | {{ article.date.getDate() }}
        {{ monthNames[article.date.getMonth()] }} {{ article.date.getFullYear() }}
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator'
import IconClock from '@/components/icons/IconClock.vue'

@Component({
  components: {
    IconClock,
  },
})
export default class ArticleComponent extends Vue {
  @Prop() author!: { avatar: string; name: string }
  @Prop() article!: {
    cover: string
    title: string
    summary?: string
    timeToRead: number
    date: Date
  }

  monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
}
</script>

<style scoped lang="scss">
article {
  display: flex;
  flex-wrap: wrap;
  row-gap: 1.5rem;
  column-gap: 2rem;

  .cover {
    width: 100%;
    border-radius: 1rem;
    object-fit: cover;

    @media (min-width: 32rem) {
      width: fit-content;
      height: fit-content;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .details {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      align-self: stretch;

      .author {
        display: flex;
        align-items: center;
        gap: 1rem;
        align-self: stretch;

        font-size: 0.875rem;
        line-height: 157%;
        color: #3c4563;
        flex-grow: 1;

        .avatar {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
        }
      }

      .title {
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 178%;
        text-transform: capitalize;
        color: #1b1c57;
        align-self: stretch;
      }

      .summary {
        font-size: 0.875rem;
        line-height: 171%;
        color: #626687;
        opacity: 0.75;
        align-self: stretch;
      }
    }

    .info {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      align-self: stretch;

      font-size: 0.875rem;
      line-height: 171%;

      color: #888b97;

      flex-grow: 0;
    }
  }

  &.main {
    flex-wrap: wrap;

    .cover {
      min-height: 280px;

      @media (min-width: 32rem) {
        width: 100%;
        height: auto;
      }
    }
  }

  @media (min-width: 32rem) {
    flex-wrap: nowrap;
  }
}
</style>
