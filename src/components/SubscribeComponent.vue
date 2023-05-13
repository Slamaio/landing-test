<template>
  <section class="grid--main">
    <article class="container--flex">
      <div class="content">
        <h1>Subscribe For More Info and update from Hounter</h1>
        <div class="subscribe">
          <Icon class="subscribe__icon" icon="eva:email-fill" color="#3b82f6" />
          <input
            class="subscribe__input"
            type="email"
            placeholder="Your email here"
            v-model="email"
          />
          <button class="subscribe__button" @click="validateEmail">Subsribe Now</button>
        </div>
      </div>
      <div class="flex-break"></div>
      <div class="blob-group blob-group--1">
        <img src="https://picsum.photos/81" alt="" class="blob blob--1" />
        <img src="https://picsum.photos/36" alt="" class="blob blob--2" />
        <img src="https://picsum.photos/36" alt="" class="blob blob--3" />
        <img src="https://picsum.photos/54" alt="" class="blob blob--4" />
      </div>
      <div class="blob-group blob-group--2">
        <img src="https://picsum.photos/70" alt="" class="blob blob--5" />
        <img src="https://picsum.photos/36" alt="" class="blob blob--6" />
        <img src="https://picsum.photos/36" alt="" class="blob blob--7" />
        <img src="https://picsum.photos/55" alt="" class="blob blob--8" />
      </div>
    </article>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import { Icon } from '@iconify/vue'

@Component({
  components: {
    Icon,
  },
})
export default class SubscribeComponent extends Vue {
  email = ''

  validateEmail() {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
      return
    } else {
      alert('Please enter a valid email address')
    }
  }
}
</script>

<style scoped lang="scss">
$background-gradient: linear-gradient(220deg, rgba(145, 184, 249, 0.3), rgba(255, 0, 0, 0) 10%),
  linear-gradient(270deg, rgba(232, 230, 239, 0.8), rgb(242, 253, 249), rgba(0, 255, 0, 0) 70%),
  linear-gradient(140deg, rgba(145, 184, 249, 1), rgba(232, 230, 239, 0.8), rgba(255, 0, 0, 0) 80%);

.container--flex {
  grid-column: 2;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  border-radius: 2rem;
  background: $background-gradient;
  padding: 4rem 2rem;

  @media (min-width: 64rem) {
    flex-wrap: nowrap;
    justify-content: space-between;
  }
}

.flex-break {
  flex-basis: 100%;
  width: 0;
  @media (min-width: 64rem) {
    display: none;
  }
}

.blob-group {
  display: flex;
  gap: 3rem;
  flex-grow: 0.25;
  justify-content: center;

  @media (min-width: 64rem) {
    &--1 {
      order: 1;
    }

    &--2 {
      order: 3;
    }
  }
}

.blob-group {
  display: grid;

  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  gap: 3rem;
  justify-items: center;
  align-items: center;
}

.blob {
  border-radius: 1.5rem;
  border: 2px solid #ffffff;
  filter: drop-shadow(0px 9px 32px rgba(89, 92, 219, 0.1));

  width: fit-content;

  &--2 {
    align-self: flex-end;
    margin-bottom: 0.5rem;
  }

  &--3 {
    align-self: flex-start;
  }

  &--4 {
    margin-top: 0.1rem;
    align-self: flex-start;
  }

  &--5 {
    align-self: flex-start;
    margin-bottom: 0.5rem;
  }

  &--6 {
    align-self: flex-end;
    margin-bottom: -1rem;
  }

  &--7 {
    align-self: flex-start;
    margin-top: -1.5rem;
  }

  &--8 {
    align-self: flex-end;
    margin-top: 1rem;
  }
}

.content {
  display: flex;
  flex-direction: column;
  max-width: 31rem;
  gap: 2rem;

  @media (min-width: 64rem) {
    order: 2;
  }
}

h1 {
  font-weight: 600;
  font-size: 2rem;
  line-height: 150%;
  text-align: center;
  text-transform: capitalize;
  color: var(--vt-c-blue);
}

.subscribe {
  display: flex;
  align-items: center;
  padding: 0.25rem 0.25rem 0.25rem 1.5rem;
  gap: 1rem;
  background: var(--vt-c-white);
  box-shadow: 0px 9px 32px rgba(89, 92, 219, 0.05);
  border-radius: 2rem;

  &__icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  &__input {
    flex: 1;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 157%;
    width: 0;
    color: var(--vt-c-gray-mute);
    border: none;

    &:focus {
      outline: none;
    }
  }

  &__button {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    gap: 0.25rem;
    background: var(--vt-c-green-soft);
    border: none;
    border-radius: 2rem;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 157%;
    color: var(--vt-c-white);
  }
}
</style>
