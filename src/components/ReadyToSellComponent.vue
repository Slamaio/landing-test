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
      <figure class="gallery">
        <img
          :src="gallery[0].url"
          alt=""
          class="gallery__main"
          @click="openModal(gallery[0].url, 0)"
        />
        <div class="gallery__other">
          <img
            :src="gallery[1].url"
            alt=""
            class="gallery__secondary"
            @click="openModal(gallery[1].url, 1)"
          />
          <div class="gallery__tertiary">
            <img
              v-for="(img, index) in gallery.slice(2)"
              :key="img.id"
              :src="img.url"
              alt=""
              @click="openModal(img.url, index + 2)"
            />
          </div>
        </div>
      </figure>
      <ModalComponent class="modal" v-if="showModal" @close="closeModal">
        <button class="prev" @click="carousel.prev"><IconArrowBack /></button>
        <CarouselComponent class="carousel" v-model="gallery" :gap="'1rem'" ref="carousel">
          <template #slides>
            <img
              draggable="false"
              class="slide"
              v-for="img in gallery"
              :key="img.id"
              :src="img.url"
            />
          </template>
        </CarouselComponent>
        <button class="next" @click="carousel.next"><IconArrowForward /></button>
      </ModalComponent>
    </article>
    <figure class="color-blur">
      <svg
        class="vector vector--1"
        width="520"
        height="678"
        viewBox="0 0 520 678"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3" filter="url(#filter0_f_1_25)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M591.209 352.001C580.173 386.669 554.914 413.19 532.037 441.462C512.326 465.821 491.32 487.535 466.292 506.373C438.414 527.356 412.122 556.558 377.273 557.946C342.311 559.339 312.951 533.407 284.067 513.634C256.911 495.044 237.575 469.427 214.166 446.286C182.126 414.612 126.833 396.642 120.566 352.001C114.507 308.845 158.489 275.35 185.353 241.061C209.162 210.671 235.738 183.755 268.438 163.262C302.015 142.219 338.082 115.019 377.273 120.785C416.401 126.54 433.038 176.499 469.088 192.779C511.116 211.758 573.755 185.58 601.836 222.192C628.703 257.222 604.604 309.919 591.209 352.001Z"
            fill="#FF9882"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1_25"
            x="0"
            y="0"
            width="734"
            height="678"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_1_25" />
          </filter>
        </defs>
      </svg>
      <svg
        class="vector vector--2"
        width="461"
        height="678"
        viewBox="0 0 461 678"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3" filter="url(#filter0_f_1_27)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M591.209 352.001C580.173 386.669 554.914 413.19 532.037 441.462C512.326 465.821 491.32 487.535 466.292 506.373C438.414 527.356 412.122 556.558 377.273 557.946C342.311 559.339 312.951 533.407 284.067 513.634C256.911 495.044 237.575 469.427 214.166 446.286C182.126 414.612 126.833 396.642 120.566 352.001C114.507 308.845 158.489 275.35 185.353 241.061C209.162 210.671 235.738 183.755 268.438 163.262C302.015 142.219 338.082 115.019 377.273 120.785C416.401 126.54 433.038 176.499 469.088 192.779C511.116 211.758 573.755 185.58 601.836 222.192C628.703 257.222 604.604 309.919 591.209 352.001Z"
            fill="#FFFA82"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1_27"
            x="0"
            y="0"
            width="734"
            height="678"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_1_27" />
          </filter>
        </defs>
      </svg>
    </figure>
  </section>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'vue-facing-decorator'
import { Icon } from '@iconify/vue'
import UserCardComponent from '@/components/UserCardComponent.vue'
import ModalComponent from '@/components/ModalComponent.vue'
import CarouselComponent from '@/components/CarouselComponent.vue'
import IconArrowBack from './icons/IconArrowBack.vue'
import IconArrowForward from './icons/IconArrowForward.vue'
import { useAppStore } from '@/store/app'

@Component({
  components: {
    Icon,
    UserCardComponent,
    ModalComponent,
    CarouselComponent,
    IconArrowBack,
    IconArrowForward,
  },
})
export default class ReadyToSellComponent extends Vue {
  @Ref('carousel') carousel!: any

  store = useAppStore()

  showModal = false
  // modalMedia = ''

  gallery = this.store.gallery

  openModal(modalMedia: string, index: number) {
    this.showModal = true
    // this.modalMedia = modalMedia
    setTimeout(() => {
      this.carousel.goToSlide(index)
    }, 100)
  }

  closeModal() {
    this.showModal = false
  }
}
</script>

<style scoped lang="scss">
.color-blur {
  position: relative;
  z-index: -9999;

  .vector {
    position: absolute;
    right: 0;

    &--1 {
      top: -170px;
    }

    &--2 {
      top: -48px;
    }
  }

  @media (max-width: 75rem) {
    margin-right: -2rem;
  }
}

.container--flex {
  grid-column: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;

  .info__title-house-detail {
    display: flex;
    flex-grow: 1;
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

  .gallery {
    padding: 0.5rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    img {
      max-width: 100%;
      object-fit: cover;
      border-radius: 0.25rem;

      &:hover {
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
        z-index: 100;
      }
    }

    .gallery__other {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      img {
        aspect-ratio: 2/1;
      }

      .gallery__tertiary {
        display: inline-flex;
        gap: 0.5rem;
        img {
          max-width: 25%;
          aspect-ratio: 1;
        }
      }
    }

    @media (min-width: 48rem) {
      position: relative;
      margin: 0rem -2.5rem;
      .gallery__other {
        flex-direction: row;
        position: absolute;

        bottom: 0;
        left: 0;

        img {
          max-width: 18.5rem;
        }

        .gallery__tertiary {
          align-items: end;
          img {
            max-width: 6rem;
          }
        }
      }
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

  .modal:deep(.modal-content) {
    display: flex;

    .carousel {
      max-width: 459px;

      .slide {
        max-width: 100%;
      }
    }

    button {
      display: flex;
      align-items: center;
      padding: 0.5rem;

      &.prev {
        border-radius: 0.25rem 0rem 0rem 0.25rem;
      }

      &.next {
        border-radius: 0rem 0.25rem 0.25rem 0rem;
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

    .gallery {
      max-width: 33rem;

      img {
        max-width: 33rem;
      }
    }
  }
}
</style>
