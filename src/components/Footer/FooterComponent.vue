<template>
  <footer class="grid--main">
    <div class="container--flex">
      <article class="bio">
        <div class="title">
          <img alt="Hounter logo" src="@/assets/logo.svg" width="36" height="36" />
          <h1>Hounter</h1>
        </div>
        <p>
          We provide information about properties such as houses, villas and apartments to help
          people find their dream home
        </p>
        <div class="social">
          <figure><IconFacebook /></figure>
          <figure><IconTwitter /></figure>
          <figure><IconInstagram /></figure>
        </div>
      </article>
      <FooterItemComponent v-for="(item, index) in footerItems" :key="index" :content="item" />
    </div>
    <figure class="color-blur">
      <svg
        class="vector vector--1"
        width="660"
        height="442"
        viewBox="0 0 660 442"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3" filter="url(#filter0_f_1_30)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M591.209 352.001C580.173 386.669 554.914 413.19 532.037 441.462C512.326 465.821 491.32 487.535 466.292 506.373C438.414 527.356 412.122 556.558 377.273 557.946C342.311 559.339 312.951 533.407 284.067 513.634C256.911 495.044 237.575 469.427 214.166 446.286C182.126 414.612 126.833 396.642 120.566 352.001C114.507 308.845 158.489 275.35 185.353 241.061C209.162 210.671 235.738 183.755 268.438 163.262C302.015 142.219 338.082 115.019 377.273 120.785C416.401 126.54 433.038 176.499 469.088 192.779C511.116 211.758 573.755 185.58 601.836 222.192C628.703 257.222 604.604 309.919 591.209 352.001Z"
            fill="#B9FF82"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1_30"
            x="1.52588e-05"
            y="0"
            width="734"
            height="678"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_1_30" />
          </filter>
        </defs>
      </svg>
      <svg
        class="vector vector--2"
        width="414"
        height="507"
        viewBox="0 0 414 507"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3" filter="url(#filter0_f_1_29)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M591.209 352.001C580.173 386.669 554.914 413.19 532.037 441.462C512.326 465.821 491.32 487.535 466.292 506.373C438.414 527.356 412.122 556.558 377.273 557.946C342.311 559.339 312.951 533.407 284.067 513.634C256.911 495.044 237.575 469.427 214.166 446.286C182.126 414.612 126.833 396.642 120.566 352.001C114.507 308.845 158.489 275.35 185.353 241.061C209.162 210.671 235.738 183.755 268.438 163.262C302.015 142.219 338.082 115.019 377.273 120.785C416.401 126.54 433.038 176.499 469.088 192.779C511.116 211.758 573.755 185.58 601.836 222.192C628.703 257.222 604.604 309.919 591.209 352.001Z"
            fill="#82BBFF"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1_29"
            x="0"
            y="0"
            width="734"
            height="678"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_1_29" />
          </filter>
        </defs>
      </svg>
    </figure>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'

import FooterItemComponent from './FooterItemComponent.vue'
import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconTwitter from '@/components/icons/IconTwitter.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue'

@Component({
  components: {
    FooterItemComponent,
    IconFacebook,
    IconTwitter,
    IconInstagram,
  },
})
export default class FooterComponent extends Vue {
  footerItems = [
    {
      title: 'Property',
      items: ['House', 'Apartment', 'Villa'],
    },
    {
      title: 'Article',
      items: ['New Article', 'Popular Article', 'Most Read', 'Tips & Tricks'],
    },
    {
      title: 'Contact',
      items: ['2464 Royal Ln. Mesa, New Jersey 45463', '(671) 555-0110', 'info@hounter.com'],
    },
  ]
}
</script>

<style scoped lang="scss">
.color-blur {
  position: relative;
  z-index: -9999;

  .vector {
    position: absolute;
    bottom: -7.5rem;

    &--1 {
      right: 46px;
    }

    &--2 {
      right: 0;
    }
  }

  @media (max-width: 74rem) {
    margin-right: -2rem;
  }
}

.container--flex {
  display: flex;
  flex-wrap: wrap;
  gap: 2.25rem;
  grid-column: 2;

  @media (min-width: 75rem) {
    gap: 5.5rem;
  }
}

.bio {
  margin-right: auto;
  flex-basis: 15rem;
  flex-grow: 1;
  max-width: 20rem;

  > h1 {
    color: var(--vt-c-blue);
    font-weight: 700;
    line-height: 1.25rem;
    text-transform: capitalize;
  }
}

.title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

p {
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: var(--vt-c-gray-soft);
}

.social {
  display: flex;
  gap: 24px;

  > figure {
    display: flex;
    width: 2rem;
    height: 2rem;
    align-items: center;
    justify-content: center;
  }
}
</style>
