<template>
  <section class="grid--main">
    <article class="container--flex">
      <div class="content">
        <h1>Subscribe For More Info and update from Hounter</h1>
        <div class="subscribe">
          <Icon class="subscribe__icon" icon="eva:email-fill" color="#3b82f6" />
          <input class="subscribe__input" type="email" placeholder="Your email here" />
          <button class="subscribe__button">Subsribe Now</button>
        </div>
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
export default class SubscribeComponent extends Vue {}
</script>

<style scoped lang="scss">
.container--flex {
  grid-column: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  background: linear-gradient(220deg, rgba(145, 184, 249, 0.3), rgba(255, 0, 0, 0) 10%),
    linear-gradient(270deg, rgba(232, 230, 239, 0.8), rgb(242, 253, 249), rgba(0, 255, 0, 0) 70%),
    linear-gradient(
      140deg,
      rgba(145, 184, 249, 1),
      rgba(232, 230, 239, 0.8),
      rgba(255, 0, 0, 0) 80%
    );
  padding: 4rem 2rem;
}

.content {
  display: flex;
  flex-direction: column;
  max-width: 31rem;
  gap: 2rem;
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
