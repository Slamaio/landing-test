<template>
  <article class="user">
    <img class="user__avatar" :src="avatar" alt="User Avatar" />
    <div class="user__info">
      <h1 class="user__title">{{ title }}</h1>
      <p class="user__subtitle">{{ subtitle }}</p>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator'

@Component({})
export default class UserCardComponent extends Vue {
  @Prop() avatar?: string
  @Prop() title?: string
  @Prop() subtitle?: string
}
</script>

<style scoped lang="scss">
.user {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  .user__avatar {
    border-radius: 50%;
    flex-grow: 0;
  }

  .user__info {
    .user__title {
      align-self: stretch;
      font-size: 1.125rem;
      line-height: 133%;

      color: #0e1735;
    }

    .user__subtitle {
      align-self: stretch;
      font-size: 0.875rem;
      line-height: 157%;

      color: #888b97;
    }
  }
}
</style>
