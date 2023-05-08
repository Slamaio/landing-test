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

<style scoped>
.container--flex {
  display: flex;
  flex-wrap: wrap;
  gap: 2.25rem;
  grid-column: 2;
}

.bio {
  margin-right: auto;
  flex-basis: 15rem;
  flex-grow: 1;

  max-width: 20rem;
}

.bio > h1 {
  color: var(--vt-c-blue);
  font-weight: 700;
  line-height: 1.25rem;
  text-transform: capitalize;
}

.title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

p {
  margin-top: 1rem;
  margin-bottom: 1.5rem;

  font-size: 14px;
  line-height: 24px;
  color: var(--vt-c-gray-soft);
}

.social {
  display: flex;
  gap: 24px;
}

.social > figure {
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
}

@media (min-width: 75rem) {
  .container--flex {
    gap: 5.5rem;
  }
}
</style>
