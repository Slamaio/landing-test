<template>
  <section class="grid--main">
    <article class="container--flex">
      <div class="info">
        <div class="info__title-house-detail">
          <div class="title">
            <h2>
              <span></span>
              Ready to Sell!
            </h2>
            <h1>Let's tour and see our house!</h1>
            <p>
              Houses recommended by our partners that have been curated to become the home of your
              dreams!
            </p>
          </div>
          <div class="house-detail">
            <b>House Detail</b>
            <div class="row">
              <div class="detail__info"><img src="@/assets/images/bed.svg" />4 Bedrooms</div>
              <div class="detail__info"><img src="@/assets/images/bath.svg" />2 Bathrooms</div>
            </div>
            <div class="row">
              <div class="detail__info"><img src="@/assets/images/car-garage.svg" />1 Carport</div>
              <div class="detail__info">
                <img src="@/assets/images/stairs-with-handrail.svg" />2 Floors
              </div>
            </div>
          </div>
        </div>
        <hr class="info__divider" />
        <div class="info__contact-info">
          <UserCardComponent
            :avatar="'https://picsum.photos/56'"
            :title="'Dianne Russell'"
            :subtitle="'Manager Director'"
          />
          <button>
            <Icon icon="fluent:call-20-filled" color="white" width="24" height="24" />Contact Now
          </button>
        </div>
      </div>
      <figure class="image">
        <img src="https://picsum.photos/528/459" alt="" />
      </figure>
    </article>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import UserCardComponent from '@/components/UserCardComponent.vue'
import { Icon } from '@iconify/vue'

@Component({
  components: {
    UserCardComponent,
    Icon,
  },
})
export default class ReadyToSellComponent extends Vue {}
</script>

<style scoped lang="scss">
.container--flex {
  grid-column: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;

  .info__title-house-detail {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 522px;

    .title {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      h1 {
        font-weight: 600;
        font-size: 2rem;
        line-height: 2.5rem;
        text-transform: capitalize;
        color: var(--color-heading);
      }

      h2 {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1.125rem;
        text-transform: capitalize;
        color: var(--vt-c-yellow);

        span {
          width: 2rem;
          height: 0.0625rem;
          background-color: var(--vt-c-yellow);
        }
      }

      p {
        font-weight: 400;
        line-height: 175%;
        color: #626687;
        opacity: 0.75;
      }
    }
  }

  .image {
    max-width: 528px;
    flex-basis: auto;

    img {
      width: 100%;
      height: 459px;
      object-fit: cover;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .house-detail {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 27.5rem;

      b {
        font-weight: 600;
        line-height: 175%;
        color: #1b1c57;
        opacity: 0.75;
      }

      .row {
        display: flex;
        flex-wrap: wrap;
        column-gap: 3.25rem;
        row-gap: 1rem;
      }

      .detail__info {
        display: flex;
        align-items: center;
        flex: 1;
        gap: 1rem;
        font-weight: 500;
        line-height: 1.25rem;
        text-transform: capitalize;
        color: #3c4563;
      }
    }

    .info__divider {
      max-width: 27.5rem;
      border: 1px solid #f0f3fd;
    }

    .info__contact-info {
      display: flex;
      flex-wrap: wrap;
      max-width: 27.5rem;
      row-gap: 0.5rem;
      justify-content: center;

      p {
        font-size: 1rem;
        line-height: 150%;
      }

      button {
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

      @media (min-width: 25.5rem) {
        justify-content: space-between;
      }
    }
  }

  @media (min-width: 62rem) {
    flex-wrap: nowrap;
  }

  @media (min-width: 75rem) {
    flex-wrap: nowrap;

    .info {
      padding-left: 2.5rem;
    }

    .title > h2 {
      margin-left: -2.5rem;
    }

    .image {
      max-width: 33rem;

      img {
        max-width: 33rem;
      }
    }
  }
}
</style>
